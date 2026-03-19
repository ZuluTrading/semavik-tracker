import { create } from "zustand";
import { storageService } from "../../../services/storage";
import type {
  Dose,
  ISODateLocal
} from "../../../shared/utils/date";
import {
  diffDaysISODateLocal,
  doseSuggestionAfter28Days,
  getInjectionStatus,
  injectionNextISODate,
  nextDoseAfterEscalation,
  toISODateLocal,
  ESCALATION_AFTER_DAYS,
  type InjectionStatus,
  formatCountdownFromToday
} from "../../../shared/utils/date";
import { upsertUserSchedule } from "../../../services/firestore";

export type InjectionHistoryItem = {
  date: ISODateLocal;
  dose: Dose;
};

export type TrackerSchedule = {
  start_date: ISODateLocal;
  last_injection: ISODateLocal;
  dose: Dose;
  history: InjectionHistoryItem[];
};

const STORAGE_KEY = "semavik-tracker-schedule-v1";

type Derived = {
  todayIso: ISODateLocal;
  nextInjectionIso: ISODateLocal;
  status: InjectionStatus;
  doseSuggestion: Dose | null;
  countdownText: string;
};

type TrackerStore = {
  initialized: boolean;
  schedule: TrackerSchedule | null;
  derived: Derived | null;
  actionBusy: boolean;
  error: string | null;

  initializeFromStorage: () => Promise<void>;
  refreshDerivedNow: () => void;

  completeOnboarding: (args: { lastInjectionIso: ISODateLocal; dose: Dose }) => Promise<void>;
  markInjectionDone: () => Promise<void>;
  resetAll: () => Promise<void>;
};

function isValidDose(v: unknown): v is Dose {
  return v === 0.25 || v === 0.5 || v === 1;
}

function isValidISODateLocal(v: unknown): v is ISODateLocal {
  return typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
}

function computeDerived(schedule: TrackerSchedule): Derived {
  const todayIso = toISODateLocal(new Date());
  const nextInjectionIso = injectionNextISODate(schedule.last_injection);
  const status = getInjectionStatus(todayIso, nextInjectionIso);

  const fixedDaysOnTherapy = diffDaysISODateLocal(schedule.start_date, todayIso);
  const doseSuggestion = doseSuggestionAfter28Days(schedule.dose, fixedDaysOnTherapy);

  const countdownText = formatCountdownFromToday(nextInjectionIso, todayIso);

  return { todayIso, nextInjectionIso, status, doseSuggestion, countdownText };
}

export const useTrackerStore = create<TrackerStore>((set, get) => ({
  initialized: false,
  schedule: null,
  derived: null,
  actionBusy: false,
  error: null,

  initializeFromStorage: async () => {
    const raw = await storageService.getItem<TrackerSchedule | null>(STORAGE_KEY);
    if (
      raw &&
      isValidISODateLocal(raw.start_date) &&
      isValidISODateLocal(raw.last_injection) &&
      isValidDose(raw.dose) &&
      Array.isArray(raw.history)
    ) {
      set({ schedule: raw, derived: computeDerived(raw), initialized: true });
      return;
    }
    set({ schedule: null, derived: null, initialized: true });
  },

  refreshDerivedNow: () => {
    const schedule = get().schedule;
    if (!schedule) return;
    set({ derived: computeDerived(schedule) });
  },

  completeOnboarding: async ({ lastInjectionIso, dose }) => {
    const schedule: TrackerSchedule = {
      start_date: lastInjectionIso,
      last_injection: lastInjectionIso,
      dose,
      history: [{ date: lastInjectionIso, dose }]
    };

    set({ schedule, derived: computeDerived(schedule), error: null });
    await storageService.setItem(STORAGE_KEY, schedule);

    try {
      await upsertUserSchedule({
        lastInjectionIso,
        startDateIso: lastInjectionIso,
        dose
      });
    } catch (e: any) {
      set({ error: "Could not sync to server yet." });
    }
  },

  markInjectionDone: async () => {
    if (get().actionBusy) return;
    const schedule = get().schedule;
    if (!schedule) return;

    set({ actionBusy: true, error: null });
    const todayIso = toISODateLocal(new Date());
    const daysOnTherapy = diffDaysISODateLocal(schedule.start_date, todayIso);

    const doseAtThisInjection = schedule.dose;
    const shouldIncrease =
      daysOnTherapy >= ESCALATION_AFTER_DAYS &&
      (doseAtThisInjection === 0.25 || doseAtThisInjection === 0.5);

    const nextDose = shouldIncrease
      ? nextDoseAfterEscalation(doseAtThisInjection)
      : doseAtThisInjection;

    // If we increased dose, reset the 28-day cycle start to today to avoid
    // multiple escalations on subsequent weekly injections.
    const nextStartDateIso = shouldIncrease ? todayIso : schedule.start_date;

    const updated: TrackerSchedule = {
      ...schedule,
      last_injection: todayIso,
      dose: nextDose,
      start_date: nextStartDateIso,
      history: [{ date: todayIso, dose: doseAtThisInjection }, ...schedule.history].slice(0, 32)
    };

    set({ schedule: updated, derived: computeDerived(updated) });
    await storageService.setItem(STORAGE_KEY, updated);

    try {
      await upsertUserSchedule({
        lastInjectionIso: todayIso,
        startDateIso: updated.start_date,
        dose: nextDose
      });
    } catch {
      set({ error: "Could not sync to server yet." });
    } finally {
      set({ actionBusy: false });
    }
  },

  resetAll: async () => {
    set({ actionBusy: false, error: null, schedule: null, derived: null, initialized: true });
    await storageService.removeItem(STORAGE_KEY);
  }
}));

useTrackerStore.getState().initializeFromStorage();

