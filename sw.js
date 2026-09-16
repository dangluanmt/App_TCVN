const CACHE_NAME = 'tcvn-cache-v26';

const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
];

const PDF_ASSETS = [
  './pdf/TT_32_2021_BYT.pdf', // File PDF mới bổ sung
  './pdf/TT_23_2026_BYT.pdf',
  './pdf/TCVN_7022_2002.pdf',
  './pdf/TCVN_4470_2012.pdf',
  './pdf/TCVN_5065_2020.pdf',
  './pdf/TCVN_9365_2012.pdf',
  './pdf/TT_23_2024_BGDDT.pdf',
  './pdf/TT_13_2020_BGDDT.pdf',
  './pdf/TCVN_4529_2012.pdf',
  './pdf/TCVN_4205_2012.pdf',
  './pdf/TCVN_9211_2012.pdf',
  './pdf/TCVN_11856_2017.pdf',
  './pdf/TCVN_3907_2011.pdf',
  './pdf/TCVN_8793_2011.pdf',
  './pdf/TCVN_8794_2011.pdf',
  './pdf/QCVN_07_4_2016.pdf',
  './pdf/QCVN_01_2021.pdf',
  './pdf/QCVN_06_2022.pdf',
  './pdf/QCVN_10_2024.pdf'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      await cache.addAll(CORE_ASSETS);
      await Promise.allSettled(
        PDF_ASSETS.map((url) => cache.add(url).catch((err) => console.log('Bỏ qua file chưa có:', url)))
      );
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      });
    }).catch(() => {
      return caches.match('./index.html');
    })
  );
});