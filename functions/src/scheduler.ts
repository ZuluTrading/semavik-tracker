import * as admin from "firebase-admin";
import { sendNotification, type NotificationType } from "./sendNotification";

type ISODateLocal = string; // YYYY-MM-DD
type Dose = 0.25 | 0.5 | 1;

const INJECTION_INTERVAL_DAYS = 7;
const ESCALATION_AFTER_DAYS = 28;

function isValidIsoDateLocal(v: unknown): v is ISODateLocal {
  return typeof v === "string" && /^\d{4}-\d{2}-\d{2}$/.test(v);
}

function isDose(v: unknown): v is Dose {
  return v === 0.25 || v === 0.5 || v === 1;
}

function formatIsoDateInTimeZone(date: Date, timeZone: string): ISODateLocal {
  // en-CA format yields YYYY-MM-DD in Node.
  return new Intl.DateTimeFormat("en-CA", {
    timeZone,
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}

function parseIsoDateLocal(iso: ISODateLocal) {
  const [y, m, d] = iso.split("-").map((x) => Number(x));
  return { y, m, d };
}

function toIsoDateLocalFromUtcDate(dt: Date): ISODateLocal {
  return dt.toISOString().slice(0, 10);
}

function addDaysIsoDateLocal(iso: ISODateLocal, days: number): ISODateLocal {
  const { y, m, d } = parseIsoDateLocal(iso);
  const utc = new Date(Date.UTC(y, m - 1, d, 0, 0, 0, 0));
  utc.setUTCDate(utc.getUTCDate() + days);
  return toIsoDateLocalFromUtcDate(utc);
}

function compareIsoDateLocal(a: ISODateLocal, b: ISODateLocal): number {
  // ISO date local strings preserve chronological order.
  if (a === b) return 0;
  return a > b ? 1 : -1;
}

function recommendedDoseAfterEscalation(currentDose: Dose): Dose | null {
  if (currentDose === 0.25) return 0.5;
  if (currentDose === 0.5) return 1;
  return null;
}

async function updateLastNotifiedFields(args: {
  ref: admin.firestore.DocumentReference;
  todayIso: ISODateLocal;
  reminder?: boolean;
  overdue?: boolean;
  doseSuggestion?: boolean;
}) {
  const patch: Record<string, any> = {};
  if (args.reminder) patch.last_notified_reminder = args.todayIso;
  if (args.overdue) patch.last_notified_overdue = args.todayIso;
  if (args.doseSuggestion) patch.last_notified_dose_suggestion = args.todayIso;
  if (Object.keys(patch).length === 0) return;
  await args.ref.set(patch, { merge: true });
}

function isInvalidTokenError(err: any): boolean {
  const code = err?.code as string | undefined;
  if (!code) return false;
  return (
    code === "messaging/invalid-registration-token" ||
    code === "messaging/registration-token-not-registered" ||
    code === "messaging/registration-token-mismatch"
  );
}

async function clearInvalidToken(args: {
  ref: admin.firestore.DocumentReference;
}) {
  await args.ref.set({ token: admin.firestore.FieldValue.delete() }, { merge: true });
}

export async function runDailyScheduler() {
  const db = admin.firestore();
  const usersRef = db.collection("users");

  const now = new Date();

  // Basic pagination to handle many users.
  const pageSize = 300;
  let lastDoc: admin.firestore.QueryDocumentSnapshot | null = null;
  let processed = 0;

  while (true) {
    let query: admin.firestore.Query = usersRef.orderBy("__name__").limit(pageSize);
    if (lastDoc) query = query.startAfter(lastDoc);

    const snap = await query.get();
    if (snap.empty) break;

    for (const docSnap of snap.docs) {
      processed++;
      const ref = usersRef.doc(docSnap.id);
      const data = docSnap.data() as any;

      const token = typeof data.token === "string" ? (data.token as string) : null;
      const lastInjection = data.last_injection as unknown;
      const startDate = data.start_date as unknown;
      const dose = data.dose as unknown;
      const timeZone = typeof data.time_zone === "string" ? (data.time_zone as string) : "UTC";

      if (!token) continue;
      if (!isValidIsoDateLocal(lastInjection) || !isValidIsoDateLocal(startDate)) continue;
      if (!isDose(dose)) continue;

      const todayIso = formatIsoDateInTimeZone(now, timeZone);
      const nextInjectionIso = addDaysIsoDateLocal(lastInjection, INJECTION_INTERVAL_DAYS);

      const reminderEligible = todayIso === nextInjectionIso;

      const overdueEligible =
        compareIsoDateLocal(todayIso, nextInjectionIso) === 1;

      const doseCycleEndIso = addDaysIsoDateLocal(startDate, ESCALATION_AFTER_DAYS);
      const doseSuggestionEligible = todayIso === doseCycleEndIso;
      const recommended = recommendedDoseAfterEscalation(dose);
      const doseSuggestionShouldSend =
        doseSuggestionEligible && recommended !== null && recommended !== dose;

      const alreadyReminder = data.last_notified_reminder === todayIso;
      const alreadyOverdue = data.last_notified_overdue === todayIso;
      const alreadyDoseSuggestion = data.last_notified_dose_suggestion === todayIso;

      const sends: { type: NotificationType; title: string; body: string; markField: "reminder" | "overdue" | "doseSuggestion" }[] = [];

      if (reminderEligible && !alreadyReminder) {
        sends.push({
          type: "injection_reminder",
          title: "Time for your Semavik injection",
          body: "It's your scheduled injection day. Tap to open your tracker.",
          markField: "reminder"
        });
      }

      if (overdueEligible && !alreadyOverdue) {
        sends.push({
          type: "overdue",
          title: "You missed your scheduled injection",
          body: "Your injection is overdue. Update the tracker when you take it.",
          markField: "overdue"
        });
      }

      if (doseSuggestionShouldSend && !alreadyDoseSuggestion) {
        sends.push({
          type: "dose_suggestion",
          title: "You may increase your dose",
          body: "28 days passed since your current dose cycle. Consider following your clinician's plan.",
          markField: "doseSuggestion"
        });
      }

      if (sends.length === 0) continue;

      // Send notifications sequentially for reliability.
      const marked = { reminder: false, overdue: false, doseSuggestion: false };
      try {
        for (const s of sends) {
          await sendNotification({
            token,
            type: s.type,
            title: s.title,
            body: s.body
          });
          marked[s.markField] = true;
        }

        await updateLastNotifiedFields({
          ref,
          todayIso,
          reminder: marked.reminder,
          overdue: marked.overdue,
          doseSuggestion: marked.doseSuggestion
        });
      } catch (err: any) {
        if (isInvalidTokenError(err)) {
          await clearInvalidToken({ ref });
        }
        // On other errors, we don't clear token and we avoid noisy rethrows.
        // Idempotency is handled by the last_notified_* fields (which we only update after success).
      }
    }

    const last = snap.docs[snap.docs.length - 1];
    lastDoc = last ?? null;
    if (snap.size < pageSize) break;
  }

  // eslint-disable-next-line no-console
  console.log(`[Semavik] Daily scheduler processed users: ${processed}`);
}

