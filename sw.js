const CACHE_NAME = 'tcvn-cache-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
];

// 1. Cài đặt Service Worker và lưu tài nguyên vào bộ nhớ đệm
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Kích hoạt và dọn dẹp các bản cache cũ nếu có
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

// 3. Phục vụ tài nguyên từ bộ nhớ đệm khi offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      // Ưu tiên lấy từ cache, nếu không có mới gọi mạng
      return response || fetch(event.request);
    }).catch(() => {
      // Nếu mất mạng hoàn toàn và tìm trang chủ
      return caches.match('./index.html');
    })
  );
});