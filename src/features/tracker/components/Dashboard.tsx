import React, { useMemo, useState } from "react";
import { Card } from "../../../shared/components/Card";
import { Button } from "../../../shared/components/Button";
import { useTrackerStore } from "../store/useTrackerStore";
import {
  diffDaysISODateLocal,
  formatCountdownFromToday,
  formatDateLong
} from "../../../shared/utils/date";

function statusStyles(status: "waiting" | "today" | "overdue") {
  if (status === "today") {
    return "bg-emerald-400/10 text-emerald-200 border-emerald-400/30";
  }
  if (status === "overdue") {
    return "bg-red-400/10 text-red-200 border-red-400/30";
  }
  return "bg-brand/10 text-brand/90 border-brand/30";
}

function DoseText({ dose }: { dose: 0.25 | 0.5 | 1 }) {
  return (
    <div className="flex items-baseline gap-1">
      <div className="text-4xl font-semibold tracking-tight">{dose}</div>
      <div className="text-xs text-slate-400 mb-1">mg</div>
    </div>
  );
}

export function Dashboard() {
  const schedule = useTrackerStore((s) => s.schedule);
  const derived = useTrackerStore((s) => s.derived);
  const markInjectionDone = useTrackerStore((s) => s.markInjectionDone);
  const resetAll = useTrackerStore((s) => s.resetAll);
  const actionBusy = useTrackerStore((s) => s.actionBusy);
  const error = useTrackerStore((s) => s.error);

  const [confirmReset, setConfirmReset] = useState(false);

  const last3 = useMemo(() => {
    if (!schedule) return [];
    return schedule.history.slice(0, 3);
  }, [schedule]);

  if (!schedule || !derived) return null;

  const countdown = formatCountdownFromToday(derived.nextInjectionIso, derived.todayIso);

  const status = derived.status;

  const doseSuggestion = derived.doseSuggestion;
  const showSuggestion =
    doseSuggestion !== null && doseSuggestion !== schedule.dose;

  const daysOnTherapy = diffDaysISODateLocal(schedule.start_date, derived.todayIso);

  return (
    <div className="flex flex-col gap-4 mt-1 flex-1">
      <Card className="mt-0">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Next injection
            </p>
            <div className="mt-3">
              <div className="text-3xl font-semibold leading-tight">
                {formatDateLong(derived.nextInjectionIso)}
              </div>
            </div>
            <p className="text-sm text-slate-300 mt-2">
              {countdown}
            </p>
          </div>
          <div>
            <span
              className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold border ${statusStyles(
                status
              )}`}
            >
              {status === "waiting"
                ? "Waiting"
                : status === "today"
                ? "Today"
                : "Overdue"}
            </span>
          </div>
        </div>
      </Card>

      {error ? (
        <div className="text-sm text-red-400 px-1 -mt-2">{error}</div>
      ) : null}

      <Card>
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
              Current dose
            </p>
            <div className="mt-3">
              <DoseText dose={schedule.dose} />
            </div>
            <p className="text-xs text-slate-400 mt-2">
              Started {formatDateLong(schedule.start_date)}
            </p>
          </div>

          <div className="text-right">
            <p className="text-xs text-slate-400">
              {daysOnTherapy >= 0 ? `${daysOnTherapy} days on therapy` : ""}
            </p>
            {showSuggestion ? (
              <p className="text-xs text-amber-200 mt-2">
                Suggestion: increase to {doseSuggestion} mg
              </p>
            ) : (
              <p className="text-xs text-slate-400 mt-2">
                Dose increases after 28 days
              </p>
            )}
          </div>
        </div>
      </Card>

      <Card>
        <div className="flex items-center justify-between mb-2 gap-3">
          <p className="text-xs uppercase tracking-[0.16em] text-slate-400">
            Last injections
          </p>
          <button
            type="button"
            onClick={() => setConfirmReset((v) => !v)}
            className="text-xs text-slate-400 hover:text-slate-200 underline underline-offset-4"
          >
            {confirmReset ? "Tap again to reset" : "Edit / reset"}
          </button>
        </div>

        <div className="space-y-2">
          {last3.length === 0 ? (
            <p className="text-sm text-slate-400">No history yet.</p>
          ) : (
            last3.map((h) => (
              <div
                key={`${h.date}-${h.dose}`}
                className="flex items-center justify-between text-sm"
              >
                <span className="text-slate-200">{formatDateLong(h.date)}</span>
                <span className="text-slate-400">{h.dose} mg</span>
              </div>
            ))
          )}
        </div>
      </Card>

      <div className="mt-auto" style={{ paddingBottom: "env(safe-area-inset-bottom, 16px)" }}>
        <div className="py-1">
          <Button
            onClick={async () => {
              if (confirmReset) {
                setConfirmReset(false);
                await resetAll();
                return;
              }
              await markInjectionDone();
            }}
            disabled={actionBusy || (confirmReset && last3.length > 0)}
          >
            {actionBusy ? "Updating..." : confirmReset ? "Confirm reset" : "I did the injection"}
          </Button>
        </div>
        <p className="text-xs text-slate-400 mt-3 text-center">
          Reminders are sent by the backend via Firebase every day based on your schedule.
        </p>
      </div>
    </div>
  );
}

