// SafarDanesh service worker: caches the app so it installs and works offline.
const V = "safardanesh-v2"; // bump this number after you change any file
const CORE = ["./", "./index.html", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
const CDN = [
  "https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700&display=swap",
  "https://cdn.tailwindcss.com/3.4.17",
  "https://cdnjs.cloudflare.com/ajax/libs/react/18.3.1/umd/react.production.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.3.1/umd/react-dom.production.min.js",
  "https://cdnjs.cloudflare.com/ajax/libs/babel-standalone/7.24.7/babel.min.js"
];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(V);
    await c.addAll(CORE);
    await Promise.all(CDN.map(u => c.add(new Request(u, { mode: "no-cors" })).catch(() => {})));
    self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== V) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return;
  e.respondWith((async () => {
    const c = await caches.open(V);
    const hit = await c.match(req, { ignoreSearch: req.mode === "navigate" });
    const net = fetch(req).then(res => { if (res && (res.ok || res.type === "opaque")) c.put(req, res.clone()); return res; });
    if (hit) { net.catch(() => {}); return hit; }               // cache first, refresh in background
    try { return await net; }
    catch { return req.mode === "navigate" ? (await c.match("./index.html")) : Response.error(); }
  })());
});
