// this file is injected into by workbox-webpack-plugin
/* globals workbox */

// make sure the updated worker is installed and initialized ASAP
workbox.skipWaiting();
workbox.clientsClaim();

// precache files from manifest generated by workbox-webpack-plugin
workbox.precaching.precacheAndRoute(self.__precacheManifest);

// fallback navigation to index (enable SPA support)
workbox.routing.registerNavigationRoute('/index.html');

// support Google Analytics calls when offline
workbox.googleAnalytics.initialize();
