/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./src/app.js","vendor"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/app.js":
/*!********************!*\
  !*** ./src/app.js ***!
  \********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _helpers_hlsPlayer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers/hlsPlayer.js */ \"./src/helpers/hlsPlayer.js\");\n/* harmony import */ var _helpers_xml__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./helpers/xml */ \"./src/helpers/xml.js\");\n/* harmony import */ var _helpers_proxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./helpers/proxy */ \"./src/helpers/proxy.js\");\n\r\n\r\n\r\n\r\n\r\n// export default buildUI();\r\n\r\n// make it available\r\nwindow.tv = {\r\n    buildUI,\r\n    autostartByQueryString,\r\n    config(path, value){\r\n        let ref    = window;\r\n        let dotted = path.split('.')\r\n        for (let i=0; i < dotted.length; i++){\r\n            let v  = dotted[i];\r\n            ref[v] = ref[v] || {};\r\n            i === dotted.length - 1\r\n                ? ref[v] = value\r\n                : ref    = ref[v]\r\n            ;\r\n        }\r\n    }\r\n};\r\n\r\nfunction buildUI( streams )\r\n{\r\n    console.log('buildUI got called');\r\n\r\n    // TODO check playlist open option\r\n    // https://support.google.com/youtube/answer/171780?hl=de // iframe\r\n    // https://developers.google.com/youtube/player_parameters?hl=de // autoplay\r\n\r\n    updateClock(); // already exist in html\r\n    buildStreamSidebar(streams);\r\n    switchStream();\r\n    categoryEvents();\r\n    videoEvents();\r\n    showTogglePlaylistEvents();\r\n    rightClickToToggleSidebar();\r\n}\r\n\r\nfunction buildStreamSidebar(streams)\r\n{\r\n    Object.keys(streams).forEach(function(k){\r\n        const stream = streams[k];\r\n\r\n        const li = document.createElement('li');\r\n        if(stream === null) {\r\n            li.innerHTML = '<hr>';\r\n        }else{\r\n            li.setAttribute('data-id', k);\r\n\r\n            // if(stream.icon){\r\n                li.innerHTML = `\r\n                <div class=\"left\">\r\n                    <img class=\"tv-icon ${stream.iconClass || ''}\"\r\n                           src=\"${stream.icon || 'https://toppng.com/uploads/preview/lay-icon-play-icon-11563266312mklxafh8gy.png'}\"\r\n                     />\r\n                </div>\r\n                <span class=\"title\">${stream.title}</span>\r\n                `;\r\n            // }else{\r\n            //     li.innerText = stream.title;\r\n            // }\r\n        }\r\n\r\n        let   ul     = null;\r\n        const ulRoot = `div.ul-container > ul`;\r\n        if(stream.list)\r\n        {\r\n            // div.ul-container\r\n            //      > ul > li.category[name=\"sub1\"]\r\n            // div.ul-container\r\n            //      > ul > li.category[name=\"sub1\"]\r\n            //      > ul > li.category[name=\"sub2\"]\r\n\r\n            let\r\n                cats    = stream.list.split('.'),\r\n                catsSel = cats.map(v => `ul > li.category[name=\"${v}\"]`)\r\n            ;\r\n                cats.unshift('div.ul-container');   // add as first\r\n                catsSel.unshift('div.ul-container');// add as first\r\n            for(let i = 0; i < cats.length;i++)\r\n            {\r\n                // first to last\r\n                const curr = catsSel.slice(0, i+1).join(' '); // curr\r\n                // console.log('part', part)\r\n                if(document.querySelector(curr) === null) // cat not exists ?\r\n                {   // create\r\n\r\n                    // debugger;\r\n\r\n                    // find prev to attach\r\n                    const prev   = catsSel.slice(0,i).join(' '); // prev\r\n\r\n                    let li = document.createElement('li');\r\n                    li.setAttribute('class','category active');\r\n                    li.setAttribute('name', cats[i]);\r\n                    li.innerHTML = `\r\n                        <div><span class=\"title\">${tv.config.i18n[cats[i]] || cats[i]}</span></div>\r\n                        <ul></ul>\r\n                    `;\r\n                    const\r\n                        ulPrev = document.querySelector(prev + '> ul');\r\n                        ulPrev.appendChild(li)\r\n                }\r\n            }\r\n\r\n            const a = catsSel.join(' ');\r\n            ul =document.querySelector(a).querySelector('ul');\r\n        }else{\r\n            ul = document.querySelector(ulRoot);\r\n        }\r\n\r\n        ul.appendChild(li);\r\n    });\r\n}\r\n\r\nfunction switchStream()\r\n{\r\n    // events\r\n    document.querySelectorAll('ul li:not(.category)').forEach(\r\n        (dom, i) => dom.addEventListener('click', switchStreamCurr)\r\n    );\r\n\r\n    // click\r\n    function switchStreamCurr(event){\r\n        event.stopPropagation(); // no bubbling\r\n\r\n        let li = event.target;\r\n        while(li.tagName !== 'LI'){\r\n            li = li.parentElement;\r\n        }\r\n\r\n        document.querySelectorAll('li:not(.category)').forEach(removeStreamActive);\r\n        li.classList.add('active');\r\n\r\n        const stream = streams[li.getAttribute('data-id')];\r\n        document.querySelectorAll('iframe, video').forEach(dom => {\r\n            dom.setAttribute('src', '');\r\n            dom.style.display='none';\r\n        })\r\n\r\n        // tab-appearance\r\n        document.querySelector('head link[rel*=\"icon\"]').setAttribute('href',stream.icon);\r\n        document.querySelector('head title').innerText = stream.title;\r\n\r\n        // play\r\n        if(stream['iframe'])\r\n        {\r\n            _helpers_hlsPlayer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].stop();\r\n            stream.iframe.setAttribute('src', stream.url);\r\n            stream.iframe.style.display='block';\r\n        }else if(stream['video']){\r\n            _helpers_hlsPlayer_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"].play(stream.url)\r\n            stream.video.style.display='block';\r\n        }else{\r\n            throw new Error(\"no player found\");\r\n        }\r\n    }\r\n\r\n    function removeStreamActive(dom){\r\n        dom.classList.remove('active');\r\n    }\r\n}\r\n\r\nfunction categoryEvents()\r\n{\r\n    document.querySelectorAll('ul li.category').forEach(\r\n        (dom, i) => dom.addEventListener('click', function(event){\r\n            event.stopPropagation(); // no bubbling\r\n\r\n            let li = event.target;\r\n            while(li.tagName !== 'LI'){\r\n                li = li.parentElement;\r\n            }\r\n            li.classList.toggle('active');\r\n        })\r\n    );\r\n}\r\n\r\nfunction videoEvents()\r\n{\r\n    document.querySelectorAll('li:not(.category)[data-id]').forEach(\r\n        (dom, i) => {\r\n            dom.addEventListener('mouseleave', function(event){\r\n                playlistYoutubeShowToggle(false);\r\n\r\n                // mouse leave switch playlist to current playing\r\n                const playing = document.querySelector('li[data-id].active');\r\n                if(playing){\r\n                    playing.getAttribute('data-id');\r\n\r\n                    const streamId = playing.getAttribute('data-id');\r\n                    const url = streams[streamId]['url'];\r\n                    if(url.includes('www.youtube.com')) {\r\n                        if(streams[streamId]['playlist']){\r\n                            playlistYoutubeShow({\r\n                                items: streams[streamId]['playlist'],\r\n                                title: streams[streamId]['title'],\r\n                                isPlaying: true,\r\n                            });\r\n                            // showTogglePlaylist(false); // BUT hide\r\n                        }\r\n                    }\r\n                }\r\n            });\r\n            dom.addEventListener('mouseenter', function(event){\r\n                event.stopPropagation(); // no bubbling\r\n\r\n                let li = event.target;\r\n                while(li.tagName !== 'LI'){\r\n                    li = li.parentElement;\r\n                }\r\n                const streamId = li.getAttribute('data-id');\r\n                const url = streams[streamId]['url'];\r\n\r\n                if(url.includes('www.youtube.com'))\r\n                {\r\n                    playlistYoutube({streams, streamId, url, dom})\r\n                }else{\r\n                    // console.log('youtube url : no', url);\r\n                    // playlistYoutubeUpdate();\r\n                    playlistYoutubeShowToggle(false);\r\n                }\r\n            })\r\n        }\r\n    );\r\n}\r\n\r\nfunction showTogglePlaylistEvents()\r\n{\r\n    const dom = document.querySelector('div.show_right div.show-toggle');\r\n    dom.addEventListener('click', () => playlistYoutubeShowToggle(null));\r\n}\r\n\r\n// fullscreen\r\nfunction toggleFullscreen(){\r\n    const elem = document.getElementsByTagName(\"body\")[0];\r\n    const fullsceenEnabled =\r\n              !document.fullscreenElement &&\r\n              !document.mozFullScreenElement &&\r\n              !document.webkitFullscreenElement &&\r\n              !document.msFullscreenElement\r\n    ;\r\n\r\n    if (fullsceenEnabled){\r\n        if(elem.requestFullscreen){\r\n            elem.requestFullscreen();\r\n        } else if(elem.msRequestFullscreen){\r\n            elem.msRequestFullscreen();\r\n        } else if(elem.mozRequestFullScreen){\r\n            elem.mozRequestFullScreen();\r\n        } else if(elem.webkitRequestFullscreen){\r\n            elem.webkitRequestFullscreen(elem.ALLOW_KEYBOARD_INPUT);\r\n        }\r\n    } else {\r\n        if(document.exitFullscreen){\r\n            document.exitFullscreen();\r\n        } else if(document.msExitFullscreen){\r\n            document.msExitFullscreen();\r\n        } else if(document.mozCancelFullScreen){\r\n            document.mozCancelFullScreen();\r\n        } else if(document.webkitExitFullscreen){\r\n            document.webkitExitFullscreen();\r\n        }\r\n    }\r\n\r\n    if(fullsceenEnabled){\r\n        document.querySelectorAll('iframe').forEach(function(dom){\r\n            dom.classList.add('fullscreen');\r\n        });\r\n    }else{\r\n        document.querySelectorAll('iframe').forEach(function(dom){\r\n            dom.classList.remove('fullscreen');\r\n        });\r\n    }\r\n}\r\n\r\nfunction updateClock(selector = '#clock'){\r\n    console.log('updateClock got called');\r\n    const clock = document.querySelector(selector);\r\n    const fnRefreshTime = function(){\r\n        const\r\n            now = new Date(),\r\n            h = now.getHours(),\r\n            m = now.getMinutes()\r\n        ;\r\n        clock.innerText = h+':'+(m<10 ? '0'+m : m);\r\n    };\r\n\r\n    fnRefreshTime();\r\n    setInterval(fnRefreshTime, 60000)\r\n}\r\n\r\nfunction autostartByQueryString()\r\n{\r\n    // autostart\r\n    const queryString = new URLSearchParams(window.location.search)\r\n    let autostartId =\r\n           queryString.get('autostart')         // ?autostart=tv-config-id\r\n        || window.location.hash.substr(1)   //  #tv-config-id\r\n        ;\r\n    autostartId = typeof autostartId === 'string' ? decodeURI(autostartId) : autostartId;\r\n    let autostart = document.querySelector(`li[data-id=\"${autostartId}\"]`);\r\n    if(autostart){\r\n        autostart.click();\r\n    }\r\n}\r\n\r\n/**\r\n * TODO not working above iframe\r\n */\r\nfunction rightClickToToggleSidebar()\r\n{\r\n    document.addEventListener('contextmenu', function(e) {\r\n        e.preventDefault();\r\n\r\n        document.querySelector('div.ul-container > ul').classList.toggle('active');\r\n\r\n        return false;\r\n    }, false);\r\n}\r\n\r\nfunction playlistYoutube({streams, streamId, url, dom})\r\n{\r\n    // console.log('youtube url : yes');\r\n    if(streams[streamId]['playlist']){\r\n        // console.log('playlist exists : yes', {\r\n        //     title : streams[streamId]['title'],\r\n        //     url,\r\n        //     playlist : streams[streamId]['playlist']\r\n        // } );\r\n        playlistYoutubeShow({\r\n            items: streams[streamId]['playlist'],\r\n            title: streams[streamId]['title'],\r\n            isPlaying: dom.classList.contains('active'),\r\n        });\r\n        playlistYoutubeShowToggle(true);\r\n    }else{\r\n        playlistYoutubeFetch({streams, streamId, url, })\r\n    }\r\n\r\n}\r\n\r\nfunction playlistYoutubeShow({items = [], title = '', isPlaying = false} = {})\r\n{\r\n    const show = document.querySelector('div.playlist');\r\n    if(items.length === 0){\r\n        show.innerHTML = '';\r\n        return;\r\n    }\r\n    show.innerHTML =\r\n        `<table class=\"playlist theme-white-on-transparent\" id=\"playlist\">\r\n                <tr class=\"head\">\r\n                    <td colspan=\"2\">\r\n                        <span class=\"small-title\">${title}</span>\r\n                    </td>\r\n                    <td colspan=\"1\">\r\n                        <input type=\"button\" value=\"kurz\" onclick=\"document.querySelector('#playlist').classList.toggle('small');\" />\r\n                    </td>\r\n                </tr>\r\n                <tr class=\"head-sub\">\r\n                    <td>\r\n                        <span class=\"small-hide\">Uhrzeit</span>\r\n                    </td>\r\n                    <td>\r\n                        <!-- cant use small-hide in td itself, cause not display, applies css to 1th cell, instead 1th cell -->\r\n                        <span class=\"small-hide\">Datum</span>\r\n                    </td>\r\n                    <td>Titel</td>\r\n                </tr>\r\n            ` +items\r\n        .sort((a,b)=> // sorting everything, cause could use \"original\" order later (but not used right now)\r\n            // a.published.localeCompare(b.published)  // ascending\r\n            b.published.localeCompare(a.published)  // descending\r\n        )\r\n        .map(({\r\n                  // author : {name, uri}, // uri = channel\r\n                  // id,\r\n                  // link : { rel, href },\r\n                  'media:group' : {\r\n                      'media:thumbnail' : {\r\n                          url : img\r\n                      }\r\n                  },\r\n                  published,          // \"2020-07-02T12:09:17.000Z\"\r\n                  updated,\r\n                  title,              // \"subtitle of video\"\r\n                  url,                // https://www.youtube.com/watch?v=ID\r\n              },i,original) => `\r\n                <tr class=\"${isPlaying && i === 0 ? 'play' : ''}\">\r\n                    <td class=\"td-1\">${getDateReadable(published).clock}</td>\r\n                    <td class=\"td-2\">${getDateReadable(published).date}</td>\r\n                    <td class=\"td-3\" title=\"${title}\"><span class=\"title\">${title}</span></td>\r\n                </tr>\r\n            `\r\n        ).join('') + '</table>';\r\n\r\n    function getDateReadable(dateString){\r\n        // return dateString;\r\n\r\n        const date   = new Date(dateString);\r\n        return {\r\n            clock : [\r\n                date.getHours(),\r\n                date.getMinutes(),\r\n            ].map((v,i) => i===0 ? zero(v,'hide') : zero(v))\r\n                .join(':'),\r\n            date : [\r\n                date.getDate(),\r\n                date.getMonth()+1, // begins 0\r\n                (date.getFullYear()+'').slice(2,4)\r\n            ].map((v,i) => i===0 ? zero(v,'hide') : zero(v))\r\n                .concat([tv.i18n.weekday[ // \"push\" instead \"concat\" does NOT return array\r\n                    date.getDay() // weekday (0-6) : 0 = sunday, 6 = saturday\r\n                    ]])\r\n                .map((v,i) => {\r\n                    if(i === 0) return v;\r\n                    if(i === 1) return '.'+v;\r\n                    if(i === 2) return '<span class=\"small-hide\">.'+v+'</span>';\r\n                    if(i === 3) return '<span class=\"small-hide\">, '+v+'</span>';\r\n                    return v; // should not happen\r\n                })\r\n                .join('')\r\n\r\n        };\r\n\r\n        // console.log({\r\n        //     original : dateString,\r\n        //     day   : date.getDate(),\r\n        //     month : date.getMonth(),\r\n        //     year  : date.getFullYear(),\r\n        //     hour  : date.getHours(),\r\n        //     min   : date.getMinutes(),\r\n        //     result,\r\n        // });\r\n\r\n        function zero(number, useClass = ''){\r\n            return number < 10\r\n                ? '<span class=\"'+useClass+'\">0</span>'+number\r\n                : number;\r\n        }\r\n\r\n    }\r\n}\r\n\r\nfunction playlistYoutubeFetch({streams, streamId, url, dom}){\r\n    (async ()=> { // test\r\n\r\n        // == youtube\r\n        // videos by channel-id (youtube -> go to channel-main-page -> url contains .../channel/ID)\r\n        // https://www.youtube.com/feeds/videos.xml?channel_id=ID\r\n        // videos by playlist-id (youtube -> go to channel-main-page -> go to playlist or uploads -> contains ...&list=ID\r\n        // https://www.youtube.com/feeds/videos.xml?playlist_id=ID\r\n\r\n        // if(streamId !== 'gamestar')\r\n        // {\r\n        //     return;\r\n        // }\r\n\r\n        const channel = /list=(.+)/ig.exec(url)[1];\r\n        const {success, data : xml} = await _helpers_proxy__WEBPACK_IMPORTED_MODULE_2__[\"default\"].fetchByCors({\r\n            requestUrl : 'https://www.youtube.com/feeds/videos.xml?playlist_id=' + channel\r\n            // requestUrl : 'https://www.youtube.com/feeds/videos.xml?channel_id=' + channel\r\n        })\r\n        // console.log({\r\n        //     streamId   : streamId,\r\n        //     playlistId : 'https://www.youtube.com/feeds/videos.xml?playlist_id=' + channel,\r\n        //     channelId  : 'https://www.youtube.com/feeds/videos.xml?channel_id=' + channel,\r\n        //     channel  : streams[streamId],\r\n        //     xml      : xml\r\n        // });\r\n\r\n        try {\r\n            if(success){\r\n                const {feed : {entry = null} = {}} = _helpers_xml__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getJSON(xml);\r\n                if(entry){\r\n                    streams[streamId]['playlist'] = entry;\r\n\r\n                    // console.log(console.log('playlist exists : no -> fetched & saved', {\r\n                    //     title : streams[streamId]['title'],\r\n                    //     url,\r\n                    //     playlist : entry\r\n                    // }));\r\n                    playlistYoutubeShow({\r\n                        items: streams[streamId]['playlist'],\r\n                        title: streams[streamId]['title'],\r\n                        isPlaying: dom ? dom.classList.contains('active') : false,\r\n                    });\r\n                    playlistYoutubeShowToggle(true);\r\n                }\r\n            }\r\n        }catch(e){\r\n            debugger;\r\n        }\r\n    })();\r\n}\r\n\r\nfunction playlistYoutubeShowToggle(state = null)\r\n{\r\n    const dom = document.querySelector('div.show_right');\r\n    if(state === true){\r\n        console.log('show');\r\n        dom.classList.remove('hide')\r\n        return;\r\n    }\r\n    if(state === false){\r\n        console.log('hide');\r\n        dom.classList.add('hide');\r\n        return;\r\n    }\r\n    dom.classList.toggle('hide')\r\n}\r\n\n\n//# sourceURL=webpack:///./src/app.js?");

/***/ }),

