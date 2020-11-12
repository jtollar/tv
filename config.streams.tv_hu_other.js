window.tv.config('tv.config.streams.tv_hu_other', {
    'borbas_marcsi'                          : {
        ...youtube({playlist : 'PLMS-agfcLTVIWKE6lJw2or3kKZ5KNFgpL'}),
        iframe: iframe1,
        title : 'Borbás Marcsi',
        icon  : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfobQPXIV49T2MkGCh0knoBVvdu0xrZg-MvaJwblovyP4R5nI&s',
        list  : 'tv_hungary',
    },
    //'separate1' : null,
    // 'atv'                         : { // TODO fix
    //     /**
    //      * @see http://www.atv.hu/elo-adas
    //      *
    //      * // fix : http on https-domain
    //      * https://stackoverflow.com/questions/44392426/html5-playing-http-streaming-on-https-domain
    //      */
    //     url   : 'http://streamservers.atv.hu/atvliveedge/_definst_//atvstream_2_aac/playlist.m3u8',
    //     iframe: video,
    //     title : 'ATV',
    //     // icon  : '',
    // },
    // 'bonum'                       : { // TODO fix
    //     /** @see https://bonumtv.hu/elo-adas/ */
    //     url   : 'https://stream.y5.hu/stream/stream_bonum/stream.m3u8',
    //     iframe: video,
    //     title : 'Bonum',
    //     // icon  : '',
    // },
    'debrecen'                    : { /** @see http://www.dehir.hu/dtv/ */
        url   : 'https://cloudfront44.lexanetwork.com/itplayer/LIVE003_inc.php?player_type=v2player&image=https://www.dehir.hu/upload/images/wp_cikkek/2017/hatterplayerhtml5.jpg&autostart=true&mute=false',
        iframe: iframe1,
        title : 'Debrecen',
        icon  : 'http://www.dehir.hu/templates/dehir/assets/img/favicon.png',
        list  : 'tv_hungary',
    },
    'dunaujvaros'                 : {
        ...youtube({playlist : 'UU7JMt5v-k0X776uHVnjCp7A'}),
        iframe: iframe1,
        title : 'Dunaújváros',
        icon  : 'https://yt3.ggpht.com/a/AATXAJxj6he-HiWN2_iw68_FPInfkalW4-i3gR-YWQ=s68-c-k-c0xffffffff-no-rj-mo',
        list  : 'tv_hungary',
    },
    'fixHd'                       : { // fix tv is the same
        url   : 'https://www.fixhd.tv/hd/',
        iframe: iframe1,
        title : 'Fix HD',
        icon  : 'https://www.fixhd.tv/favicon.ico',
        list  : 'tv_hungary',
    },
    'forever'                     : {
        ...youtube({playlist : 'UU8Amz_qxSYL1Pe2Txuiwo2w'}),
        iframe: iframe1,
        title : 'Forever',
        icon  : 'https://yt3.ggpht.com/a/AATXAJxu-6O94MescfQHXQA9UFZxpOFIETvpA1tQGQ5zqw=s88-c-k-c0x00ffffff-no-rj',
        list  : 'tv_hungary',
    },
    'gyorPlus'                    : {
        ...youtube({playlist : 'UUO-UhgmFByrBD5PTQY1pW5Q'}),
        iframe: iframe1,
        title : 'Győrplusz TV',
        icon  : 'https://yt3.ggpht.com/a/AATXAJzchScsBes8tNeb3Md4AhV4MiGuzIpqoIO4Ng=s100-c-k-c0xffffffff-no-rj-mo',
        list  : 'tv_hungary',
    },
    'hir'                         : {
        ...youtube({playlist : 'UUAvx9uxtvhnxNpnjutUei5A'}),
        iframe: iframe1,
        title : 'Hír',
        icon  : 'https://hirtv.hu/favicon_hirtv.ico',
        list  : 'tv_hungary',
    },
    'ladany'                      : {
        ...youtube({playlist : 'UUnG322MGBA4q5QWwDzUTh0Q'}),
        iframe: iframe1,
        title : 'Ladány',
        icon  : 'https://i.ytimg.com/an/nG322MGBA4q5QWwDzUTh0Q/featured_channel.jpg?v=56ab5023',
        list  : 'tv_hungary',
    },
    'kinscem_park'                     : {
        url   : 'https://cloudfront41.lexanetwork.com/itplayer/loverseny3_rdc_player_inc.php?image=pic/loversenylive.png&logofile=&logoposition=topright&autostart=true&mute=false&title=&player_dvr=1',
        iframe: iframe1,
        title : 'Kinscem Park',
        icon  : 'https://kincsempark.hu/wp-content/uploads/2019/09/kp_logo_32px-01.png',
        list  : 'tv_hungary',
    },
    'Nyiregyhazi'                 : {
        url   : 'https://www.youtube.com/embed/live_stream' // youtube-24h-livestream
            +'?channel=UCx7cFh63AWsK3cbfgX3GaaQ'
            +'&autoplay=true'
            +'&showinfo=false'
        ,
        iframe: iframe1,
        title : 'Nyíregyházi',
        icon  : 'http://www.nyiregyhazitv.hu/images/logo.jpg',
        list  : 'tv_hungary',
    },
    'trio'                        : {
        ...youtube({playlist : 'UUSCG0tp4Sv8vhcedvaQsvMA'}),
        iframe: iframe1,
        title : 'Trió TV Dunántúl',
        icon  : 'http://www.triotvdunantul.hu/images/header_logo.gif',
        list  : 'tv_hungary',
    },
})

function youtube({playlist = null, channel = null}) {
    const result = {};
    let yt = 'https://www.youtube.com/embed/videoseries' + '?autoplay=1';

    // play all videos in playlist (uploads-playlist = newest videos on channel)
    // https://www.youtube.com/embed/videoseries?autoplay=1&list=ID
    // play all videos on channel
    // ???

    if(channel){
        result['youtube'] = result['youtube'] || {};
        result['youtube']['channel'] = playlist;
        result['url'] = yt+'&list='+playlist;
    }

    if(playlist)
    {
        result['youtube'] = result['youtube'] || {};
        result['youtube']['playlist'] = playlist;
        result['url'] = yt+'&list='+playlist;
    }

    // TODO livestream
    // 'https://www.youtube.com/embed/live_stream'
    // +'?channel=ID'
    // +'&autoplay=true'
    // +'&showinfo=false'

    return result;
}
