"use strict";var precacheConfig=[["/index.html","97ba3a0935d85b03d1466ba13f42fc03"],["/static/css/main.2f403749.css","50fe03a873cc3d1a877069b1029288a3"],["/static/js/main.4d60d0b1.js","f4bb3ea102c82f2d3ecd6208cd69ba3b"],["/static/media/App.60432040.scss","6043204028fe777f5e7471bac84ff320"],["/static/media/about.bf5b38f7.scss","bf5b38f7d7d4d32546b542b13f40ea60"],["/static/media/account.a47d2636.scss","a47d2636836321d3fe6281320b191e46"],["/static/media/error404.458281e5.scss","458281e50be7799071f73310c50893e5"],["/static/media/home.23657cd1.scss","23657cd11d73df5e333637d1f62edead"],["/static/media/landing.a89844fd.scss","a89844fddbc45cc9b3e32835c40867ad"],["/static/media/left.438c7787.svg","438c7787826f79772cfd063ed9c2e282"],["/static/media/login.62cfd857.scss","62cfd857ffc8bab7b82399537eea7ec1"],["/static/media/right.7869dbc7.svg","7869dbc7ea03b3b6ba5a1cd347e625ca"],["/static/media/signup.95dfb039.scss","95dfb0398a13df765ea7967b4ea50daa"],["/static/media/top.064ed60d.scss","064ed60d9748639eb430d0f385704dd6"],["/static/media/util.dc128fe3.scss","dc128fe3c86920d3481ace87f88bacc1"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var s=new URL(e);return a&&s.pathname.match(a)||(s.search+=(s.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),s.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),s=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),s]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var s="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(s,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});