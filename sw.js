const CACHE_NAME = 'tcvn-cache-v2';

// Danh sách toàn bộ giao diện và các file PDF cần lưu offline
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/3135/3135768.png',
  
  // Danh sách các file PDF nội bộ
  './pdf/TCVN_9211_2012.pdf',
  './pdf/TCVN_11856_2017.pdf',
  './pdf/TCVN_3907_2011.pdf',
  './pdf/TCVN_8793_2011.pdf',
  './pdf/TCVN_8794_2011.pdf',
  './pdf/QCVN_07_4_2016.pdf',
  './pdf/QCVN_01_2021.pdf',
  './pdf/QCVN_06_2022.pdf'
];

// 1. Cài đặt Service Worker và tải trước toàn bộ tài nguyên vào Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
  self.skipWaiting();
});

// 2. Kích hoạt và dọn dẹp bộ nhớ đệm phiên bản cũ
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

// 3. Phục vụ dữ liệu và file PDF trực tiếp từ Cache khi không có mạng
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    }).catch(() => {
      return caches.match('./index.html');
    })
  );
});