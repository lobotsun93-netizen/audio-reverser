const CACHE_NAME = 'audio-reverser-v1';
const ASSETS = [
  '/audio-reverser/',
  '/audio-reverser/index.html',
  '/audio-reverser/manifest.json',
  '/audio-reverser/icon.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
