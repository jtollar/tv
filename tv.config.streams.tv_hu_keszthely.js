window.tv.config('tv.config.streams.tv_hu_keszthely', {
    'keszthely webcam'             : {
        url   : 'https://cloudfront44.lexanetwork.com/itplayer/HDE025_inc.php?player_type=v2player&image=pic/loversenylive.png&autostart=true&mute=false',
        iframe: iframe1,
        title : 'Keszthely WebCam',
        icon  : 'https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Keszthely.svg',
        list  : 'tv_hungary',
    },
    'keszthely tv'                 : {
        url   : 'https://cloudfront63.lexanetwork.com/itplayer/HDE023_inc.php?player_type=v2player&image=pic/loversenylive.png&autostart=true&mute=false',
        iframe: iframe1,
        title : 'Keszthely TV',
        icon  : 'https://tvkeszthely.hu/favicon.ico',
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
