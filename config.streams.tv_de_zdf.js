window.tv.config('tv.config.streams.tv_de_zdf', {
    'zdf' : { /** @see https://www.zdf.de/live-tv */
        // blob to m3u8 -> play video on official side, then see console for url

        // no audio (grabbed by https://www.zdf.de/live-tv)
        // url    : 'https://zdf-hls-15.akamaized.net/hls/live/2016498/de/57e9cc6dcb94063768a5821187e12ba7/2/2.m3u8',

        // audio (grabbed by https://www.zdf.de/live-tv / m3u BEFORE console.log @ message : [log] > ADTS sync word found !)
        url    : 'https://zdf-hls-15.akamaized.net/hls/live/2016498/de/high/master.m3u8',

        video  : video,
        title  : 'ZDF',
        icon   : 'https://www.zdf.de/favicon.ico',
        list   : 'tv_germany',
    },
    'zdf_info' : { /** @see https://www.zdf.de/dokumentation/zdfinfo-doku/zdfinfo-live-beitrag-100.html */
        url    : 'https://zdf-hls-17.akamaized.net/hls/live/2016500/de/high/master.m3u8',
        title  : 'ZDF Info',
        video  : video,
        icon   : 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/34/ZDFinfo_2011.svg/2560px-ZDFinfo_2011.svg.png',
        list : 'tv_germany',
    },
    'zdf_neo' : { /** @see https://www.zdf.de/sender/zdfneo/zdfneo-live-beitrag-100.html */
        url    : 'https://zdf-hls-16.akamaized.net/hls/live/2016499/de/high/master.m3u8',
        title  : 'ZDF Neo',
        video  : video,
        icon   : 'https://upload.wikimedia.org/wikipedia/commons/8/8c/ZDFneo2017_Logo.svg',
        list : 'tv_germany',
    },
})