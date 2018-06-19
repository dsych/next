/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["bramble-live-dev-cache-sw.js","3f1d7edf8845ed9cb185de5c3e438416"],["bramble.js","3cdcde05ac0c7f3f10da4e352d558e60"],["config.json","8f45f498886c4b38b028aacf4ad50af9"],["editor.html","fa1de2912a7a8fdb3df1e5d760f8e900"],["extensions/default/Autosave/main.js","8cd9e74dd4a375b9146630bd1b7903a7"],["extensions/default/BrambleUrlCodeHints/camera/camera-shutter-click-08.mp3","a2984828124f4dd8f6f9a651696aa666"],["extensions/default/BrambleUrlCodeHints/glyphicons-12-camera.png","2fb637662cf18738efd39c891675e344"],["extensions/default/BrambleUrlCodeHints/main.js","8d7f69c6b349eb3f2fdd9b756ded8880"],["extensions/default/BrambleUrlCodeHints/selfiePreview.png","01fbfe9c91f2f4c7db7b5bdc67a986c1"],["extensions/default/BrambleUrlCodeHints/style.css","581b85b8a470aef9cfacf3592a01eb78"],["extensions/default/CSSAtRuleCodeHints/main.js","d991e36d81576187d204e65db5510aba"],["extensions/default/CSSCodeHints/main.js","cc58b9afd1bb07f49cf1010f4b85c1c9"],["extensions/default/CSSCodeHints/styles/brackets-css-hints.css","68cfd5a3fd789fbb695f0b4a5591412f"],["extensions/default/CSSPseudoSelectorHints/main.js","56a3ab93f71bb011ec3a821110135d51"],["extensions/default/HTMLCodeHints/main.js","b57cf1ff5ac71d9ec7289223ca7188eb"],["extensions/default/HTMLEntityCodeHints/styles.css","3a7b9ca14cc6d6fafc96eea7cbbd7508"],["extensions/default/HtmlEntityCodeHints/main.js","f3f5310f6905f597de299c7d7afaa007"],["extensions/default/Inline3DParametersEditor/css/main.css","532d53f1cca31ba59bb8100083f6f4d4"],["extensions/default/Inline3DParametersEditor/main.js","85575995ddc532c50a36dd346783ea1b"],["extensions/default/InlineBorderRadiusEditor/BorderRadiusEditorTemplate.html","c3ffda1ca902c183a8205003e823d6ad"],["extensions/default/InlineBorderRadiusEditor/css/main.css","8643e8008d9a7547ea1bbecf96213715"],["extensions/default/InlineBorderRadiusEditor/main.js","3d15bd455682170e3208297db96f4a35"],["extensions/default/InlineBoxModelEditor/BoxModelEditorTemplate.html","35b5e8443174e652d5223d7d5a0e8655"],["extensions/default/InlineBoxModelEditor/css/main.css","9d434c5dfbd52c63a341e2e0d68ffef3"],["extensions/default/InlineBoxModelEditor/main.js","79d16c51aba7ae0b50a2b20317760474"],["extensions/default/InlineColorEditor/css/main.css","de36050667ed788a3bcf877e569f5594"],["extensions/default/InlineColorEditor/img/color_thumb_back.png","c218f22328b28fe4c363f04280541357"],["extensions/default/InlineColorEditor/img/color_thumb_back@2x.png","f88c501d26bcb0736e948d6e5579af7a"],["extensions/default/InlineColorEditor/img/color_thumb_back_dark.png","9d4da1d02e599939de5e7ff7a2a563ac"],["extensions/default/InlineColorEditor/img/color_thumb_back_dark@2x.png","cb37f97b86de0704f38d3089e4f1ddb5"],["extensions/default/InlineColorEditor/img/grabber_color-slider.png","fcd204ef0fd58e12079e7367be00cfbb"],["extensions/default/InlineColorEditor/img/grabber_color-slider@2x.png","a5e0e40f2c89b513e2ba7675d397bacd"],["extensions/default/InlineColorEditor/img/grabber_color-well.png","3f89adecdec66fe96aed768285f47a5a"],["extensions/default/InlineColorEditor/img/grabber_color-well@2x.png","bce3467ebb86d312c03ff096d5fe49c1"],["extensions/default/InlineColorEditor/img/grabber_gradient.png","dbeb2603761829ca9c745205152a20ae"],["extensions/default/InlineColorEditor/img/grabber_gradient@2x.png","8a545fcb57bbc831e3c3bf1617bf8240"],["extensions/default/InlineColorEditor/main.js","41c98eb578878dc6a2e603a823088642"],["extensions/default/JavaScriptQuickEdit/main.js","6a6ba325c6973bae0c62e38682c82f63"],["extensions/default/QuickView/QuickView.css","3792a64621e55497b1b51036e5dfbd8b"],["extensions/default/QuickView/main.js","6a15f147f832fb5daae744e23e0adf02"],["extensions/default/QuickView/preview-bg-dark.svg","1b9c07585f7ba7090d5c6088ce88dacb"],["extensions/default/QuickView/preview-bg.svg","8f15d88f934a344277b149bb3ccb0446"],["extensions/default/UploadFiles/images/upload-cloud-green.svg","73733f0487494d74b3a95124978e9155"],["extensions/default/UploadFiles/images/upload-cloud.svg","59da934584bbe3454e44e2a790851893"],["extensions/default/UploadFiles/main.js","65908ff79f3641a58f25e3682b5213e1"],["extensions/default/UploadFiles/styles.css","75fae053347985be39ab63215b4d4e2b"],["extensions/default/brackets-paste-and-indent/main.js","ee2e5c597405103f224f5125104b1e54"],["extensions/default/brackets-show-whitespace/main.js","c867f78570c5b82aeb16e2f1a33b9146"],["extensions/default/brackets-show-whitespace/styles/main.css","4f68f4eda0794d339eb58441e2f15bc0"],["extensions/default/bramble-move-file/images/folder-icon-black.svg","162961414b5922f6889220223ddf7a85"],["extensions/default/bramble-move-file/images/folder-icon-white.svg","1852ac44aa32f55f4c337dd3e68dd079"],["extensions/default/bramble-move-file/main.js","f654053d2174937bdf1cdf63fa68dd38"],["extensions/default/bramble-move-file/styles/style.css","86a7fe56701d3c33a60bb96ff7e98edf"],["extensions/default/bramble/images/arrow-down-dark.svg","70475ebacbb0a881877223068618d9f9"],["extensions/default/bramble/images/arrow-down-light.svg","03c671e8b200812b97cb96eebbd62c95"],["extensions/default/bramble/images/console-icon-dark.svg","b1efc02f84da2a2bc49ed6592daecee9"],["extensions/default/bramble/images/console-icon-light.svg","4dfb7496a73f879bc5aa47951daf7d55"],["extensions/default/bramble/images/folder-arrow.svg","912e9d0a74eb661bf65039f3c418c43c"],["extensions/default/bramble/images/menu-icons/download-dark.svg","08cf235662ab6ea700f16b0e96187c5d"],["extensions/default/bramble/images/menu-icons/download-white.svg","f3450686d175e841f9bb8b157b0ed9a7"],["extensions/default/bramble/images/menu-icons/file-dark.svg","90a564d73b85299500e85abe708cfbcc"],["extensions/default/bramble/images/menu-icons/file-white.svg","264ccf940d1ed650dac1dbb85985e39f"],["extensions/default/bramble/images/menu-icons/folder-icon-dark.svg","3635f79b95c8483b08db20eedb53a3be"],["extensions/default/bramble/images/menu-icons/folder-icon-white.svg","e2cf6e2108083552f67e0246bb2caaf9"],["extensions/default/bramble/images/menu-icons/move-file-black.svg","1a27567d0c8972e5a5284962998e9afc"],["extensions/default/bramble/images/menu-icons/move-file-light.svg","e2acff92690d6dccc4162e8eae373f46"],["extensions/default/bramble/images/menu-icons/pencil-dark.svg","6e901d1abab2ebc9cec3f28a2cec0082"],["extensions/default/bramble/images/menu-icons/pencil-white.svg","c49ae6a136797b535b362586dd4a9c73"],["extensions/default/bramble/images/menu-icons/trashcan-dark.svg","6bcddba59b42a9ca7bfea8528ab18c36"],["extensions/default/bramble/images/menu-icons/trashcan-white.svg","9aef2e06f1a65fd483aa26f5946aca3c"],["extensions/default/bramble/main.js","2027b74232ddda1988a653e6f21c9076"],["extensions/default/bramble/stylesheets/consoleTheme.css","ec40f201e57d30010c3a958288d0e36d"],["extensions/default/bramble/stylesheets/darkTheme.css","5d4590957d434774b93e08186ac8aa3d"],["extensions/default/bramble/stylesheets/lightTheme.css","46c3784f3062ea55000cccf30ca4a866"],["extensions/default/bramble/stylesheets/style.css","2738a108efa0403de99ca09916a48784"],["index.html","a52ec241565477c31456dce65ff6583c"],["index.js","ce76ba4ce6491b1f3ece9d6dd9ee2ca2"],["main.js","efa0dcc20df5b786b4aece95bd975648"],["styles/brackets.min.css","dc55f448c5ddf056a4d0ba8788e01968"],["styles/images/brackets_icon.svg","4000ec10cf58a8821f325edcfdeb3abe"],["styles/images/close-icon-dark.svg","6c0573b4cb3d73d501783990027b1447"],["styles/images/close-icon-light.svg","04deaf4d5801db2ef307272ada0969cf"],["styles/images/edit-icon.svg","f6108c5f3739e98f911c8e48cc825352"],["styles/images/extension-manager-installed.svg","d975590fce4b45400e748d2ca142a6f7"],["styles/images/extension-manager-registry.svg","a8d9dce2ca433abdece6eb35827ca214"],["styles/images/extension-manager-sprite.svg","425a903a1ec9808d782b1d7106e27cc3"],["styles/images/find-replace-sprites-dark.svg","c5077e7745f55f4a38904dcef3075650"],["styles/images/find-replace-sprites.svg","1b53f05b3ad744664044da6724dc8ac3"],["styles/images/flip-view-icons-dark.svg","0ef29e8f9b102a9544ee0c2a775ff0c5"],["styles/images/flip-view-icons-hover.svg","e7612727708c5718e92de30d70312fb8"],["styles/images/flip-view-icons.svg","f412b110aa0fe1c0bb677bb386dc7894"],["styles/images/horiz-thumb-fw-outline.png","2c6d466a01bb7466d26f9da914348235"],["styles/images/horizontal-dash.svg","ec9b351239e7fcd66d9ab080dc845ce0"],["styles/images/icons/audio.svg","d987f77d450481cc736e3aaa88545ad1"],["styles/images/icons/binary.svg","351fee711cfb942e6adccd7f6a4708cf"],["styles/images/icons/css.svg","65ebc86ec5fd445d1521b3642433dbcb"],["styles/images/icons/default.svg","34633eb03ecbbd44b4be9e4cea8f74a8"],["styles/images/icons/font.svg","a0fb9f7ef118b99571664c148d536316"],["styles/images/icons/html.svg","fa5f6f11edd32b68f13217cab3ceb21e"],["styles/images/icons/image.svg","22cadbab866cd6ca6f98990f93421596"],["styles/images/icons/js.svg","dcf8429ccc629c1f0929ed67806b44dc"],["styles/images/icons/lightning.svg","f10d44fea44d1024cc47c1a6dfb10203"],["styles/images/icons/pdf.svg","93561ef45ab3d4128e2a5c1513086fa0"],["styles/images/icons/video.svg","44dd726ea1b5a5408d4e68d17da742f6"],["styles/images/jsTreeSprites-dark.svg","2c6943fee9923d522cab07c5931bbe1b"],["styles/images/jsTreeSprites.svg","9a3076082d39f4eb572204f5a21660ac"],["styles/images/live_development_sprites.svg","7cf679087c4b17d428968acba29c8852"],["styles/images/no_content_bg.svg","4026e28e76aed932db6968e101f6af2b"],["styles/images/no_content_bg_dark.svg","9f0bfa9b55db66ff7bd82e9a18706d16"],["styles/images/preview-bg-dark.svg","1b9c07585f7ba7090d5c6088ce88dacb"],["styles/images/preview-bg.svg","8f15d88f934a344277b149bb3ccb0446"],["styles/images/scrollbar-mac-bg.png","213772f66e9973fd26e79740eecb10a2"],["styles/images/scrollbar-mac-corner.png","494adb512e89b81fc461c77454192657"],["styles/images/select-triangles.svg","4018853cdec54377ae579f576705d2c4"],["styles/images/split-view-icons-dark.svg","37d8e7f3cd13de70538128276b38792c"],["styles/images/split-view-icons.svg","eea0096714293f6a6eed2c7113082310"],["styles/images/themes-icon.svg","50f4c75a5b8180c177e21e6e94859cef"],["styles/images/thimble-icon.svg","11ab3202d9c3a189d0a22be68b65aa1d"],["styles/images/throbber.gif","7b9776076d5fceef4993b55c9383dedd"],["styles/images/topcoat-error-15.svg","30ba0875fc0c3396626245f994213e19"],["styles/images/topcoat-inactive-15.svg","0c20e70d7ea0c96b99114cfcb1e3d3ad"],["styles/images/topcoat-okay-15.svg","fb4443c2468358216a46f6018781a36c"],["styles/images/topcoat-search-20.svg","2a7f9d27b4d3b0c442190267f22bd85c"],["styles/images/topcoat-settings-13.svg","bab3a2c82c8db79b8f17a2a9e25c312f"],["styles/images/topcoat-warning-15.svg","7eb148a81137271ec8b6295dc058079a"],["styles/images/updateSprites.svg","63959d5a5be4d69734efd4ef78ae56f4"],["styles/images/update_large_icon.svg","7b105fb46b9a22a618799af5c79c8ab9"],["styles/images/vertical-dash.svg","897f9d47eefbbfc3f0df32a4e7c76e46"],["styles/images/vertical-thumb-fw-outline.png","1d4ffb4111e9cf128608c219684aebfb"],["thirdparty/bitjs/bitjs-untar.min.js","56c6c88a8e6e7bc9c40ad97fdf885996"],["thirdparty/github-markdown.css","b7dc5a9f0f5ab716725dd6167849f453"],["thirdparty/i18n/i18n.js","a5f32aaaf366150a3c737368b135aecc"],["thirdparty/require.min.js","74e9f8d683669676322500c3930f1d79"],["thirdparty/text/text.js","baf84a1655ddd7352095eec6c5aa4099"],["thirdparty/thirdparty.min.js","b421614e9041b8a0a3424f7b819f8249"]];
var cacheName = 'sw-precache-v3-bramble-' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/./];