/***/ "./src/helpers/hlsPlayer.js":
/*!**********************************!*\
  !*** ./src/helpers/hlsPlayer.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hls.js */ \"./node_modules/hls.js/dist/hls.js\");\n/* harmony import */ var hls_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hls_js__WEBPACK_IMPORTED_MODULE_0__);\n\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\r\n    stop,\r\n    play\r\n});\r\n\r\n/**\r\n * https://www.npmjs.com/package/hls.js\r\n *\r\n * @param url\r\n */\r\nfunction play(url)\r\n{\r\n    stop();\r\n    if (hls_js__WEBPACK_IMPORTED_MODULE_0___default.a.isSupported()) {\r\n        const hls = new hls_js__WEBPACK_IMPORTED_MODULE_0___default.a(); // save global\r\n        hls.loadSource(url);\r\n        hls.attachMedia(video);\r\n        hls.on(hls_js__WEBPACK_IMPORTED_MODULE_0___default.a.Events.MANIFEST_PARSED, function() {\r\n            video.play();\r\n        });\r\n    } else if (video.canPlayType(\"application/x-mpegURL\")) {\r\n        video.src = url;\r\n        video.addEventListener('loadedmetadata', function() {\r\n            video.play();\r\n        });\r\n    }\r\n}\r\n\r\nfunction stop()\r\n{\r\n    // stop loading video-chunks\r\n    video.pause();\r\n    video.removeAttribute('src');\r\n    video.load();\r\n    if(window['hls']){\r\n        hls.stopLoad();\r\n    }\r\n}\n\n//# sourceURL=webpack:///./src/helpers/hlsPlayer.js?");

