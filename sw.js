var CACHE_NAME = 'cache-v1';
var urlsToCache = [
	'/PWA',
	'/PWA/manifest.json',
	'/PWA/index.html',
	'/PWA/js/index.js',
	'/PWA/jquery^3,3,1.min.js'
];

self.addEventListener('install', function(event) {
	event.waitUntil(
		caches.open(CACHE_NAME).then(function(cache) {
			console.log('Opened cache');
			return cache.addAll(urlsToCache);
		})
	);
});