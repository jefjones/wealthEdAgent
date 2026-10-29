/* Loaded by the generated service worker (importScripts). Serves test content chunks that
   "Go offline" saved into a wea-pack-<testId> cache. Only /assets/chunk-* is handled here;
   the app shell is precached by Workbox. API calls are never touched. */
self.addEventListener('fetch', (event) => {
  const request = event.request
  if (request.method !== 'GET') return
  const url = new URL(request.url)
  if (url.origin !== self.location.origin || !/\/assets\/chunk-[^/]+\.js$/.test(url.pathname)) return
  event.respondWith(
    (async () => {
      const names = await caches.keys()
      for (const name of names) {
        if (!name.startsWith('wea-pack-')) continue
        const hit = await (await caches.open(name)).match(request)
        if (hit) return hit
      }
      return fetch(request)
    })(),
  )
})