/***/ }),

/***/ "./src/helpers/object.js":
/*!*******************************!*\
  !*** ./src/helpers/object.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass ObjectHelper {\r\n\r\n    /**\r\n     * source : https://stackoverflow.com/a/49727784\r\n     *\r\n     * @param item\r\n     * @returns {*|boolean}\r\n     */\r\n    static is(item) {\r\n        return (item && typeof item === 'object' && !Array.isArray(item));\r\n    }\r\n\r\n    /**\r\n     * source : https://stackoverflow.com/a/49727784\r\n     *\r\n     * @param target\r\n     * @param sources\r\n     * @returns {*}\r\n     */\r\n    static mergeDeep(target, ...sources) {\r\n        if (!sources.length) return target;\r\n        const source = sources.shift();\r\n\r\n        if (ObjectHelper.is(target) && ObjectHelper.is(source)) {\r\n            for (const key in source) {\r\n                if (ObjectHelper.is(source[key])) {\r\n                    if (!target[key]) {\r\n                        Object.assign(target, { [key]: {} });\r\n                    }else{\r\n                        target[key] = Object.assign({}, target[key])\r\n                    }\r\n                    ObjectHelper.mergeDeep(target[key], source[key]);\r\n                } else {\r\n                    Object.assign(target, { [key]: source[key] });\r\n                }\r\n            }\r\n        }\r\n\r\n        return ObjectHelper.mergeDeep(target, ...sources);\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (ObjectHelper);\n\n//# sourceURL=webpack:///./src/helpers/object.js?");

/***/ }),

