const CACHE_NAME = 'todo-cache-v1';
const ASSETS = [
  './',
  './index.html',
  './Icon.png',
  './Icon_180x180.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then((res) => res || fetch(e.request))
  );
});
