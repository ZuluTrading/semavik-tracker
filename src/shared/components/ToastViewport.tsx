import React from "react";
import { useToastStore } from "../store/useToastStore";

function toastClass(kind: "info" | "success" | "warning" | "danger") {
  switch (kind) {
    case "success":
      return "border-emerald-400/30 bg-emerald-400/10 text-emerald-100";
    case "warning":
      return "border-amber-400/30 bg-amber-400/10 text-amber-100";
    case "danger":
      return "border-red-400/30 bg-red-400/10 text-red-100";
    default:
      return "border-brand/30 bg-brand/10 text-brand-100";
  }
}

export function ToastViewport() {
  const toasts = useToastStore((s) => s.toasts);
  const dismiss = useToastStore((s) => s.dismiss);

  return (
    <div
      className="fixed inset-x-0 top-4 z-50 pointer-events-none"
      aria-live="polite"
    >
      <div className="mx-auto w-full max-w-md px-4 flex flex-col gap-2">
        {toasts.map((t) => (
          <div
            key={t.id}
            className={`pointer-events-auto rounded-2xl border px-4 py-3 shadow-card ${toastClass(
              t.kind
            )} transform transition-all duration-200`}
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.16em] opacity-80">
                  {t.kind}
                </p>
                <p className="font-semibold">{t.title}</p>
                {t.message ? (
                  <p className="text-sm text-slate-200/90 mt-1">
                    {t.message}
                  </p>
                ) : null}
              </div>
              <button
                type="button"
                className="text-slate-200/70 hover:text-slate-200"
                onClick={() => dismiss(t.id)}
                aria-label="Dismiss notification"
              >
                ✕
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