/***/ "./src/helpers/proxy.js":
/*!******************************!*\
  !*** ./src/helpers/proxy.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _object__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./object */ \"./src/helpers/object.js\");\n\r\n\r\nclass Proxy {\r\n\r\n    /**\r\n     * https://hackya.com/us/list-of-free-cors-proxy-server/\r\n     *\r\n     * @param requestUrl\r\n     * @param requestOptions\r\n     * @param responseFormat\r\n     * @param useCors\r\n     * @returns {Promise<T>}\r\n     */\r\n    static async fetchByCors({requestUrl, requestOptions = {}, responseFormat = 'text'}, useCors = 'corsAnywhere')\r\n    {\r\n        // enable cors in chrome browser\r\n        /** @see https://chrome.google.com/webstore/detail/moesif-origin-cors-change/digfbfaphojjndkpccljibejjbppifbc */\r\n\r\n        // cors-server\r\n        const corsProxies = {\r\n            corsAnywhere : {\r\n                /**\r\n                 * api  : https://cors-anywhere.herokuapp.com/\r\n                 * test : https://robwu.nl/cors-anywhere.html\r\n                 */\r\n                url           : '',//'https://cors-anywhere.herokuapp.com/', // not working anymore\r\n                requestOptions: { /** @see https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch */ // Supplying request options\r\n                    headers : {\r\n                        origin : null\r\n                    }\r\n                }\r\n            }\r\n        };\r\n        let {url : urlProxy, requestOptions : requestOptionsUsed} = corsProxies[useCors];\r\n        requestOptionsUsed = _object__WEBPACK_IMPORTED_MODULE_0__[\"default\"].mergeDeep(requestOptionsUsed, requestOptions);\r\n\r\n        // request\r\n        const\r\n            responseFormats = { /** @see https://developer.mozilla.org/en-US/docs/Web/API/Response */\r\n                text        : (response) => response.text(),\r\n                json        : (response) => response.json(),\r\n                formData    : (response) => response.formData(),    // used mainly by service workers\r\n                blob        : (response) => response.blob(),        // img\r\n                arrayBuffer : (response) => response.arrayBuffer(), // ogg\r\n            },\r\n            fnResponseFormat = responseFormats[responseFormat] || responseFormats.text\r\n        ;\r\n\r\n        // process\r\n        return {\r\n            data : await\r\n                 fetch(urlProxy+requestUrl, requestOptionsUsed)\r\n                .then(fnResponseFormat),\r\n            success : true, // TODO check status\r\n        };\r\n    }\r\n\r\n    /**\r\n     * DONT USE, limited\r\n     *\r\n     * implemented own xml to json conversion\r\n     *\r\n     * @param url\r\n     * @returns {Promise<T>}\r\n     */\r\n    static async fetchJsonByXml(url)\r\n    {\r\n        const serviceUrl = 'https://feed2json.org/convert?url='; // limited to 50 per day\r\n\r\n        // https://wwww.website.com/abc?query=value with replacements\r\n        // \":\"  : %3A\r\n        // /    : %2F\r\n        // ?    : %3F\r\n        // =    : %3D\r\n        url = encodeURIComponent(url);\r\n\r\n        return await Proxy.fetchByCors({ requestUrl : serviceUrl+url, responseFormat : 'json'} );\r\n    }\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Proxy);\n\n//# sourceURL=webpack:///./src/helpers/proxy.js?");

