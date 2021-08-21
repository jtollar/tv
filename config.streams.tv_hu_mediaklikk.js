window.tv.config('tv.config.streams.tv_hu_mediaklikk', {
    'duna'                        : {
        url   : 'https://player.mediaklikk.hu/playernew/player.php?video=dunalive',
        iframe: iframe1,
        title : 'Duna',
        icon  : 'https://sledovanitv.cz/cache/logos256/duna.png',
        list  : 'tv_hungary',
    },
    'duna world'                  : {
        url   : 'https://player.mediaklikk.hu/playernew/player.php?video=dunaworldlive',
        iframe: iframe1,
        title : 'Duna World',
        icon  : 'https://sledovanitv.cz/cache/logos256/dunaworld.png',
        list  : 'tv_hungary',
    },
    'm1'                          : {
        // not working anymore
        // url   : 'https://player.mediaklikk.hu/playernew/player.php?video=mtv1live',
        //iframe: iframe1,

        // not working
        // url   : 'https://player.mediaklikk.hu/playernew/player.php?'
        // +'video=mtv1live' +
            // '&noflash=yes' +
            // '&vastpreroll=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Flive%2Fads%3Fiu%3D%2F22652647%2Fm1_preroll%26description_url%3Dhttp%253A%252F%252Fmediaklikk.hu%252F%26tfcd%3D0%26npa%3D0%26sz%3D640x360%26gdfp_req%3D1%26output%3Dvast%26unviewed_position_start%3D1%26env%3Dvp%26impl%3Ds%26correlator%3D' +
            // '&osfamily=Windows' +
            // '&osversion=10' +
            // '&browsername=Chrome' +
            // '&browserversion=92.0.4515.159' +
            // '&title=M1' +
            // '&contentid=mtv1live' +
            // '&embedded=1',
        // iframe: iframe1,

        // url : 'https://www.youtube-nocookie.com/embed/live_stream?channel=UCHJ8gW2vKH5R3VohymtBCrQ&modestbranding=1',
        // iframe: iframe1,

        url : 'https://c401-node61-cdn.connectmedia.hu/1100/eb8f51c825a1ad19a98bf93297b5bdd0/61210d8e/03.m3u8',
        video: video,


        // url   : 'https://player.mediaklikk.hu/playernew/player.php?video=mtv1live',
        // iframe: iframe1,

        // iframe: video,
        // url   : 'https://c401-node62-cdn.connectmedia.hu/1100/3a7fa232ef703b601320df085aa0316f/6121019f/03.m3u8',

        title : 'M1', // live
        icon  : 'https://sledovanitv.cz/cache/logos256/m1.png',
        list  : 'tv_hungary',
    },
    // 'm1_test_8uhr'                : {
    //     url  : 'https://player.mediaklikk.hu/playernew/player.php?' +
    //         'video=' +
    //         'U2FsdGVkX1' +
    //         '%2Bl9T3kAb5E0fzCu4cFZevOj80i' +
    //         '%2BeA6GH19h%2F75B72ZQtBWdAsqckJK3DZq24tofSH3cSAId6u6zOpfDl1TuYhzA2pMEktMlkaNdyhfAt7hj7TD' +
    //         '%2BcxZri' +
    //         '%2FYHC4aPh3oLRZtvk1YmKlsoRNdUKCff5ycQgF1Wf4riSs' +
    //         '%3D'
    //     // '&noflash=yes' +
    //     // '&vastpreroll=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Fads%3Fiu%3D%2F22652647%2Fhirado_preroll%26description_url%3Dhttps%253A%252F%252Fhirado.hu%26tfcd%3D0%26npa%3D0%26sz%3D640x360%26gdfp_req%3D1%26output%3Dvast%26unviewed_position_start%3D1%26env%3Dvp%26impl%3Ds%26correlator%3D&vastpostroll=https%3A%2F%2Fpubads.g.doubleclick.net%2Fgampad%2Fads%3Fiu%3D%2F22652647%2Fhirado_postroll%26description_url%3Dhttps%253A%252F%252Fhirado.hu%26tfcd%3D0%26npa%3D0%26sz%3D640x360%26gdfp_req%3D1%26output%3Dvast%26unviewed_position_start%3D1%26env%3Dvp%26impl%3Ds%26correlator%3D' +
    //     // '&osfamily=Windows' +
    //     // '&osversion=10' +
    //     // '&browsername=Chrome' +
    //     // '&browserversion=83.0.4103.106' +
    //     // '&bgimage=%2F%2Fmediaklikk.hu%2Fwp-content%2Fuploads%2Fsites%2F4%2F2020%2F06%2FClipboard13-12-1024x576.jpg' +
    //     // '&title=H%C3%ADrad%C3%B3%2C%202020.%20j%C3%BAnius%2020.%208%3A00' +
    //     // '&series=Vide%C3%B3' //+
    //     // '&contentid=3908706' //+
    //     // '&embedded=0' +
    //     // '&idec=2020-000064-M0172'
    //     ,
    //     iframe: iframe1,
    //     title: 'M1 - Test'
    // },
    // 'm1_test_10uhr'               : {
    //     url  : 'https://player.mediaklikk.hu/playernew/player.php?' +
    //         'video=' +
    //         'U2FsdGVkX1' +
    //         '%2FBly1BDP4douYdue5LzSODsAgtrjgn0i8o4USXWNUmk7atTnKXDnFCi94Gb56M1Z2' +
    //         '%2B8' +
    //         '%2FQC' +
    //         '%2B3pV9RkF' +
    //         '%2BUBdbkZEuC%2FtO1i4H130nXDZqWaHGQqkkrd4' +
    //         '%2F8etfHFdIbm26Mc2yt6PULgcjmT5Cta47YVpI08WAroiDGw' +
    //         '%3D'
    //     ,
    //     iframe: iframe1,
    //     title: 'M1 - Test'
    // },
    'm1_most_important_of_the_day': {
        ...youtube({playlist : 'PLeOUYOblkoOQDTAKZaetfAnrpbMC2o-ZO'}),
        iframe: iframe1,
        title : 'M1 - Napi legfontosabb',
        icon  : 'https://sledovanitv.cz/cache/logos256/m1.png',
        list  : 'tv_hungary',
    },
    'm1_signal'                   : {
        ...youtube({playlist : 'PLeOUYOblkoORs46XT3egXqMMo-nAWddyA'}),
        iframe: iframe1,
        title : 'M1 - Híradó',
        icon  : 'https://sledovanitv.cz/cache/logos256/m1.png',
        list  : 'tv_hungary',
    },
    'm1_weather'                  : {
        ...youtube({playlist : 'PLeOUYOblkoOQZ2rKRSNCMblU_1xMu6Jgw'}),
        iframe: iframe1,
        title : 'M1 - Meteorológia',
        icon  : 'https://sledovanitv.cz/cache/logos256/m1.png',
        list  : 'tv_hungary',
    },
    'm1_uploads'                  : {
        ...youtube({playlist : 'UUHJ8gW2vKH5R3VohymtBCrQ'}),
        iframe: iframe1,
        title : 'M1 - Feltöltések',
        icon  : 'https://sledovanitv.cz/cache/logos256/m1.png',
        list  : 'tv_hungary',
    },
    'm2'                          : {
        url   : 'https://player.mediaklikk.hu/playernew/player.php'
            +'?video=mtv2live'
        ,
        iframe: iframe1,
        title : 'M2',
        icon  : 'https://sledovanitv.cz/cache/logos256/m2.png',
        list  : 'tv_hungary',
    },
    'm4'                          : {
        url   : 'https://player.mediaklikk.hu/playernew/player.php'
            +'?video=mtv4live'
            +'&noflash=yes'
        ,
        iframe: iframe1,
        title : 'M4 Sport',
        icon  : 'https://sledovanitv.cz/cache/logos256/m4.png',
        list  : 'tv_hungary',
    },
    'm5'                          : {
        url   : 'https://player.mediaklikk.hu/playernew/player.php'
            +'?video=mtv5live'
        ,
        iframe: iframe1,
        title : 'M5',
        icon  : 'https://sledovanitv.cz/cache/logos256/m5.png',
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
