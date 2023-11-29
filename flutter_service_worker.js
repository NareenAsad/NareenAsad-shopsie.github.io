'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "238eef3cb71f45f5e05764da8839f501",
"assets/AssetManifest.bin.json": "bca288390db9bf2d01253c438962c167",
"assets/AssetManifest.json": "69cc38d62362629333a9ed2c91d157a2",
"assets/assets/fonts/Agbalumo.ttf": "27cd170665cbb75101c35073b6e642ca",
"assets/assets/fonts/EduTASBeginner.ttf": "4de7026ab75bfb5887c8996ce97266c6",
"assets/assets/fonts/FjallaOne.ttf": "ec1b2f280f4da66724d41ecd5275ef27",
"assets/assets/icons/all.png": "22e4c27352075c67eaec116997c87ec5",
"assets/assets/icons/heel.png": "d8dc892ff13389bb3d2a4fdb21640d1c",
"assets/assets/icons/pants.png": "5511a0bec63b821cc45c41518e11a332",
"assets/assets/icons/shirt_icon.png": "c7420b5aa86784c7d22631e6e3175cb2",
"assets/assets/icons/shoes.png": "a398370919db3b1afbd7e030b8f36b38",
"assets/assets/icons/top.png": "20ac52731d390e262ad5a82ce000d93b",
"assets/assets/icons/watches.png": "d4259623c3f37c6e90a580d258199ac3",
"assets/assets/images/1.jpg": "5eb8642a1812417abb18b3773315ae9c",
"assets/assets/images/2.png": "400c91262622cb7ca910a65a3ddd3316",
"assets/assets/images/3.png": "e20cc481036273a3d08f6260ad51e480",
"assets/assets/images/4.png": "28c2b493a1ce954a0b6f5b8e7f469f91",
"assets/assets/images/5.png": "77777c237a9f1078759e1dab3212c479",
"assets/assets/images/6.png": "2fdc3aa5de4389a7f26c9c9aa8f887b5",
"assets/assets/images/accessories01.jpg": "86676183f4654cabdce97d37f72fc3dc",
"assets/assets/images/accessories02.jpg": "e2d7030290d0a78aab79c54bc5b611e1",
"assets/assets/images/accessories03.jpg": "e4cbe0832e92bc94448879344e1f2eb5",
"assets/assets/images/accessories04.jpg": "5ec445ad74e7ca1fb07f27c8738ed4d4",
"assets/assets/images/accessories05.jpg": "79305b51a8a0a0bde666a3a2573c5ea5",
"assets/assets/images/accessories06.jpg": "1a040cb6fc832bca68e518b82c734eff",
"assets/assets/images/accessories07.jpg": "ba4a66c33f37977b411667351235345c",
"assets/assets/images/accessories08.jpg": "ebca55059897c55b6c9f7332259b5296",
"assets/assets/images/accessories09.jpg": "16fd12f5aa29c44a476ad4c4551c434a",
"assets/assets/images/accessories10.jpg": "4b6a1ae09269dd87784c5db070157c6a",
"assets/assets/images/accessories11.jpg": "e879846b80a3eb3af248b28bc339f9b2",
"assets/assets/images/accessories12.jpg": "ffe90fb85a97a0c865484b5c51a66918",
"assets/assets/images/heels1.jpg": "287cb2110f214d1d4235a28f6d6c36b6",
"assets/assets/images/heels2.jpg": "aac3a18c2b4cba33038eb621e342225f",
"assets/assets/images/heels3.jpg": "bc2a47f638380ecd5ecdcd940e5acfc8",
"assets/assets/images/heels4.jpg": "ba10bd0d72e21e11ca5f63c3282f26da",
"assets/assets/images/heels5.jpg": "531a1e534ffb769230c7fe0e7aa0c315",
"assets/assets/images/heels6.jpg": "e4e15426c0ec3272ab36b3c5f6933236",
"assets/assets/images/heels7.jpg": "effe210bc1a4fcbccbb3ee7d49bc2664",
"assets/assets/images/jackets1.jpg": "e923e7dcf89d5d4faaa18e77e0d8faac",
"assets/assets/images/jackets2.jpg": "eb58e6bae1db6f2e4416d6a6b098de08",
"assets/assets/images/jackets3.jpg": "3d8cf9f44ec86366e0c3d94f4a187889",
"assets/assets/images/jackets4.jpg": "2bf857a453f5234d092589b57a2dac87",
"assets/assets/images/jackets5.jpg": "8d65471f0727e3ac7580ae244f4d7ddf",
"assets/assets/images/jackets6.jpg": "1df3d222680c66f6259007866bf8d03b",
"assets/assets/images/jackets7.jpg": "abe75d186f7b75d801333eee7c9e1b93",
"assets/assets/images/jackets8.jpg": "8a427449ebc9e0cc495c664496cf0227",
"assets/assets/images/pants1.jpg": "712be859f89b6885697e7cd723881761",
"assets/assets/images/pants2.jpg": "2e9cc1258c16e70c3fa0e6c4ec7d18cc",
"assets/assets/images/pants3.jpg": "9b1d503065c9a57debd5234db5828706",
"assets/assets/images/pants4.jpg": "3b5dcf155db7691970d44793b8da7870",
"assets/assets/images/pants5.jpg": "50b7e1cf278f7348b8dca625e62b6acf",
"assets/assets/images/pants6.jpg": "190301814c77bee5b3df7461563f9ace",
"assets/assets/images/pants7.jpg": "d72f5b4d25c2e19c4ea72ea7b1f8a4c3",
"assets/assets/images/pants8.jpg": "675fadfd602781f6cfa7802593781beb",
"assets/assets/images/shirts1.jpg": "238625172cd20d3ed0cde70d51c9746e",
"assets/assets/images/shirts2.jpg": "0a6745d0baf4f38c71e0aa5672b53289",
"assets/assets/images/shirts3.jpg": "38d02471f0a1fd99e9ee27195ba7f515",
"assets/assets/images/shirts4.jpg": "65bde3e3210f631d3ed55e9a85fee028",
"assets/assets/images/shirts5.jpg": "74e568a5a246f6eb5d56d1a02b186fa6",
"assets/assets/images/shirts6.jpg": "c873bd215c7439727da6bb778d6b5438",
"assets/assets/images/shirts7.jpg": "8d7a906c3f80a2a4b683a891fc8372fb",
"assets/assets/images/shoes.jpeg": "618b1fda920a9b53a0d740245e9b8981",
"assets/assets/images/shoes1.jpeg": "923f4dbe7d260ed4106828977dfda9fe",
"assets/assets/images/shoes10.jpeg": "cc1538261b2abd816935e96826e6da0d",
"assets/assets/images/shoes11.jpeg": "1b5cb13a8a4ea0648d5966c035aa7225",
"assets/assets/images/shoes2.jpeg": "88ecb885fb15ff7e4e5317739b809a78",
"assets/assets/images/shoes3.jpeg": "112bab5e1156faebf5edbd9bb772b6b5",
"assets/assets/images/shoes4.jpeg": "508b2b0b1ba46d777e65e982b22b1ef5",
"assets/assets/images/shoes5.jpeg": "09f9192d899f5203e5ab14432cb2c616",
"assets/assets/images/shoes6.jpeg": "c706ef44dc303f31f9c0c680b08edc4b",
"assets/assets/images/shoes7.jpeg": "1ac60c15b370300a618c3fca36dec602",
"assets/assets/images/shoes8.jpeg": "c6fcd06682cf0297d8d7f38a8a546df3",
"assets/assets/images/shoes9.jpeg": "346cb39cfca8879f6c74a7b28ccc8ff3",
"assets/FontManifest.json": "5f1a0828ab90c9818f73908cd1f16699",
"assets/fonts/MaterialIcons-Regular.otf": "366c7e17fbf8fb15e2c96686fd61e671",
"assets/NOTICES": "d04822a72a3d5465360b305c187f199d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "64edb91684bdb3b879812ba2e48dd487",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "f87e541501c96012c252942b6b75d1ea",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "4124c42a73efa7eb886d3400a1ed7a06",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8cbaed16c0fdc744ffc05cbba5ceab30",
"/": "8cbaed16c0fdc744ffc05cbba5ceab30",
"main.dart.js": "616b0be46da9aed0bc5640da085a0924",
"manifest.json": "09b576fa710b66a06061caa75c24bfb1",
"version.json": "7f7766040755775e4f37a1861259762a"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