/***/ }),

/***/ "./src/helpers/xml.js":
/*!****************************!*\
  !*** ./src/helpers/xml.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nclass Xml {\r\n\r\n    /**\r\n     * @param xml\r\n     * @param tab\r\n     * @returns {string}\r\n     */\r\n    static getJSON(xml)\r\n    {\r\n\r\n        if(typeof xml === 'string')\r\n        {\r\n            /** @see https://www.w3schools.com/xml/xml_parser.asp */\r\n            if (window.DOMParser) { // code for modern browsers\r\n                xml = new DOMParser().parseFromString(xml,\"text/xml\");\r\n            } else {\r\n                // code for old IE browsers\r\n                const xmlDoc = new ActiveXObject(\"Microsoft.XMLDOM\");\r\n                xmlDoc.async = false;\r\n                xml = xmlDoc.loadXML(xml);\r\n            }\r\n        }\r\n\r\n        const jsonWithXmlAttributesAndText = Xml._getXmlJsonByXml(xml);\r\n\r\n        return Xml._getJsonByXmlJson(jsonWithXmlAttributesAndText);\r\n    }\r\n\r\n    /**\r\n     * own implementation\r\n     *\r\n     * @param jsonXml\r\n     * @returns {*}\r\n     */\r\n    static _getJsonByXmlJson(jsonXml)\r\n    {\r\n        if(Array.isArray(jsonXml)){ // array\r\n            jsonXml = jsonXml.map((v) => Xml._getJsonByXmlJson(v));\r\n        }else{ // assuming object\r\n            let keys = Object.keys(jsonXml);\r\n            keys = keys.filter(k => ![\r\n                //'@attributes',\r\n                '#text'\r\n            ].includes(k));\r\n\r\n            if(keys.length > 0){ // create sub-json\r\n                delete jsonXml['#text'];\r\n\r\n\r\n                let attrKeys = [];\r\n                if(jsonXml.hasOwnProperty('@attributes'))\r\n                {\r\n                    attrKeys = Object.keys(jsonXml['@attributes']);\r\n                    for(const k in jsonXml['@attributes']){\r\n                        jsonXml[k] = jsonXml['@attributes'][k];\r\n                    }\r\n                }\r\n                delete jsonXml['@attributes'];\r\n\r\n                for(const k in jsonXml){\r\n                    if(!attrKeys.includes(k)){\r\n                        jsonXml[k] = Xml._getJsonByXmlJson(jsonXml[k])\r\n                    }\r\n                }\r\n            }else{\r\n                return jsonXml['#text'];\r\n            }\r\n        }\r\n\r\n        return jsonXml;\r\n    }\r\n\r\n    /**\r\n     * @see https://stackoverflow.com/questions/1773550/convert-xml-to-json-and-back-using-javascript\r\n     *\r\n     * @param xml\r\n     * @returns {{}}\r\n     * @private\r\n     */\r\n    static _getXmlJsonByXml(xml){\r\n        // Create the return object\r\n        var obj = {};\r\n\r\n        if (xml.nodeType == 1) { // element\r\n            // do attributes\r\n            if (xml.attributes.length > 0) {\r\n                obj[\"@attributes\"] = {};\r\n                for (var j = 0; j < xml.attributes.length; j++) {\r\n                    var attribute = xml.attributes.item(j);\r\n                    obj[\"@attributes\"][attribute.nodeName] = attribute.nodeValue;\r\n                }\r\n            }\r\n        } else if (xml.nodeType == 3) { // text\r\n            obj = xml.nodeValue;\r\n        }\r\n\r\n        // do children\r\n        if (xml.hasChildNodes()) {\r\n            for(var i = 0; i < xml.childNodes.length; i++) {\r\n                var item = xml.childNodes.item(i);\r\n                var nodeName = item.nodeName;\r\n                if (typeof(obj[nodeName]) == \"undefined\") {\r\n                    obj[nodeName] = Xml._getXmlJsonByXml(item);\r\n                } else {\r\n                    if (typeof(obj[nodeName].push) == \"undefined\") {\r\n                        var old = obj[nodeName];\r\n                        obj[nodeName] = [];\r\n                        obj[nodeName].push(old);\r\n                    }\r\n                    obj[nodeName].push(Xml._getXmlJsonByXml(item));\r\n                }\r\n            }\r\n        }\r\n        return obj;\r\n    }\r\n\r\n\r\n}\r\n\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (Xml);\n\n//# sourceURL=webpack:///./src/helpers/xml.js?");

/***/ })

/******/ });