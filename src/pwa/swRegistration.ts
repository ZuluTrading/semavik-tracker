let registrationPromise: Promise<ServiceWorkerRegistration | null> | null =
  null;

function swUrl() {
  const base = import.meta.env.BASE_URL ?? "/";
  return `${base}service-worker.js`;
}

export function registerAppServiceWorker() {
  if (registrationPromise) return;

  if (!("serviceWorker" in navigator)) return;

  registrationPromise = (async () => {
    try {
      const reg = await navigator.serviceWorker.register(swUrl());
      return reg;
    } catch (e) {
      console.warn("Service worker registration failed", e);
      return null;
    }
  })();
}

export async function getAppServiceWorkerRegistration() {
  if (!registrationPromise) registerAppServiceWorker();
  return await registrationPromise;
}

