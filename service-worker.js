/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
  "/react-native-confetti-cannon/precache-manifest.9db7889c8202eaec822b2d2c762f435a.js"
);

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/react-native-confetti-cannon/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});

workbox.routing.registerRoute(/^https?.*/, workbox.strategies.networkFirst({ "cacheName":"offlineCache", plugins: [new workbox.expiration.Plugin({"maxEntries":200,"purgeOnQuotaError":false})] }), 'GET');