var addDirectoryIndex = function (originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function (originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function (originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function (whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function (originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});


// *** Start of auto-included sw-toolbox code. ***
/* 
 Copyright 2016 Google Inc. All Rights Reserved.

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

     http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
*/!function(e){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=e();else if("function"==typeof define&&define.amd)define([],e);else{var t;t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this,t.toolbox=e()}}(function(){return function e(t,n,r){function o(c,s){if(!n[c]){if(!t[c]){var a="function"==typeof require&&require;if(!s&&a)return a(c,!0);if(i)return i(c,!0);var u=new Error("Cannot find module '"+c+"'");throw u.code="MODULE_NOT_FOUND",u}var f=n[c]={exports:{}};t[c][0].call(f.exports,function(e){var n=t[c][1][e];return o(n?n:e)},f,f.exports,e,t,n,r)}return n[c].exports}for(var i="function"==typeof require&&require,c=0;c<r.length;c++)o(r[c]);return o}({1:[function(e,t,n){"use strict";function r(e,t){t=t||{};var n=t.debug||m.debug;n&&console.log("[sw-toolbox] "+e)}function o(e){var t;return e&&e.cache&&(t=e.cache.name),t=t||m.cache.name,caches.open(t)}function i(e,t){t=t||{};var n=t.successResponses||m.successResponses;return fetch(e.clone()).then(function(r){return"GET"===e.method&&n.test(r.status)&&o(t).then(function(n){n.put(e,r).then(function(){var r=t.cache||m.cache;(r.maxEntries||r.maxAgeSeconds)&&r.name&&c(e,n,r)})}),r.clone()})}function c(e,t,n){var r=s.bind(null,e,t,n);d=d?d.then(r):r()}function s(e,t,n){var o=e.url,i=n.maxAgeSeconds,c=n.maxEntries,s=n.name,a=Date.now();return r("Updating LRU order for "+o+". Max entries is "+c+", max age is "+i),g.getDb(s).then(function(e){return g.setTimestampForUrl(e,o,a)}).then(function(e){return g.expireEntries(e,c,i,a)}).then(function(e){r("Successfully updated IDB.");var n=e.map(function(e){return t.delete(e)});return Promise.all(n).then(function(){r("Done with cache cleanup.")})}).catch(function(e){r(e)})}function a(e,t,n){return r("Renaming cache: ["+e+"] to ["+t+"]",n),caches.delete(t).then(function(){return Promise.all([caches.open(e),caches.open(t)]).then(function(t){var n=t[0],r=t[1];return n.keys().then(function(e){return Promise.all(e.map(function(e){return n.match(e).then(function(t){return r.put(e,t)})}))}).then(function(){return caches.delete(e)})})})}function u(e,t){return o(t).then(function(t){return t.add(e)})}function f(e,t){return o(t).then(function(t){return t.delete(e)})}function h(e){e instanceof Promise||p(e),m.preCacheItems=m.preCacheItems.concat(e)}function p(e){var t=Array.isArray(e);if(t&&e.forEach(function(e){"string"==typeof e||e instanceof Request||(t=!1)}),!t)throw new TypeError("The precache method expects either an array of strings and/or Requests or a Promise that resolves to an array of strings and/or Requests.");return e}function l(e,t,n){if(!e)return!1;if(t){var r=e.headers.get("date");if(r){var o=new Date(r);if(o.getTime()+1e3*t<n)return!1}}return!0}var d,m=e("./options"),g=e("./idb-cache-expiration");t.exports={debug:r,fetchAndCache:i,openCache:o,renameCache:a,cache:u,uncache:f,precache:h,validatePrecacheInput:p,isResponseFresh:l}},{"./idb-cache-expiration":2,"./options":4}],2:[function(e,t,n){"use strict";function r(e){return new Promise(function(t,n){var r=indexedDB.open(u+e,f);r.onupgradeneeded=function(){var e=r.result.createObjectStore(h,{keyPath:p});e.createIndex(l,l,{unique:!1})},r.onsuccess=function(){t(r.result)},r.onerror=function(){n(r.error)}})}function o(e){return e in d||(d[e]=r(e)),d[e]}function i(e,t,n){return new Promise(function(r,o){var i=e.transaction(h,"readwrite"),c=i.objectStore(h);c.put({url:t,timestamp:n}),i.oncomplete=function(){r(e)},i.onabort=function(){o(i.error)}})}function c(e,t,n){return t?new Promise(function(r,o){var i=1e3*t,c=[],s=e.transaction(h,"readwrite"),a=s.objectStore(h),u=a.index(l);u.openCursor().onsuccess=function(e){var t=e.target.result;if(t&&n-i>t.value[l]){var r=t.value[p];c.push(r),a.delete(r),t.continue()}},s.oncomplete=function(){r(c)},s.onabort=o}):Promise.resolve([])}function s(e,t){return t?new Promise(function(n,r){var o=[],i=e.transaction(h,"readwrite"),c=i.objectStore(h),s=c.index(l),a=s.count();s.count().onsuccess=function(){var e=a.result;e>t&&(s.openCursor().onsuccess=function(n){var r=n.target.result;if(r){var i=r.value[p];o.push(i),c.delete(i),e-o.length>t&&r.continue()}})},i.oncomplete=function(){n(o)},i.onabort=r}):Promise.resolve([])}function a(e,t,n,r){return c(e,n,r).then(function(n){return s(e,t).then(function(e){return n.concat(e)})})}var u="sw-toolbox-",f=1,h="store",p="url",l="timestamp",d={};t.exports={getDb:o,setTimestampForUrl:i,expireEntries:a}},{}],3:[function(e,t,n){"use strict";function r(e){var t=a.match(e.request);t?e.respondWith(t(e.request)):a.default&&"GET"===e.request.method&&0===e.request.url.indexOf("http")&&e.respondWith(a.default(e.request))}function o(e){s.debug("activate event fired");var t=u.cache.name+"$$$inactive$$$";e.waitUntil(s.renameCache(t,u.cache.name))}function i(e){return e.reduce(function(e,t){return e.concat(t)},[])}function c(e){var t=u.cache.name+"$$$inactive$$$";s.debug("install event fired"),s.debug("creating cache ["+t+"]"),e.waitUntil(s.openCache({cache:{name:t}}).then(function(e){return Promise.all(u.preCacheItems).then(i).then(s.validatePrecacheInput).then(function(t){return s.debug("preCache list: "+(t.join(", ")||"(none)")),e.addAll(t)})}))}e("serviceworker-cache-polyfill");var s=e("./helpers"),a=e("./router"),u=e("./options");t.exports={fetchListener:r,activateListener:o,installListener:c}},{"./helpers":1,"./options":4,"./router":6,"serviceworker-cache-polyfill":16}],4:[function(e,t,n){"use strict";var r;r=self.registration?self.registration.scope:self.scope||new URL("./",self.location).href,t.exports={cache:{name:"$$$toolbox-cache$$$"+r+"$$$",maxAgeSeconds:null,maxEntries:null},debug:!1,networkTimeoutSeconds:null,preCacheItems:[],successResponses:/^0|([123]\d\d)|(40[14567])|410$/}},{}],5:[function(e,t,n){"use strict";var r=new URL("./",self.location),o=r.pathname,i=e("path-to-regexp"),c=function(e,t,n,r){t instanceof RegExp?this.fullUrlRegExp=t:(0!==t.indexOf("/")&&(t=o+t),this.keys=[],this.regexp=i(t,this.keys)),this.method=e,this.options=r,this.handler=n};c.prototype.makeHandler=function(e){var t;if(this.regexp){var n=this.regexp.exec(e);t={},this.keys.forEach(function(e,r){t[e.name]=n[r+1]})}return function(e){return this.handler(e,t,this.options)}.bind(this)},t.exports=c},{"path-to-regexp":15}],6:[function(e,t,n){"use strict";function r(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var o=e("./route"),i=e("./helpers"),c=function(e,t){for(var n=e.entries(),r=n.next(),o=[];!r.done;){var i=new RegExp(r.value[0]);i.test(t)&&o.push(r.value[1]),r=n.next()}return o},s=function(){this.routes=new Map,this.routes.set(RegExp,new Map),this.default=null};["get","post","put","delete","head","any"].forEach(function(e){s.prototype[e]=function(t,n,r){return this.add(e,t,n,r)}}),s.prototype.add=function(e,t,n,c){c=c||{};var s;t instanceof RegExp?s=RegExp:(s=c.origin||self.location.origin,s=s instanceof RegExp?s.source:r(s)),e=e.toLowerCase();var a=new o(e,t,n,c);this.routes.has(s)||this.routes.set(s,new Map);var u=this.routes.get(s);u.has(e)||u.set(e,new Map);var f=u.get(e),h=a.regexp||a.fullUrlRegExp;f.has(h.source)&&i.debug('"'+t+'" resolves to same regex as existing route.'),f.set(h.source,a)},s.prototype.matchMethod=function(e,t){var n=new URL(t),r=n.origin,o=n.pathname;return this._match(e,c(this.routes,r),o)||this._match(e,[this.routes.get(RegExp)],t)},s.prototype._match=function(e,t,n){if(0===t.length)return null;for(var r=0;r<t.length;r++){var o=t[r],i=o&&o.get(e.toLowerCase());if(i){var s=c(i,n);if(s.length>0)return s[0].makeHandler(n)}}return null},s.prototype.match=function(e){return this.matchMethod(e.method,e.url)||this.matchMethod("any",e.url)},t.exports=new s},{"./helpers":1,"./route":5}],7:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache first ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(t){var r=n.cache||o.cache,c=Date.now();return i.isResponseFresh(t,r.maxAgeSeconds,c)?t:i.fetchAndCache(e,n)})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],8:[function(e,t,n){"use strict";function r(e,t,n){return n=n||{},i.debug("Strategy: cache only ["+e.url+"]",n),i.openCache(n).then(function(t){return t.match(e).then(function(e){var t=n.cache||o.cache,r=Date.now();if(i.isResponseFresh(e,t.maxAgeSeconds,r))return e})})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],9:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: fastest ["+e.url+"]",n),new Promise(function(r,c){var s=!1,a=[],u=function(e){a.push(e.toString()),s?c(new Error('Both cache and network failed: "'+a.join('", "')+'"')):s=!0},f=function(e){e instanceof Response?r(e):u("No result returned")};o.fetchAndCache(e.clone(),n).then(f,u),i(e,t,n).then(f,u)})}var o=e("../helpers"),i=e("./cacheOnly");t.exports=r},{"../helpers":1,"./cacheOnly":8}],10:[function(e,t,n){t.exports={networkOnly:e("./networkOnly"),networkFirst:e("./networkFirst"),cacheOnly:e("./cacheOnly"),cacheFirst:e("./cacheFirst"),fastest:e("./fastest")}},{"./cacheFirst":7,"./cacheOnly":8,"./fastest":9,"./networkFirst":11,"./networkOnly":12}],11:[function(e,t,n){"use strict";function r(e,t,n){n=n||{};var r=n.successResponses||o.successResponses,c=n.networkTimeoutSeconds||o.networkTimeoutSeconds;return i.debug("Strategy: network first ["+e.url+"]",n),i.openCache(n).then(function(t){var s,a,u=[];if(c){var f=new Promise(function(r){s=setTimeout(function(){t.match(e).then(function(e){var t=n.cache||o.cache,c=Date.now(),s=t.maxAgeSeconds;i.isResponseFresh(e,s,c)&&r(e)})},1e3*c)});u.push(f)}var h=i.fetchAndCache(e,n).then(function(e){if(s&&clearTimeout(s),r.test(e.status))return e;throw i.debug("Response was an HTTP error: "+e.statusText,n),a=e,new Error("Bad response")}).catch(function(r){return i.debug("Network or response error, fallback to cache ["+e.url+"]",n),t.match(e).then(function(e){if(e)return e;if(a)return a;throw r})});return u.push(h),Promise.race(u)})}var o=e("../options"),i=e("../helpers");t.exports=r},{"../helpers":1,"../options":4}],12:[function(e,t,n){"use strict";function r(e,t,n){return o.debug("Strategy: network only ["+e.url+"]",n),fetch(e)}var o=e("../helpers");t.exports=r},{"../helpers":1}],13:[function(e,t,n){"use strict";var r=e("./options"),o=e("./router"),i=e("./helpers"),c=e("./strategies"),s=e("./listeners");i.debug("Service Worker Toolbox is loading"),self.addEventListener("install",s.installListener),self.addEventListener("activate",s.activateListener),self.addEventListener("fetch",s.fetchListener),t.exports={networkOnly:c.networkOnly,networkFirst:c.networkFirst,cacheOnly:c.cacheOnly,cacheFirst:c.cacheFirst,fastest:c.fastest,router:o,options:r,cache:i.cache,uncache:i.uncache,precache:i.precache}},{"./helpers":1,"./listeners":3,"./options":4,"./router":6,"./strategies":10}],14:[function(e,t,n){t.exports=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)}},{}],15:[function(e,t,n){function r(e,t){for(var n,r=[],o=0,i=0,c="",s=t&&t.delimiter||"/";null!=(n=x.exec(e));){var f=n[0],h=n[1],p=n.index;if(c+=e.slice(i,p),i=p+f.length,h)c+=h[1];else{var l=e[i],d=n[2],m=n[3],g=n[4],v=n[5],w=n[6],y=n[7];c&&(r.push(c),c="");var b=null!=d&&null!=l&&l!==d,E="+"===w||"*"===w,R="?"===w||"*"===w,k=n[2]||s,$=g||v;r.push({name:m||o++,prefix:d||"",delimiter:k,optional:R,repeat:E,partial:b,asterisk:!!y,pattern:$?u($):y?".*":"[^"+a(k)+"]+?"})}}return i<e.length&&(c+=e.substr(i)),c&&r.push(c),r}function o(e,t){return s(r(e,t))}function i(e){return encodeURI(e).replace(/[\/?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function c(e){return encodeURI(e).replace(/[?#]/g,function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()})}function s(e){for(var t=new Array(e.length),n=0;n<e.length;n++)"object"==typeof e[n]&&(t[n]=new RegExp("^(?:"+e[n].pattern+")$"));return function(n,r){for(var o="",s=n||{},a=r||{},u=a.pretty?i:encodeURIComponent,f=0;f<e.length;f++){var h=e[f];if("string"!=typeof h){var p,l=s[h.name];if(null==l){if(h.optional){h.partial&&(o+=h.prefix);continue}throw new TypeError('Expected "'+h.name+'" to be defined')}if(v(l)){if(!h.repeat)throw new TypeError('Expected "'+h.name+'" to not repeat, but received `'+JSON.stringify(l)+"`");if(0===l.length){if(h.optional)continue;throw new TypeError('Expected "'+h.name+'" to not be empty')}for(var d=0;d<l.length;d++){if(p=u(l[d]),!t[f].test(p))throw new TypeError('Expected all "'+h.name+'" to match "'+h.pattern+'", but received `'+JSON.stringify(p)+"`");o+=(0===d?h.prefix:h.delimiter)+p}}else{if(p=h.asterisk?c(l):u(l),!t[f].test(p))throw new TypeError('Expected "'+h.name+'" to match "'+h.pattern+'", but received "'+p+'"');o+=h.prefix+p}}else o+=h}return o}}function a(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function u(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function f(e,t){return e.keys=t,e}function h(e){return e.sensitive?"":"i"}function p(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var r=0;r<n.length;r++)t.push({name:r,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return f(e,t)}function l(e,t,n){for(var r=[],o=0;o<e.length;o++)r.push(g(e[o],t,n).source);var i=new RegExp("(?:"+r.join("|")+")",h(n));return f(i,t)}function d(e,t,n){return m(r(e,n),t,n)}function m(e,t,n){v(t)||(n=t||n,t=[]),n=n||{};for(var r=n.strict,o=n.end!==!1,i="",c=0;c<e.length;c++){var s=e[c];if("string"==typeof s)i+=a(s);else{var u=a(s.prefix),p="(?:"+s.pattern+")";t.push(s),s.repeat&&(p+="(?:"+u+p+")*"),p=s.optional?s.partial?u+"("+p+")?":"(?:"+u+"("+p+"))?":u+"("+p+")",i+=p}}var l=a(n.delimiter||"/"),d=i.slice(-l.length)===l;return r||(i=(d?i.slice(0,-l.length):i)+"(?:"+l+"(?=$))?"),i+=o?"$":r&&d?"":"(?="+l+"|$)",f(new RegExp("^"+i,h(n)),t)}function g(e,t,n){return v(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?p(e,t):v(e)?l(e,t,n):d(e,t,n)}var v=e("isarray");t.exports=g,t.exports.parse=r,t.exports.compile=o,t.exports.tokensToFunction=s,t.exports.tokensToRegExp=m;var x=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g")},{isarray:14}],16:[function(e,t,n){!function(){var e=Cache.prototype.addAll,t=navigator.userAgent.match(/(Firefox|Chrome)\/(\d+\.)/);if(t)var n=t[1],r=parseInt(t[2]);e&&(!t||"Firefox"===n&&r>=46||"Chrome"===n&&r>=50)||(Cache.prototype.addAll=function(e){function t(e){this.name="NetworkError",this.code=19,this.message=e}var n=this;return t.prototype=Object.create(Error.prototype),Promise.resolve().then(function(){if(arguments.length<1)throw new TypeError;return e=e.map(function(e){return e instanceof Request?e:String(e)}),Promise.all(e.map(function(e){"string"==typeof e&&(e=new Request(e));var n=new URL(e.url).protocol;if("http:"!==n&&"https:"!==n)throw new t("Invalid scheme");return fetch(e.clone())}))}).then(function(r){if(r.some(function(e){return!e.ok}))throw new t("Incorrect response status");return Promise.all(r.map(function(t,r){return n.put(e[r],t)}))}).then(function(){})},Cache.prototype.add=function(e){return this.addAll([e])})}()},{}]},{},[13])(13)});


// *** End of auto-included sw-toolbox code. ***



// Runtime cache configuration, using the sw-toolbox library.

toolbox.router.get(/^https:\/\/fonts\.googleapis\.com\/css/, toolbox.fastest, {});
toolbox.router.get(/\/dist\/nls\//, toolbox.fastest, {});
toolbox.router.get(/\/dist\/extensions\/extra\//, toolbox.fastest, {});




importScripts("bramble-live-dev-cache-sw.js");

