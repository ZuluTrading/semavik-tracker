/* eslint-disable no-restricted-globals */
// Production PWA + Firebase Cloud Messaging background handler.
// Works under GitHub Pages base path because we always use `self.registration.scope`.

const CACHE_STATIC = "semavik-static-v1";
const CACHE_DYNAMIC = "semavik-dynamic-v1";

importScripts("https://www.gstatic.com/firebasejs/11.0.0/firebase-app-compat.js");
importScripts(
  "https://www.gstatic.com/firebasejs/11.0.0/firebase-messaging-compat.js"
);

importScripts("./firebase-config.js");

let firebaseApp = null;
try {
  if (self.__FIREBASE_CONFIG__ && typeof self.__FIREBASE_CONFIG__ === "object") {
    firebaseApp = firebase.initializeApp(self.__FIREBASE_CONFIG__);
  }
} catch (e) {
  // Push notifications disabled if config missing.
}

const scope = self.registration.scope;
const scopeUrl = new URL(scope);

function isWithinScope(url) {
  const u = new URL(url);
  return u.origin === scopeUrl.origin && u.pathname.startsWith(scopeUrl.pathname);
}

function isStaticAssetRequest(request) {
  const dest = request.destination;
  if (dest === "script" || dest === "style" || dest === "worker" || dest === "font") return true;
  if (dest === "image") return true;

  const pathname = new URL(request.url).pathname;
  if (pathname.includes("/src/")) return false;
  if (pathname.endsWith(".ts") || pathname.endsWith(".tsx")) return false;
  return (
    pathname.includes(".js") ||
    pathname.includes(".css") ||
    pathname.includes(".png") ||
    pathname.includes(".jpg") ||
    pathname.includes(".jpeg") ||
    pathname.includes(".webp") ||
    pathname.includes(".svg") ||
    pathname.includes(".woff2")
  );
}

const indexUrl = new URL("index.html", scopeUrl).toString();
const manifestUrl = new URL("manifest.json", scopeUrl).toString();
const icon192Url = new URL("icons/icon-192.svg", scopeUrl).toString();
const icon512Url = new URL("icons/icon-512.svg", scopeUrl).toString();

self.addEventListener("install", (event) => {
  event.waitUntil(
    (async () => {
      // Pre-cache the SPA shell so offline navigation works.
      const cacheStatic = await caches.open(CACHE_STATIC);
      await cacheStatic
        .addAll([indexUrl, manifestUrl, icon192Url, icon512Url])
        .catch(() => undefined);
      await self.skipWaiting();
    })()
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(
        keys.map((k) => {
          if (k !== CACHE_STATIC && k !== CACHE_DYNAMIC) {
            return caches.delete(k);
          }
          return undefined;
        })
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;

  const url = new URL(request.url);
  if (!isWithinScope(url.toString())) {
    // Do not interfere with cross-origin requests.
    return;
  }

  const wantsHtml =
    request.mode === "navigate" ||
    (request.headers.get("accept") || "").includes("text/html");

  if (wantsHtml) {
    // Network-first for navigation documents; fall back to cached shell.
    event.respondWith(
      (async () => {
        try {
          const networkResponse = await fetch(request);
          const cache = await caches.open(CACHE_DYNAMIC);
          cache.put(request, networkResponse.clone()).catch(() => undefined);
          return networkResponse;
        } catch (e) {
          const cache = await caches.open(CACHE_STATIC);
          const cached = await cache.match(indexUrl);
          if (cached) return cached;
          throw e;
        }
      })()
    );
    return;
  }

  if (isStaticAssetRequest(request)) {
    // Cache-first for build assets and static files.
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_DYNAMIC);
        const cached = await cache.match(request);
        if (cached) return cached;
        const response = await fetch(request);
        if (response && response.ok) {
          cache.put(request, response.clone()).catch(() => undefined);
        }
        return response;
      })()
    );
    return;
  }

  // Default: network-only.
});

if (firebaseApp) {
  const messaging = firebase.messaging();

  messaging.onBackgroundMessage((payload) => {
    const data = payload && payload.data ? payload.data : {};
    const type = data.type || "injection_reminder";

    const title =
      payload.notification?.title ||
      data.title ||
      (type === "overdue"
        ? "Semavik Tracker: missed injection"
        : type === "dose_suggestion"
        ? "Semavik Tracker: dose suggestion"
        : "Semavik Tracker reminder");

    const body =
      payload.notification?.body ||
      data.body ||
      "Check your Semavik schedule.";

    const icon = new URL("icons/icon-192.svg", scopeUrl).toString();

    self.registration.showNotification(title, {
      body,
      icon,
      data: {
        type,
        url: scopeUrl.toString()
      },
      tag: `semavik-${type}`,
      renotify: false
    });
  });
}

self.addEventListener("notificationclick", (event) => {
  event.notification.close();
  event.waitUntil(
    (async () => {
      const allClients = await self.clients.matchAll({
        type: "window",
        includeUncontrolled: true
      });
      for (const client of allClients) {
        if ("focus" in client) {
          await client.focus();
          return;
        }
      }
      await self.clients.openWindow(scopeUrl.toString());
    })()
  );
});

