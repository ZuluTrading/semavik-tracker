import * as admin from "firebase-admin";
import { onSchedule } from "firebase-functions/v2/scheduler";
import { runDailyScheduler } from "./scheduler";

// Use service account from Firebase Functions environment.
admin.initializeApp();

export const dailySemavikScheduler = onSchedule(
  {
    schedule: "every day 00:00",
    timeZone: "Etc/UTC"
  },
  async () => {
    await runDailyScheduler();
  }
);

