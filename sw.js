const VERSION = 'grammar-studio-v1.0.0';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', event => {event.waitUntil(caches.open(VERSION).then(cache => cache.addAll(SHELL)));});
self.addEventListener('activate', event => {event.waitUntil(Promise.all([caches.keys().then(keys => Promise.all(keys.filter(k => k.startsWith('grammar-studio-') && k !== VERSION).map(k => caches.delete(k)))),self.clients.claim()]));});
self.addEventListener('message', event => {if (event.data?.type === 'SKIP_WAITING') self.skipWaiting();});
self.addEventListener('fetch', event => {
 const req = event.request;
 if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
 event.respondWith((async () => {
  const cache = await caches.open(VERSION);
  if (req.mode === 'navigate') {
   try { const res = await fetch(req); if (res.ok) await cache.put('./index.html', res.clone()); return res; }
   catch { return (await cache.match('./index.html')) || Response.error(); }
  }
  const cached = await cache.match(req);
  const network = fetch(req).then(res => {if(res.ok) cache.put(req,res.clone());return res;}).catch(() => cached);
  return cached || network;
 })());
});