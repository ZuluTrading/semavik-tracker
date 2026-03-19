import React from "react";
import { AppShell } from "./app/layout/AppShell";
import { TrackerView } from "./features/tracker/components/TrackerView";
import { useTrackerStore } from "./features/tracker/store/useTrackerStore";
import { useAppLifecycle } from "./app/hooks/useAppLifecycle";

export default function App() {
  const initialized = useTrackerStore((s) => s.initialized);
  useAppLifecycle();

  return (
    <AppShell>
      {initialized ? <TrackerView /> : <div className="mt-10">Loading...</div>}
    </AppShell>
  );
}

