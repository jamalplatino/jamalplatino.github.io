'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "ea6b3ab88355bc6b6e96934617f8b656",
"assets/assets/images/9Mobile.jpg": "61b1996c99ac417cc855dbef051f3ee8",
"assets/assets/images/9mobile2.jpg": "0ce8bab2b7330a4517581c2f719d3e4b",
"assets/assets/images/a.jpg": "f0d06c25fa20c25a0eb345050de39e6a",
"assets/assets/images/aedc.png": "a4d0deb4c0b03d6f7e34493ee901ce1f",
"assets/assets/images/agents.json": "0b85044cb7677defa719d5d0b549f86a",
"assets/assets/images/agents2.json": "ca43608ae260e5174f5f9807262068ea",
"assets/assets/images/agents3.json": "386a0b77b18e9b6294034440d5f22f00",
"assets/assets/images/agents4.json": "1ef3db35709b913abb05553d776e6f87",
"assets/assets/images/airtel.jpg": "d6afbbe4253592029736cefcb59c4b61",
"assets/assets/images/ANIMATION.json": "a3e31de04e53fce82004694cce83654a",
"assets/assets/images/apple.png": "4f658b9a7d067de5238644b78d8d09cc",
"assets/assets/images/b.jpg": "09343c318045e0d4c50d7b5cb694f57a",
"assets/assets/images/bedc.png": "d19ba1fff2f62a2483bca303c17e05d3",
"assets/assets/images/c.jpg": "fe149e042a1d0c673e453b5c07d02664",
"assets/assets/images/carousel.jpg": "e2207af21df0249dc82c70e4855528a4",
"assets/assets/images/carousel2.jpg": "fc9d87fc73b867ca3bf53896ebeea3ac",
"assets/assets/images/carousel3.jpg": "c0b8e2c14845b2514b3a301e794c0681",
"assets/assets/images/chicken.jpg": "6b57bc530048be34381015d28add106b",
"assets/assets/images/confetti.json": "7afcc2c177b73c29a15f4f046d85b4d5",
"assets/assets/images/customer_service.json": "1506e1d17a4db9559a5c64405eb92ec7",
"assets/assets/images/delivered.json": "d41d8cd98f00b204e9800998ecf8427e",
"assets/assets/images/done.json": "f025dd10b211685777be1fc8b9d43f37",
"assets/assets/images/eedc.png": "83681f5633fddc52a01a8378086fdbe2",
"assets/assets/images/ekedc.png": "14b284e899b2f72a8a118cac5ec46b81",
"assets/assets/images/facebook.png": "f9ffe7a2f9b99179d795c5713ea35956",
"assets/assets/images/funding.json": "d1f1e87b0ac8f6be89efe43616044d55",
"assets/assets/images/funding2.json": "a891254636aa47a6b1b7a277ba553117",
"assets/assets/images/glo.png": "613d9b89c5ae1fae8aeeb458c15f84f5",
"assets/assets/images/glo2.jpg": "ba47a59ab8d329a189b265776e41ff65",
"assets/assets/images/google.png": "ca2f7db280e9c773e341589a81c15082",
"assets/assets/images/ibedc.png": "35af0348fc0b1153b90d8edf74f765e4",
"assets/assets/images/icons/001-comment.png": "a80b5a09c7bf9ba741039a8410646621",
"assets/assets/images/icons/002-comment-1.png": "06edb49aedd8d8fd5b51aa1c1d4c54d8",
"assets/assets/images/icons/agent.png": "849df0ac00ba760e24048d82d671e039",
"assets/assets/images/icons/basket.png": "fe440614e9595a98dfd5b9180362d045",
"assets/assets/images/icons/bbq.png": "e881acfdf84721db10e1b25751d0414e",
"assets/assets/images/icons/bike.png": "50ad7d92996f5bbc0e126e4e0b816efe",
"assets/assets/images/icons/booking.png": "44dc581e9ffcb6707380c4dc8e81ee71",
"assets/assets/images/icons/cable.png": "199796517c1aa3bcd30f40b59075180a",
"assets/assets/images/icons/cable2.png": "2c9a112d56d9c84ae01cfefd3cd105fc",
"assets/assets/images/icons/cable3.png": "74038972c310f15a032e398461e418ef",
"assets/assets/images/icons/cable4.png": "2a95c4a229affe8bff7efe40cc0a0d34",
"assets/assets/images/icons/checklist.png": "2ab5f19bc29fb186b70ec846cbb54f2c",
"assets/assets/images/icons/data.png": "87316ca3f04e6f08d2076539ec0b7536",
"assets/assets/images/icons/data2.png": "1e9f19b059ee34056b9b2a56bf199b51",
"assets/assets/images/icons/developer.png": "1acb0594034d158fe1a51c372c97b1e2",
"assets/assets/images/icons/gas.png": "5a9ce62b5c78da1d517d26f48b2c7447",
"assets/assets/images/icons/gas2.png": "144e8b008a8746e5954978ad284b7ab5",
"assets/assets/images/icons/gas3.png": "42e7f41cbd3640a103ec67ceb28f8bad",
"assets/assets/images/icons/gas4.png": "38dfb6f04d3429b8ec32ca50eac48f66",
"assets/assets/images/icons/gas5.png": "b316e00bdf19cec8a5c00e8bd45938b2",
"assets/assets/images/icons/icons8-barbeque-64.png": "08f8d3597fc32623328ec0a8e814f6ad",
"assets/assets/images/icons/icons8-weber-50.png": "b20bb3e236493461269cc528b6218e1c",
"assets/assets/images/icons/laundrymachine.png": "666801f26bc1833a9471d31d90f58eb0",
"assets/assets/images/icons/light.png": "f83ce1b4206566d38940b6bf23eb5563",
"assets/assets/images/icons/light2.png": "6353746e70190f792f7e17da0ec3f2f6",
"assets/assets/images/icons/light3.png": "4794163267fba6a753703a2c6be15f11",
"assets/assets/images/icons/light4.png": "b336aa02b6e36ecd48f05d905a39fd2c",
"assets/assets/images/icons/lock.png": "6146b31bb598d2e59d1e7bc1efea7979",
"assets/assets/images/icons/money.png": "0dff76ba5b598de289374c42ee047c54",
"assets/assets/images/icons/order.png": "81a059c4d08306791b73270717634e63",
"assets/assets/images/icons/order2.png": "45bbb2b940c648bc1c25b7e96e497c07",
"assets/assets/images/icons/payment.png": "3c0039d736dc11e55ebfa0c79a2506c2",
"assets/assets/images/icons/pizza.png": "efbead742fab4ff35c1015ae1123bf4e",
"assets/assets/images/icons/see.png": "b14c0e530dbc9d8499631f6784e3305f",
"assets/assets/images/icons/tracking.png": "7593d3ee23421b4956045054c817c9ce",
"assets/assets/images/icons/visible.png": "7fd7b28fb34e20cc60acb241906af9d0",
"assets/assets/images/icons/visible2.png": "b15791d719bd7cb8b1a193c55320621b",
"assets/assets/images/icons/washingmachine.png": "73c650c376c196e1d12f70895757a43b",
"assets/assets/images/ikedc.png": "f834b5853d9808d5665e31767a4a2d9b",
"assets/assets/images/instagram.png": "5c570427ee23f69853d28aec805eee79",
"assets/assets/images/jedc.png": "068be050ae609bc20a054adcbe3513e9",
"assets/assets/images/kaduna.png": "f42756c58a437d6fe8b23e1399b0852b",
"assets/assets/images/kedco.png": "8b920313be81fa6982681c8d06d7af19",
"assets/assets/images/logo.jpg": "c460eb7657a2761a3fe4cf3e57dabf5a",
"assets/assets/images/milo.jpg": "9114cb21dcfc0fd0e2e6358b5281ca4a",
"assets/assets/images/mtn.png": "622773f50256b0fdebc9f7ddc76759a6",
"assets/assets/images/no_data.json": "aa8928c28f777c603961cd23b681e4b9",
"assets/assets/images/no_transactions.json": "7dfecc8504702256ebbaa37d6ba3416c",
"assets/assets/images/oops.json": "bbe0d3aaaed4a7e95538307395205ef1",
"assets/assets/images/pending.json": "78668a9d38a161a26484e7195d8b3935",
"assets/assets/images/pending2.json": "88fb8fe5441d57556dd4adc3ca51a651",
"assets/assets/images/pending3.json": "75279ee4cbc3ed71ac893b16b5a00912",
"assets/assets/images/pending4.json": "7c7bbef58040278787d5a1fe9b747ed3",
"assets/assets/images/phed.png": "1c8277794517bc9a6b8f6e28fa4eb1be",
"assets/assets/images/pringles.jpg": "c1bcc95205aa902d30a1f35c8a9a5556",
"assets/assets/images/review.json": "3917617ecaff250390d90e967af9a209",
"assets/assets/images/review2.json": "ac1ab13faa2ea243f55ef949870d9d11",
"assets/assets/images/shield.png": "4cd8aa40a7ef6d6aaf3d3ea0f2871db6",
"assets/assets/images/shop.jpg": "86232f89a7b4fb5035e7a1def2f7b3b4",
"assets/assets/images/suya.jpg": "7d99c981c216d24a941906d4962e9c38",
"assets/assets/images/tiktok.png": "87bab7ac04b70d71049adb66712f7cd7",
"assets/assets/images/tracking.jpg": "35e9081169cbe9eef96cceeb96149ee0",
"assets/assets/images/transactions.json": "56627274716cefc7ab99187c4a254dbd",
"assets/assets/images/twitter.png": "8f35a40403a84631c4125c4f1859c7a6",
"assets/assets/images/view.png": "96983d0005503603331b70295581125f",
"assets/assets/images/whatsapp.png": "bf2d30da79e2e8a2713ff4110dc740e1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "77f8a26a6cde2c3acbe8122cb562807f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/im_stepper/assets/me.jpg": "487511e754834bdf2e6771376d59707e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/2.jpg": "035e36d4a64e27e2bd107354abdbf015",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "684747178429fa71ca797e76b4b421f0",
"/": "684747178429fa71ca797e76b4b421f0",
"main.dart.js": "e8a093c673945e3984413e2a5634e30f",
"manifest.json": "b1115b0d7b8c276b469e07b26bebe441",
"version.json": "1aae99c4d10e31c0161c179aa3bd35b6"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
