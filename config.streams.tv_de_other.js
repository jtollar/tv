window.tv.config('tv.config.streams.tv_de_other', {
    // 'ntv' : {
    //     url    : 'https://pliventv-a.akamaihd.net/live/ntvhomelive/ntvhomelive.isml/.m3u8',
    //     video  : video,
    //     title  : 'NTV',
    //     icon   : 'https://www.n-tv.de/resources/93477804/responsive/img/favicon.ico'
    // },
    'welt' : {
        url    : 'https://live2weltcms-lh.akamaihd.net/i/Live2WeltCMS_1@444563/master.m3u8?dw=0',
        video  : video,
        title  : 'Welt (N24)',
        icon   : 'https://www.welt.de/favicon.ico',
        list   : 'tv_germany',
    },
    'welt_der_wunder' : {
        url    : 'http://wowza-1.weltderwunder.net:1935/live/weltderwunder/chunklist_w507069656.m3u8',
        video  : video,
        title  : 'Welt der Wunder',
        icon   : 'http://www.weltderwunder.de/favicon.ico',
        list   : 'tv_germany',
    },
    'euronews' : {
        // https://de.euronews.com/embed/live
        //https://de.euronews.com/api/watchlive.json for live stream url
        url    : 'https://de.euronews.com/embed/live',
        iframe : iframe1,
        title  : 'Euronews',
        icon   : 'https://de.euronews.com/favicon-16x16.png',
        list   : 'tv_germany',
    }
})