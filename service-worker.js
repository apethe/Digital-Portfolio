"use strict";var precacheConfig=[["/digital-portfolio/index.html","68f3d1dcf1330ba335c026d813736c4a"],["/digital-portfolio/static/css/main.b5fa0367.css","12342a2566629b9283432ebca7f14d9b"],["/digital-portfolio/static/js/main.7a4d85e3.js","787e7c971f4f944d966f4a58a1bd22eb"],["/digital-portfolio/static/media/Activision-mobile2.66fc237f.png","66fc237f83c757cdbc5eca760584fe1b"],["/digital-portfolio/static/media/Activision-tablet2.762971ef.png","762971efcdb8afb4a0ba99fa1743f3b8"],["/digital-portfolio/static/media/Activision2.9da420fe.png","9da420fe945bc7d2447bc2b604085c94"],["/digital-portfolio/static/media/Profile.64a64675.png","64a64675b0de0002a4f371a878312b61"],["/digital-portfolio/static/media/StateofMichigan-mobile2.1eedfcf7.png","1eedfcf78b66b21c80d146ba9f93a8f0"],["/digital-portfolio/static/media/StateofMichigan-tablet2.67d94cec.png","67d94cec0b69cd69411fd9e5b051d869"],["/digital-portfolio/static/media/StateofMichigan2.5c3ec50c.png","5c3ec50c2ad51e64f1e283c1e0b31f25"],["/digital-portfolio/static/media/Telstra-mobile2.7cf96cb0.png","7cf96cb0dccd52eefede80661ac1381c"],["/digital-portfolio/static/media/Telstra-tablet2.981ac3cb.png","981ac3cb4fafafd60eb6db0aa1de0a73"],["/digital-portfolio/static/media/Telstra2.3d45c217.png","3d45c217a1ba981069f51f850ea4b1d9"],["/digital-portfolio/static/media/arrow.fbc5e533.svg","fbc5e533495cfad5cd20ea6963e65925"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,n){var i=new URL(e);return n&&i.pathname.match(n)||(i.search+=(i.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),i.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],n=new URL(t,self.location),i=createCacheKey(n,hashParamName,a,/\.\w{8}\./);return[n.toString(),i]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(n){return setOfCachedUrls(n).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return n.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),n="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,n),e=urlsToCacheKeys.has(a));var i="/digital-portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(i,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});