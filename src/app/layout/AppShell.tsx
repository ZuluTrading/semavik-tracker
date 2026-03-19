import React from "react";
import { ScreenContainer } from "../../shared/components/ScreenContainer";
import { ToastViewport } from "../../shared/components/ToastViewport";

export function AppShell(props: { children: React.ReactNode }) {
  return (
    <ScreenContainer>
      <header className="pt-8 pb-3">
        <h1 className="text-2xl font-semibold tracking-tight">
          Semavik Tracker
        </h1>
        <p className="text-xs text-slate-400 mt-1">
          Weekly injection companion
        </p>
      </header>
      <div className="flex-1 flex flex-col">{props.children}</div>
      <ToastViewport />
    </ScreenContainer>
  );
}

