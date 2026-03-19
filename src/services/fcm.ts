import { onMessage, getToken, type MessagePayload } from "firebase/messaging";
import { getFirebaseServices } from "./firebase";
import { upsertUserSchedule, upsertUserToken } from "./firestore";
import { getAppServiceWorkerRegistration } from "../pwa/swRegistration";
import { useToastStore } from "../shared/store/useToastStore";
import { useTrackerStore } from "../features/tracker/store/useTrackerStore";

const LAST_TOKEN_KEY = "semavik-fcm-token-last";

function toastForPayload(payload: MessagePayload) {
  const data = (payload as any)?.data ?? {};
  const type = data.type as string;

  const title =
    (payload as any)?.notification?.title ||
    data.title ||
    "Semavik Tracker";

  const message =
    (payload as any)?.notification?.body ||
    data.body ||
    undefined;

  const kind =
    type === "dose_suggestion"
      ? "warning"
      : type === "overdue"
      ? "danger"
      : "info";

  useToastStore.getState().push({
    kind,
    title,
    message
  });
}

export async function initFCMForegroundHandler() {
  const s = await getFirebaseServices();
  if (!s || !s.messaging) return;

  // Foreground push handler: display in-app toasts.
  onMessage(s.messaging, (payload) => {
    try {
      toastForPayload(payload);
    } catch {
      // ignore
    }
  });
}

export async function requestNotificationPermissionAndRegisterFCM(): Promise<void> {
  if (typeof window === "undefined" || !("Notification" in window)) return;

  const permission = await Notification.requestPermission();
  if (permission !== "granted") {
    useToastStore.getState().push({
      kind: "warning",
      title: "Notifications disabled",
      message: "You can enable them later in your browser settings."
    });
    return;
  }

  const s = await getFirebaseServices();
  if (!s || !s.messaging) {
    useToastStore.getState().push({
      kind: "danger",
      title: "FCM not configured",
      message: "Set your Firebase env variables (.env) to enable push notifications."
    });
    return;
  }

  const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY as string | undefined;
  if (!vapidKey) {
    useToastStore.getState().push({
      kind: "danger",
      title: "FCM VAPID key missing",
      message: "Set VITE_FIREBASE_VAPID_KEY in .env."
    });
    return;
  }

  const swReg = await getAppServiceWorkerRegistration();
  if (!swReg) {
    useToastStore.getState().push({
      kind: "danger",
      title: "Service worker not ready",
      message: "Reload the page and try again."
    });
    return;
  }

  const token = await getToken(s.messaging, {
    vapidKey,
    serviceWorkerRegistration: swReg
  });

  if (!token) {
    useToastStore.getState().push({
      kind: "warning",
      title: "No device token",
      message: "Push notifications could not be enabled."
    });
    return;
  }

  try {
    localStorage.setItem(LAST_TOKEN_KEY, token);
  } catch {
    // ignore
  }
  await upsertUserToken(token);

  const schedule = useTrackerStore.getState().schedule;
  if (schedule) {
    await upsertUserSchedule({
      lastInjectionIso: schedule.last_injection,
      startDateIso: schedule.start_date,
      dose: schedule.dose
    });
  }
}

export async function syncFcmTokenIfPossible(): Promise<void> {
  try {
    if (typeof window === "undefined") return;
    if (!("Notification" in window)) return;
    if (Notification.permission !== "granted") return;

    const s = await getFirebaseServices();
    if (!s || !s.messaging) return;

    const vapidKey = import.meta.env.VITE_FIREBASE_VAPID_KEY as string | undefined;
    if (!vapidKey) return;

    const swReg = await getAppServiceWorkerRegistration();
    if (!swReg) return;

    const token = await getToken(s.messaging, {
      vapidKey,
      serviceWorkerRegistration: swReg
    });
    if (!token) return;

    const last = localStorage.getItem(LAST_TOKEN_KEY);
    if (last === token) return;

    localStorage.setItem(LAST_TOKEN_KEY, token);
    await upsertUserToken(token);

    const schedule = useTrackerStore.getState().schedule;
    if (schedule) {
      await upsertUserSchedule({
        lastInjectionIso: schedule.last_injection,
        startDateIso: schedule.start_date,
        dose: schedule.dose
      });
    }
  } catch {
    // Ignore token sync errors; app remains functional offline.
  }
}

