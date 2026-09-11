const CACHE_NAME = 'tcvn-cache-v3';

// 1. Chỉ cache các file cốt lõi của ứng dụng (bắt buộc phải có)
const CORE_ASSETS = [
  './',
  './index.html',
  './manifest.json',
  'https://cdn-icons-png.flaticon.com/512/3135/3135768.png'
];

// Danh sách các file PDF
const PDF_ASSETS = [
  './pdf/TCVN_9211_2012.pdf',
  './pdf/TCVN_11856_2017.pdf',
  './pdf/TCVN_3907_2011.pdf',
  './pdf/TCVN_8793_2011.pdf',
  './pdf/TCVN_8794_2011.pdf',
  './pdf/QCVN_07_4_2016.pdf',
  './pdf/QCVN_01_2021.pdf',
  './pdf/QCVN_06_2022.pdf'
];

// Cài đặt Service Worker: Dùng Promise.allSettled để file nào thiếu thì bỏ qua, không làm sập Cache
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(async (cache) => {
      // Lưu giao diện chính trước
      await cache.addAll(CORE_ASSETS);
      
      // Lưu các file PDF (file nào có trên host thì lưu, file nào chưa nạp thì bỏ qua)
      await Promise.allSettled(
        PDF_ASSETS.map((url) => cache.add(url).catch((err) => console.log('Bỏ qua file chưa có:', url)))
      );
    })
  );
  self.skipWaiting();
});

// Kích hoạt và dọn dẹp các cache phiên bản cũ
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

// Phục vụ dữ liệu từ bộ nhớ đệm (Cache-First)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then((networkResponse) => {
        // Nếu tải được tài nguyên mới từ mạng thì tự động lưu bổ sung vào cache
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