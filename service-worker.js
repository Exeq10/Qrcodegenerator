const CACHE_NAME = 'generador-codigos-qr-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/davidshimjs-qrcodejs-04f46c6/qrcode.min.js',
  '/script.js',
  '/html2canvas.js',
  '/favicon.ico' 
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Cache abierto');
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
