window.tv.config('tv.config.streams.tv_de_ard', {

    // Alle Sender, wie ?
    // https://www.ardmediathek.de/ard/
    // 1. oben auf "Alle"
    // 2. dann auf "Live-TV"
    // 3. dann sieht man untern stream alle Sender

    // x Das Erste (ARD)
    // x BR
    // x HR
    // x MDR
    // x NDR
    // skip Radio Bremen (nur audio)
    // x rbb
    // x SR
    // x SWR
    // x WDR
    // ? ONE
    // x ARD-alpha
    // x 3sat
    // x arte
    // x KiKA
    // x Phoenix
    // x tagesschau24
    // x Deutsche Welle

    '3sat'          : {
        /**
         * @see https://www.3sat.de/programm/3sat-livestream-100.html
         * @see https://api.3sat.de/content/documents/zdf/programm/3sat-livestream-100.json?profile=player2
         */
        // blob to m3u8 -> play video on official side, then see console for url

        // no audio (grabbed by https://www.3sat.de/programm/3sat-livestream-100.html)
        //url    : 'https://zdf-hls-18.akamaized.net/hls/live/2016501/dach/e09929ae9dcae7ca33de1bdf4b7a0762/3/3.m3u8',

        // audio (grabbed by https://www.3sat.de/programm/3sat-livestream-100.html / m3u BEFORE console.log @ message : [log] > ADTS sync word found !))
        url: 'https://zdf-hls-18.akamaized.net/hls/live/2016501/dach/high/master.m3u8',

        video: video,
        title: '3sat',
        icon : 'https://www.3sat.de/favicon.ico',
        list : 'tv_germany',
    },
    'ard'           : {
        /** @see https://live.daserste.de/ */
        url  : 'https://mcdn.daserste.de/daserste/de/master_1960.m3u8',
        video: video,
        title: 'ARD (Das Erste)',
        icon : 'https://www.daserste.de/favicon.ico',
        list : 'tv_germany',
    },
    'ard_alpha'     : {
        // blob to m3u8 -> play video on official side, then see console for url
        url  : 'https://brlive-lh.akamaihd.net/i/bralpha_germany@119899/master.m3u8',
        video: video,
        title: 'ARD alpha',
        icon : 'https://upload.wikimedia.org/wikipedia/commons/4/4b/ARD_alpha.svg',
        list : 'tv_germany',
    },
    'ard_one'           : {
        url  : 'https://onelivestream-lh.akamaihd.net/i/one_livestream@568814/master.m3u8?set-segment-duration=responsive',
        video: video,
        title: 'ARD one',
        icon : 'https://www.ardmediathek.de/images/xKLgJZXC.svg',
        iconClass : 'icon-ard-blue',
        list : 'tv_germany',
    },
    'ard_tagesschau24'  : {
        /** @see https://www.tagesschau.de/multimedia/livestreams/livestream3/ */
        // blob to m3u8 -> play video on official side, then see console for url

        url  : 'https://tagesschau-lh.akamaihd.net/i/tagesschau_1@119231/master.m3u8'+'?set-segment-duration=responsive',
        video: video,
        title: 'ARD tagesschau24',
        icon : 'https://static-s.aa-cdn.net/img/gp/20600006638867/OpxVwzcusPYywi99J47aq112s2n8f_fw_4EXUFOXlNBV0pUYSmH7d4qOh8Vt_A6wlCG1=w300',
        list : 'tv_germany',
    },
    'arte'          : {
        /** @see https://www.arte.tv/de/live/ */
        url  : 'https://artelive-lh.akamaihd.net/i/artelive_de@393591/master.m3u8',
        video: video,
        title: 'arte',
        icon : 'https://static-cdn.arte.tv/guide/favicons/favicon.ico',
        list : 'tv_germany',
    },
    'br_nord'       : {
        /** @see https://www.br.de/mediathek/live */
        // m3u BEFORE console.log @ message : [log] > ADTS sync word found !
        url  : 'https://brlive-lh.akamaihd.net/i/bfsnord_germany@119898/master.m3u8',
        video: video,
        title: 'BR', // BR-Nord
        icon : 'https://www.br.de/static/favicon.ico',
        list : 'tv_germany',
    },
    // 'br_sued'       : {
    //     /** @see https://www.br.de/mediathek/live */
    //     // m3u BEFORE console.log @ message : [log] > ADTS sync word found !
    //     url  : 'https://brcdn.vo.llnwd.net/bfs_sued/de/profile1/1.m3u8',
    //     video: video,
    //     title: 'BR-süd',
    //     icon : 'https://www.br.de/static/favicon.ico',
    //     list : 'tv_germany',
    //
    // },
    // 'br_panorama'   : {
    //     /** @see https://www.br.de/mediathek/live */
    //     // blob to m3u8 -> play video on official side, then see console for url
    //     url  : 'https://brevent1hds-lh.akamaihd.net/i/br_event05isma@145760/master.m3u8',
    //     video: video,
    //     title: 'BR-panorama',
    //     icon : 'https://www.br.de/static/favicon.ico',
    //     list : 'tv_germany',
    // },
    'deutsche_welle': {
        /** @see https://www.br.de/mediathek/live */
        // blob to m3u8 -> play video on official side, then see console for url
        url  : 'https://dwstream6-lh.akamaihd.net/i/dwstream6_live@123962/master.m3u8',
        video: video,
        title: 'Deutsche Welle',
        icon: 'https://www.dw.com/favicon.png',
        list : 'tv_germany',
    },
    'hr'            : {
        // m3u BEFORE console.log @ message : [log] > ADTS sync word found !
        url  : 'https://hrlive1-lh.akamaihd.net/i/hr_fernsehen@75910/master.m3u8',
        video: video,
        title: 'hr',
        icon : 'https://www.hr-fernsehen.de/assets_2.104.0/base/icons/favicon/favicon.ico',
        list : 'tv_germany',
    },
    'kika'          : {
        /** @see https://www.kika.de/livestream/index.html */

        // blob to m3u8 -> play video on official side, then see console for url
        url  : 'https://kikageohls-i.akamaihd.net/hls/live/1006268/livetvkika_de/master.m3u8',
        video: video,
        title: 'KiKA',
        icon : 'https://cdn.kika.de/favicon.ico',
        list : 'tv_germany',
    },
    'mdr'           : {
        /** @see https://www.mdr.de/mediathek/livestreams/fernsehen/index.html */

        // blob to m3u8 -> play video on official side, then see console for url
        url  : 'https://mdrsnhls-lh.akamaihd.net/i/livetvmdrsachsen_de@513998/master.m3u8',
        video: video,
        title: 'MDR',
        icon : 'https://cdn.mdr.de/favicon.ico?v=2017',
        list : 'tv_germany',
    },
    'ndr'           : {
        /** @see https://www.ndr.de/fernsehen/livestream217.html */

        // blob to m3u8 -> play video on official side, then see console for url
        url  : 'https://ndrfs-lh.akamaihd.net/i/ndrfs_nds@430233/master.m3u8',
        video: video,
        title: 'NDR',
        icon: 'https://www.ndr.de/favicon.ico',
        list : 'tv_germany',
    },
    'phoenix'       : {
        /** @see https://www.phoenix.de/livestream.html */
        // m3u BEFORE console.log @ message : [log] > ADTS sync word found !
        url  : 'https://zdf-hls-19.akamaized.net/hls/live/2016502/de/high/master.m3u8',
        video: video,
        title: 'Phoenix',
        icon : 'https://www.phoenix.de/favicon.ico',
        list : 'tv_germany',
    },
    'rbb'           : {
        // blob to m3u8 -> play video on official side, then see console for url
        url  : 'https://rbblive-lh.akamaihd.net/i/rbb_berlin@144674/master.m3u8',
        video: video,
        title: 'rbb',
        icon : 'https://www.rbb-online.de/static/rbb/frontend/favicon.ico',
        list : 'tv_germany',
    },
    'sr'            : { /** @see https://www.sr.de/sr/fernsehen/livestream/index.html */
        // m3u BEFORE console.log @ message : [log] > ADTS sync word found !
        url  : 'https://srlive24-lh.akamaihd.net/i/sr_universal02@107595/master.m3u8'+'?set-segment-duration=responsive',
        video: video,
        title: 'SR',
        icon : 'https://www.sr.de/sr/static/images/favicon.ico',
        list : 'tv_germany',
    },
    'swr'           : {
        // m3u BEFORE console.log @ message : [log] > ADTS sync word found !
        url  : 'https://swrbwhls-i.akamaihd.net/hls/live/667638/swrbwd/master.m3u8?set-segment-duration=responsive',
        video: video,
        title: 'SWR',
        icon: 'https://www.swrfernsehen.de/assets/swrfernsehen/favicon.ico',
        list : 'tv_germany',
    },
    'wdr'           : {
        /** @see https://www1.wdr.de/mediathek/video/live/index.html */

        // blob to m3u8 -> play video on official side, then see console for url
        url  : 'https://wdrfs247.akamaized.net/hls/live/681509/wdr_msl4_fs247/master.m3u8',
        video: video,
        title: 'WDR',
        icon : 'https://www1.wdr.de/resources/img/favicon/favicon.ico',
        list : 'tv_germany',
    },
})