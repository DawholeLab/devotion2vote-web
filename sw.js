/* devotion2vote · service worker mínimo.
   Solo existe para que el móvil pueda INSTALAR la web como app (Android lo exige).
   No guarda páginas en caché: cada apertura trae la versión publicada. */
self.addEventListener('install', e => { self.skipWaiting(); });
self.addEventListener('activate', e => { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', e => { /* red directa, sin caché */ });
