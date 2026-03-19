import {
  doc,
  setDoc,
  updateDoc,
  type DocumentReference
} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";
import { getFirebaseServices, ensureAnonymousAuthUserId } from "./firebase";
import type { Dose, ISODateLocal } from "../shared/utils/date";

export type UserScheduleDoc = {
  token?: string;
  last_injection: ISODateLocal;
  start_date: ISODateLocal;
  dose: Dose;
  time_zone: string;
  updated_at?: any;
  last_notified_reminder?: ISODateLocal;
  last_notified_overdue?: ISODateLocal;
  last_notified_dose_suggestion?: ISODateLocal;
};

function localTimeZone(): string {
  try {
    const tz = Intl.DateTimeFormat().resolvedOptions().timeZone;
    return tz || "UTC";
  } catch {
    return "UTC";
  }
}

async function getUserDocRef(): Promise<DocumentReference | null> {
  const s = await getFirebaseServices();
  if (!s) return null;
  const uid = await ensureAnonymousAuthUserId();
  if (!uid) return null;
  return doc(s.firestore, "users", uid);
}

export async function upsertUserToken(token: string): Promise<void> {
  const ref = await getUserDocRef();
  if (!ref) return;
  await setDoc(
    ref,
    {
      token,
      updated_at: serverTimestamp(),
      time_zone: localTimeZone()
    },
    { merge: true }
  );
}

export async function upsertUserSchedule(args: {
  lastInjectionIso: ISODateLocal;
  startDateIso: ISODateLocal;
  dose: Dose;
}): Promise<void> {
  const ref = await getUserDocRef();
  if (!ref) return;
  const payload: UserScheduleDoc = {
    last_injection: args.lastInjectionIso,
    start_date: args.startDateIso,
    dose: args.dose,
    time_zone: localTimeZone(),
    updated_at: serverTimestamp() as any
  };

  await setDoc(ref, payload as any, { merge: true });
}

export async function updateUserDoseAfterInjection(args: {
  lastInjectionIso: ISODateLocal;
  startDateIso: ISODateLocal;
  dose: Dose;
}): Promise<void> {
  // Alias for clarity
  await upsertUserSchedule(args);
}

