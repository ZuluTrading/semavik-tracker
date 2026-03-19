import React, { useMemo, useState } from "react";
import { Card } from "../../../shared/components/Card";
import { Button } from "../../../shared/components/Button";
import type { Dose, ISODateLocal } from "../../../shared/utils/date";
import { toISODateLocal } from "../../../shared/utils/date";
import { requestNotificationPermissionAndRegisterFCM } from "../../../services/fcm";
import { useTrackerStore } from "../store/useTrackerStore";

const DOSES: Dose[] = [0.25, 0.5, 1];

function initialDateIso(): ISODateLocal {
  return toISODateLocal(new Date());
}

export function Onboarding() {
  const completeOnboarding = useTrackerStore((s) => s.completeOnboarding);
  const initializedError = useTrackerStore((s) => s.error);

  const [lastInjectionIso, setLastInjectionIso] = useState<ISODateLocal>(() => initialDateIso());
  const [dose, setDose] = useState<Dose>(0.25);
  const [busy, setBusy] = useState(false);
  const [localError, setLocalError] = useState<string | null>(null);

  const mergedError = localError ?? initializedError;

  const maxIso = useMemo(() => initialDateIso(), []);

  const onSubmit = async () => {
    setLocalError(null);
    setBusy(true);
    try {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(lastInjectionIso)) {
        setLocalError("Please pick a valid last injection date.");
        return;
      }

      await completeOnboarding({ lastInjectionIso, dose });
      await requestNotificationPermissionAndRegisterFCM();
    } catch (e: any) {
      setLocalError(e?.message || "Something went wrong. Please try again.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="flex flex-col gap-5 mt-2 flex-1">
      <Card>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
          Getting started
        </p>
        <h2 className="text-lg font-semibold mt-2">Set your last injection</h2>
        <p className="text-sm text-slate-300 mt-2 leading-5">
          Semavik injections are taken once a week. We'll use your last injection date to calculate when you're due next and suggest dose progression.
        </p>

        <label className="block mt-5 text-sm">
          <span className="text-slate-300">Last injection date</span>
          <input
            type="date"
            value={lastInjectionIso}
            max={maxIso}
            onChange={(e) => setLastInjectionIso(e.target.value as ISODateLocal)}
            className="mt-2 w-full bg-slate-900/50 border border-slate-700 rounded-2xl px-3 py-3 text-sm outline-none focus:ring-2 focus:ring-brand"
          />
        </label>
      </Card>

      <Card>
        <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
          Starting dose
        </p>
        <h2 className="text-lg font-semibold mt-2">Choose your current dose</h2>
        <p className="text-sm text-slate-300 mt-2 leading-5">
          Choose 0.25 / 0.5 / 1 mg. After 28 days from start, the app will suggest dose increases according to your plan.
        </p>

        <div className="mt-4 grid grid-cols-3 gap-2">
          {DOSES.map((opt) => {
            const selected = opt === dose;
            return (
              <button
                key={opt}
                type="button"
                onClick={() => setDose(opt)}
                className={[
                  "rounded-2xl border px-2 py-3 text-sm font-semibold transition active:scale-[0.99]",
                  selected
                    ? "border-brand bg-brand/20 text-white"
                    : "border-slate-700 bg-slate-900/50 text-slate-200 hover:bg-slate-800/60"
                ].join(" ")}
              >
                <span className="block">{opt}</span>
                <span className="text-[11px] text-slate-400 block mt-0.5">mg</span>
              </button>
            );
          })}
        </div>
      </Card>

      {mergedError ? (
        <div className="text-sm text-red-400 px-1">{mergedError}</div>
      ) : null}

      <div
        className="mt-auto"
        style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}
      >
        <Button onClick={onSubmit} disabled={busy} aria-busy={busy}>
          {busy ? "Saving..." : "Save & continue"}
        </Button>
        <p className="text-xs text-slate-400 mt-3 text-center">
          We'll ask for notification permission so you can receive real reminders via Firebase.
        </p>
      </div>
    </div>
  );
}

