import React from "react";
import { Onboarding } from "./Onboarding";
import { Dashboard } from "./Dashboard";
import { useTrackerStore } from "../store/useTrackerStore";

export function TrackerView() {
  const schedule = useTrackerStore((s) => s.schedule);
  if (!schedule) return <Onboarding />;
  return <Dashboard />;
}

