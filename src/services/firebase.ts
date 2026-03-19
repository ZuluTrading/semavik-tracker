import { getApps, initializeApp, type FirebaseApp } from "firebase/app";
import { getAuth, signInAnonymously, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";
import { getMessaging, type Messaging, isSupported } from "firebase/messaging";

type FirebaseServices = {
  app: FirebaseApp;
  auth: Auth;
  firestore: Firestore;
  messaging: Messaging | null;
};

let services: FirebaseServices | null = null;

function readFirebaseConfigFromEnv() {
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  const authDomain = import.meta.env.VITE_FIREBASE_AUTH_DOMAIN;
  const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
  const storageBucket = import.meta.env.VITE_FIREBASE_STORAGE_BUCKET;
  const messagingSenderId = import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID;
  const appId = import.meta.env.VITE_FIREBASE_APP_ID;

  const all =
    apiKey &&
    authDomain &&
    projectId &&
    storageBucket &&
    messagingSenderId &&
    appId;

  if (!all) return null;

  return {
    apiKey,
    authDomain,
    projectId,
    storageBucket,
    messagingSenderId,
    appId
  };
}

export async function getFirebaseServices(): Promise<FirebaseServices | null> {
  if (services) return services;

  const cfg = readFirebaseConfigFromEnv();
  if (!cfg) return null;

  const app =
    getApps().length > 0 ? getApps()[0] : initializeApp(cfg);
  const auth = getAuth(app);
  const firestore = getFirestore(app);

  let messaging: Messaging | null = null;
  try {
    if (await isSupported()) messaging = getMessaging(app);
  } catch {
    messaging = null;
  }

  services = { app, auth, firestore, messaging };
  return services;
}

export async function ensureAnonymousAuthUserId(): Promise<string | null> {
  const s = await getFirebaseServices();
  if (!s) return null;

  const current = s.auth.currentUser;
  if (current?.uid) return current.uid;

  try {
    const res = await signInAnonymously(s.auth);
    return res.user.uid;
  } catch {
    return null;
  }
}

