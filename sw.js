const CACHE_NAME = "physio-cache-v2";

// Use relative URLs so this works under /physio-logger/ on GitHub Pages
const URLS_TO_CACHE = [
  "./",
  "./index.html",
  "./manifest.json",
  "./privacy.html",
  "./disclaimer.html",
  "./icon-192.png",
  "./icon-512.png",
  "./vendor/tailwindcss.js",
  "./vendor/alpine.min.js"
];

self.addEventListener("install", (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE))
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

// Cache-first for same-origin static assets.
// For navigations, serve cached index.html so the app loads offline.
self.addEventListener("fetch", (event) => {
  const req = event.request;
  const url = new URL(req.url);

  // Only handle same-origin requests
  if (url.origin !== self.location.origin) return;

  if (req.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match("./index.html");
      try {
        const fresh = await fetch(req);
        // Keep cache warm with latest index
        cache.put("./index.html", fresh.clone());
        return fresh;
      } catch {
        return cached || Response.error();
      }
    })());
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const cached = await cache.match(req);
    if (cached) return cached;

    try {
      const fresh = await fetch(req);
      // Cache JS/CSS/images/html from our own origin
      if (fresh && fresh.status === 200) {
        cache.put(req, fresh.clone());
      }
      return fresh;
    } catch {
      // If it’s not in cache and fetch fails, fail normally
      return cached || Response.error();
    }
  })());
});
