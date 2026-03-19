export const INJECTION_INTERVAL_DAYS = 7;
export const ESCALATION_AFTER_DAYS = 28;

export type Dose = 0.25 | 0.5 | 1;

export type ISODateLocal = string; // "YYYY-MM-DD"

export function toISODateLocal(date: Date): ISODateLocal {
  const y = date.getFullYear();
  const m = `${date.getMonth() + 1}`.padStart(2, "0");
  const d = `${date.getDate()}`.padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export function fromISODateLocal(iso: ISODateLocal): Date {
  const [y, m, d] = iso.split("-").map((v) => Number(v));
  return new Date(y, m - 1, d, 0, 0, 0, 0);
}

export function addDaysISODateLocal(
  iso: ISODateLocal,
  days: number
): ISODateLocal {
  const dt = fromISODateLocal(iso);
  dt.setDate(dt.getDate() + days);
  return toISODateLocal(dt);
}

export function diffDaysISODateLocal(
  a: ISODateLocal,
  b: ISODateLocal
): number {
  const da = fromISODateLocal(a);
  const db = fromISODateLocal(b);
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((db.getTime() - da.getTime()) / msPerDay);
}

export function formatDateLong(iso: ISODateLocal): string {
  const dt = fromISODateLocal(iso);
  return dt.toLocaleDateString(undefined, {
    weekday: "short",
    month: "short",
    day: "numeric"
  });
}

export function formatCountdownFromToday(
  targetIso: ISODateLocal,
  todayIso: ISODateLocal
): string {
  const diff = diffDaysISODateLocal(todayIso, targetIso);
  if (diff === 0) return "today";
  if (diff > 0) {
    return `in ${diff} day${diff === 1 ? "" : "s"}`;
  }
  const abs = Math.abs(diff);
  return `${abs} day${abs === 1 ? "" : "s"} overdue`;
}

export function shouldEscalateDose(currentDose: Dose): boolean {
  return currentDose === 0.25 || currentDose === 0.5;
}

export function nextDoseAfterEscalation(currentDose: Dose): Dose {
  if (currentDose === 0.25) return 0.5;
  if (currentDose === 0.5) return 1;
  return 1;
}

export function doseSuggestionAfter28Days(
  currentDose: Dose,
  daysOnTherapy: number
): Dose | null {
  if (daysOnTherapy < ESCALATION_AFTER_DAYS) return null;
  if (currentDose === 1) return null;
  return nextDoseAfterEscalation(currentDose);
}

export function injectionNextISODate(
  lastInjectionIso: ISODateLocal
): ISODateLocal {
  return addDaysISODateLocal(lastInjectionIso, INJECTION_INTERVAL_DAYS);
}

export type InjectionStatus = "waiting" | "today" | "overdue";

export function getInjectionStatus(
  todayIso: ISODateLocal,
  nextIso: ISODateLocal
): InjectionStatus {
  if (todayIso === nextIso) return "today";
  if (todayIso > nextIso) return "overdue";
  return "waiting";
}

