const CACHE_NAME = 'pureland-v2.84';

const ASSETS_TO_CACHE = [
    './',
    './index.html',
    './index_en.html',
    './index_jp.html',
    './manifest.json',
    './manifest_en.json',
    './manifest_jp.json',
    './config.js',
    './config_en.js',
    './config_jp.js',
    './articles.js',
    './icon-192.png',
    './icon-512.png',
    './one.html',
    './one_en.html',
    './one_jp.html',
    './realm.html',
    './realm_en.html',
    './realm_jp.html',
    './48vows.html',
    './88buddhas.html',
    './amitabha.html',
    './blessing.html',
    './bodhi.html',
    './coin.html',
    './dizang.html',
    './esoteric.html',
    './fahua.html',
    './huayan.html',
    './maitreya-kalpa.html',
    './personal.html',
    './prajna.html',
    './precepts.html',
    './puxian.html',
    './reader.html',
    './shurangama.html',
    './treasure.html',
    './vimalakirti.html',
    './water.html',
    './weishi.html',
    './wheel.html',
    './writing.html',
    './zen.html',
    './48vows_en.html',
    './48vows_jp.html',
    './88buddhas_en.html',
    './88buddhas_jp.html',
    './amitabha_en.html',
    './amitabha_jp.html',
    './blessing_en.html',
    './blessing_jp.html',
    './bodhi_en.html',
    './bodhi_jp.html',
    './coin_en.html',
    './coin_jp.html',
    './dizang_en.html',
    './dizang_jp.html',
    './esoteric_en.html',
    './esoteric_jp.html',
    './fahua_en.html',
    './fahua_jp.html',
    './huayan_en.html',
    './huayan_jp.html',
    './maitreya-kalpa_en.html',
    './maitreya-kalpa_jp.html',
    './personal_en.html',
    './personal_jp.html',
    './prajna_en.html',
    './prajna_jp.html',
    './precepts_en.html',
    './precepts_jp.html',
    './puxian_en.html',
    './puxian_jp.html',
    './reader_en.html',
    './reader_jp.html',
    './shurangama_en.html',
    './shurangama_jp.html',
    './treasure_en.html',
    './treasure_jp.html',
    './vimalakirti_en.html',
    './vimalakirti_jp.html',
    './water_en.html',
    './water_jp.html',
    './weishi_en.html',
    './weishi_jp.html',
    './wheel_en.html',
    './wheel_jp.html',
    './writing_en.html',
    './writing_jp.html',
    './zen_en.html',
    './zen_jp.html',
    './matrix.html',
    './matrix_en.html',
    './matrix_jp.html',
    './vision.html',
    './vision_en.html',
    './vision_jp.html',
    './8treasures.html',
    './8treasures_en.html',
    './8treasures_jp.html',
    './lunar.html',
    './lunar_en.html',
    './lunar_jp.html'
];

self.addEventListener('install', (event) => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_TO_CACHE))
    );
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((cacheNames) => {
            return Promise.all(
                cacheNames.filter((name) => name !== CACHE_NAME).map((name) => caches.delete(name))
            );
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request, { ignoreSearch: true }).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
