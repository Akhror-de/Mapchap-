const CACHE_NAME = 'mapchap-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json',
  'https://api-maps.yandex.ru/2.1/?apikey=YCAJECBgGORoT6KOpq1Jv4Rce&lang=ru_RU'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener('fetch', (e) => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});