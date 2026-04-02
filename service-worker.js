const CACHE = 'ki-quiz-v2';
const ASSETS = [
  './',
  './index.html',
  './css/quiz.css',
  './js/questions.js',
  './js/app.js',
  './manifest.json',
  './assets/logo-ki-strategie-co.svg',
  './assets/favicons/favicon.svg',
  './assets/favicons/favicon.ico',
  './assets/favicons/apple-touch-icon.png',
  './assets/favicons/web-app-manifest-192x192.png',
  './assets/favicons/web-app-manifest-512x512.png'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
