/* =====================================================================
   Service worker · Rotación AP
   Para forzar una actualización en los móviles: sube el número de VERSION.
   ===================================================================== */
var VERSION = 'rotacion-ap-v1';
var CACHE_FUENTES = 'rotacion-ap-fonts-v1';

var ARCHIVOS = [
  './',
  './index.html',
  './app.css',
  './app.js',
  './content-a.js',
  './content-b.js',
  './content-c.js',
  './content-d.js',
  './checklist.js',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable-512.png'
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(VERSION).then(function (cache) { return cache.addAll(ARCHIVOS); })
  );
  // No hacemos skipWaiting aquí: la página avisa ("Hay una versión nueva · Actualizar") y el usuario decide.
});

self.addEventListener('activate', function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.map(function (k) {
        if (k !== VERSION && k !== CACHE_FUENTES) return caches.delete(k);
        return null;
      }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener('message', function (event) {
  if (event.data && event.data.type === 'SKIP_WAITING') self.skipWaiting();
});

function esFuente(url) {
  return url.hostname === 'fonts.googleapis.com' || url.hostname === 'fonts.gstatic.com';
}

self.addEventListener('fetch', function (event) {
  var req = event.request;
  if (req.method !== 'GET') return;
  var url;
  try { url = new URL(req.url); } catch (e) { return; }

  // Google Fonts: stale-while-revalidate. Quedan disponibles offline tras la primera visita.
  if (esFuente(url)) {
    event.respondWith(
      caches.open(CACHE_FUENTES).then(function (cache) {
        return cache.match(req).then(function (cached) {
          var red = fetch(req).then(function (res) {
            if (res && (res.ok || res.type === 'opaque')) cache.put(req, res.clone());
            return res;
          }).catch(function () { return cached; });
          return cached || red;
        });
      })
    );
    return;
  }

  if (url.origin !== self.location.origin) return;

  // Lo propio: cache-first. Si no está, red (y se guarda). Navegaciones sin red → index.html.
  event.respondWith(
    caches.match(req, { ignoreSearch: true }).then(function (cached) {
      if (cached) return cached;
      return fetch(req).then(function (res) {
        if (res && res.ok && res.type === 'basic') {
          var copia = res.clone();
          caches.open(VERSION).then(function (cache) { cache.put(req, copia); });
        }
        return res;
      }).catch(function () {
        if (req.mode === 'navigate') return caches.match('./index.html');
        return new Response('', { status: 503, statusText: 'Offline' });
      });
    })
  );
});
