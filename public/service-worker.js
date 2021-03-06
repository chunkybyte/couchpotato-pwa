// Service Worker File

var CACHE_NAME = "couch-potato-v3";
var urlsToCache = [
    '/',
    '/css/styles.css',
    '/scripts/app.js',
    './scripts/jquery.min.js',
    '/data/manifest.json',
    '/scripts/firebaseOperations.js'
];

// Installing Service Worker
self.addEventListener('install', function(event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                console.log('Cache Opened');
                return cache.addAll(urlsToCache);
            })
    );
});

// Cache and Fetch Requests SW
self.addEventListener('fetch', function(event) {
    event.respondWith(
        caches.match(event.request)
            .then(function(response) {
                // Cache HIT
                if (response) {
                    console.log('CACHE HIT');
                    return response;
                }

                // Cache MISS
                var fetchReq = event.request.clone();

                return fetch(fetchReq)
                    .then(function(response) {
                        // Invalid Response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }

                        // Valid Response
                        var responseToCache = response.clone();

                        caches.open(CACHE_NAME)
                            .then(function(cache) {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    });
            })
    )
});