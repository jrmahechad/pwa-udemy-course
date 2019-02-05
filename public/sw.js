self.addEventListener('install', function(event){
  console.log('[Service Worker] Installing Service Worked ...', event);
});

self.addEventListener('activate', function(event){
  console.log('[Service Worker] Activate Service Worked ...', event);
  return self.clients.claim();
});

self.addEventListener('fetch', function(event){
  console.log('[Service Worker] Fetching something ...', event);
  event.respondWith(fetch(event.request));
});