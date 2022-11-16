self.addEventListener("install", function (event) {
  console.log("WORKER: install event in progress.");
});

self.addEventListener("activate", (event) => {
  console.log("WORKER: activate event in progress.");
  event.waitUntil(clients.claim());
});

self.addEventListener("message", (event) => {
  console.log(`[Service Worker] Message: `, event.data.foo);
  clients.matchAll().then((clients) => {
    clients.forEach((client) => {
      client.postMessage({
        foo: event.data.foo,
      });
    });
  });
});

self.addEventListener("fetch", (event) => {
  console.log(`[Service Worker] Fetch: `, event.request.url);
  event.respondWith(
    fetch('different.css')
  );
  // event.respondWith(
  //   caches.match(event.request).then((response) => {
  //     return response || fetch(event.request);
  //   })
  // );
});
