"use strict";var precacheConfig=[["/index.html","5d528138db483bc70598e26d066c28be"],["/static/css/main.3a4c665b.css","58d7561ca533049430a2b19c06032057"],["/static/js/0.83a85439.chunk.js","b546c12a46b3a382415925c41692465c"],["/static/js/main.9a61664d.js","1eabb28fc66cf9b6b139d0460de08876"],["/static/media/caryta-02.7549a6a5.jpeg","7549a6a5d2e763a415cad68914e9aa09"],["/static/media/chien02.99aa6989.JPG","99aa698934f341c4c83c34b8fd38e811"],["/static/media/chien03.4d12914e.jpeg","4d12914e30f182b42336f133a30d6faa"],["/static/media/chien04.e1ceefc2.jpeg","e1ceefc2319a5fdb2f98e81e6a597966"],["/static/media/chien05.71996c44.jpeg","71996c44ebe1a064b18734977979718d"],["/static/media/chien06.56330d78.JPG","56330d78d4bcbcefe006913c772bdda6"],["/static/media/chien07.efd61738.jpg","efd617382d678a41647eccc05a50476a"],["/static/media/chien08.11f565e8.png","11f565e86ef3fa27a67ecbb4ace1caea"],["/static/media/chien09.9eb48529.png","9eb48529792256a325bbeb06a2e18176"],["/static/media/chien10.73f6f3a2.png","73f6f3a21df7da6252d9af8c7422ff2a"],["/static/media/chien11.5c969849.png","5c969849036c32b8b77a8ece98b5a822"],["/static/media/chien12.f8951fc4.png","f8951fc44044c444696fb79f29201eda"],["/static/media/chien13.582247c4.png","582247c47533caafdbffc4c811291fab"],["/static/media/chien14.6798aaf3.png","6798aaf35799dc90773e5d54204f5325"],["/static/media/chien15.2159864c.png","2159864cd777f585c6970c8fc6feb74c"],["/static/media/chien16.d265442e.png","d265442e5336068bd5a3e05c7851ad26"],["/static/media/chien17.278d6a75.png","278d6a75bc18c5dbbf84d80aa3738fa6"],["/static/media/chien18.94a1e542.png","94a1e542ff31859fc228505865bd2970"],["/static/media/chien19.4abec178.png","4abec1789e02350beae77d9d4237573f"],["/static/media/chien20.0d9e5132.png","0d9e5132b7d901ece7d8a4bf51da38f7"],["/static/media/chien21.11f565e8.png","11f565e86ef3fa27a67ecbb4ace1caea"],["/static/media/chien22.c0cf262e.png","c0cf262e0d7bbf8fd366cc5b64909d12"],["/static/media/chien23.08514d46.png","08514d46d3108d2df8e71f3d58b2f3e7"],["/static/media/chien24.6983d126.png","6983d126c4320da7012b4877acff651d"],["/static/media/chien25.18253a99.png","18253a99ad9056070f56045615350488"],["/static/media/chien26.f6c5edd6.png","f6c5edd6cb3476f0dbe46ea51e29cbb0"],["/static/media/douong01.6797159e.JPG","6797159ec5e7c6e4f69df091acf78ab1"],["/static/media/douong02.fe655aea.JPG","fe655aea3e3b6a1a036baa4fcf9ac102"],["/static/media/douong03.2e529f68.JPG","2e529f6875b18a1aab007644eb2a1eba"],["/static/media/douong04.8c9d250b.JPG","8c9d250b3657bafd94ff6360e54d90a2"],["/static/media/douong06.b78fcd34.JPG","b78fcd34272061987187bd6fe77083ba"],["/static/media/douong07.131b4003.JPG","131b4003c0c10d96bfef85b53399b28f"],["/static/media/douong08.d21e7a77.JPG","d21e7a77fe13c2785ea4d67c5fb0779f"],["/static/media/douong11.77d99ca0.JPG","77d99ca0d94d583a87d7841275930eb6"],["/static/media/douong12.8433cd50.JPG","8433cd5063cb894e37d1dbd38a3caea9"],["/static/media/douong14.e6a4c169.JPG","e6a4c169e704d6806c0a44e1160d1424"],["/static/media/douong17.811602c5.JPG","811602c512b553f86e85d7fafc5b5894"],["/static/media/douong18.df34c4df.JPG","df34c4df470496a4f0a9a18880c07f2b"],["/static/media/douong19.8f668cfb.JPG","8f668cfb7cc7a649ba23102eacfbdebb"],["/static/media/douong20.f3772765.JPG","f377276500471fc36062439b7d1ff3d4"],["/static/media/goi01.a3879e6a.JPG","a3879e6ab912ce78ebc039382bc26a7b"],["/static/media/nguyen.2c655d15.jpeg","2c655d15f779ece8a693f4ac161ad867"],["/static/media/nuong01.204fdec3.png","204fdec3c0f55c87a78d3600747ec187"],["/static/media/nuong02.2b370267.png","2b370267a06f70baa18bdb189335c088"],["/static/media/nuong03.a1d213e1.JPG","a1d213e106f052125c082ca048a232b9"],["/static/media/nuong04.1215f24c.png","1215f24c9bf0eed65e71ea8f38d2fb24"],["/static/media/phalau01.342e8f0b.JPG","342e8f0ba9e1edba84112795680770e7"],["/static/media/simple-house-logo.b147a893.png","b147a893ba5392dd42287d14e29803d9"],["/static/media/sinhto01.5cc8ba46.png","5cc8ba46f14a50309da661691b431a04"],["/static/media/sinhto02.aafcd339.png","aafcd33961ccf004edd520208d2489c3"],["/static/media/sinhto03.da1d8995.png","da1d8995a53f6dd6ccf942d3104b2ea7"],["/static/media/sinhto04.21154fba.png","21154fba548b01d95c657eb48e362f24"],["/static/media/sinhto05.52c9ba92.png","52c9ba924150cd7abacfa8eef277b944"],["/static/media/sinhto06.b81f22a7.png","b81f22a7bf20821296eca47aacea1521"],["/static/media/sinhto07.2ab648d2.png","2ab648d2b39c656a74255305416bfa28"],["/static/media/sinhto08.864d62ee.png","864d62ee57771eff0d7bc999771d6657"],["/static/media/sinhto09.e50d65d1.png","e50d65d12b659ab2fe39051d749f40e5"],["/static/media/sinhto10.56fb1129.png","56fb11290c2a65b96652e9a18d045958"],["/static/media/sinhto11.16d81f4d.JPG","16d81f4dc3c7fe72d244d4cd5bc46938"],["/static/media/sinhto12.656b9ebf.JPG","656b9ebfdaf651900ab8b6aa9911c7d6"],["/static/media/sinhto13.5cc2d57c.JPG","5cc2d57c2fb55bf37c2f7223d5f923e0"],["/static/media/sinhto14.57b2d914.JPG","57b2d9148782ac68cb18cde509bd14fe"],["/static/media/sinhto15.bc94dd5b.JPG","bc94dd5b82897145c2f0888a25f39694"],["/static/media/sinhto16.4f390195.JPG","4f39019542fd0091bf50dbe942766b80"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var c=new URL(e);return"/"===c.pathname.slice(-1)&&(c.pathname+=a),c.toString()},cleanResponse=function(a){return a.redirected?("body"in a?Promise.resolve(a.body):a.blob()).then(function(e){return new Response(e,{headers:a.headers,status:a.status,statusText:a.statusText})}):Promise.resolve(a)},createCacheKey=function(e,a,c,t){var n=new URL(e);return t&&n.pathname.match(t)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(c)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var c=new URL(a).pathname;return e.some(function(e){return c.match(e)})},stripIgnoredUrlParameters=function(e,c){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(a){return c.every(function(e){return!e.test(a[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],c=e[1],t=new URL(a,self.location),n=createCacheKey(t,hashParamName,c,/\.\w{8}\./);return[t.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(t){return setOfCachedUrls(t).then(function(c){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!c.has(a)){var e=new Request(a,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+a+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return t.put(a,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var c=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(a){return a.keys().then(function(e){return Promise.all(e.map(function(e){if(!c.has(e.url))return a.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(a){if("GET"===a.request.method){var e,c=stripIgnoredUrlParameters(a.request.url,ignoreUrlParametersMatching),t="index.html";(e=urlsToCacheKeys.has(c))||(c=addDirectoryIndex(c,t),e=urlsToCacheKeys.has(c));var n="/index.html";!e&&"navigate"===a.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],a.request.url)&&(c=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(c)),e&&a.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(c)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',a.request.url,e),fetch(a.request)}))}});