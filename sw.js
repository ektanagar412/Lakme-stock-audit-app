const CACHE = "stock-audit-v1";
const FILES = ["./", "./index.html", "./manifest.json", "./icon.svg",
  "./lib/html5-qrcode.min.js", "./lib/xlsx.full.min.js"];
self.addEventListener("install", e => e.waitUntil(caches.open(CACHE).then(c => c.addAll(FILES))));
self.addEventListener("fetch", e => {
  if (e.request.method !== "GET") return;
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});