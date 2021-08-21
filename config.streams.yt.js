window.tv.config('tv.config.streams.yt_vr', {
    'vr_voodoo' : {
        ...youtube({playlist : 'UU3ok91FKp_SAtxhz63Ti3KQ'}),
        iframe : iframe1,
        title  : 'Voodoo',
        list   : 'yt.gaming.vr',
    },
    'vr_ben' : {
        ...youtube({playlist : 'UUSVjrpufOzTd3jZsUGs-L0g'}),
        iframe : iframe1,
        title  : 'Ben',
        list   : 'yt.gaming.vr',
    },
    'vr_nici' : {
        ...youtube({playlist : 'UURvAr1b2bDb28PQoygyCgiw'}),
        iframe : iframe1,
        title  : 'Nici',
        list   : 'yt.gaming.vr',
    },
    'vr_wolf' : {
        ...youtube({playlist : 'UU5FFkEokZ3eIHLx5agiBN7Q'}),
        iframe : iframe1,
        title  : 'Wolf',
        list   : 'yt.gaming.vr',
    },
    'vr_paradise_decay' : {
        ...youtube({playlist : 'UUFuXMN42K2upumQHKiWZ_aQ'}),
        iframe : iframe1,
        title  : 'Paradise Decay',
        list   : 'yt.gaming.vr',
    },
    'vr_gamertag_vr' : {
        ...youtube({playlist : 'UUnrAvt4i_2WV3yEKWyEUMlg'}),
        iframe : iframe1,
        title  : 'Gamertag VR',
        list   : 'yt.gaming.vr',
    },
    'vr_tyriel_wood' : {
        ...youtube({playlist : 'UC5rMneyhrBKrNuzJQkRy0uw'}),
        iframe : iframe1,
        title  : 'Tyriel Wood',
        list   : 'yt.gaming.vr',
    },
    'vr_steve_knows' : {
        ...youtube({playlist : 'UCItGV5DOPb5kw4rCQZNmCZg'}),
        iframe : iframe1,
        title  : 'SteveKnows',
        list   : 'yt.gaming.vr',
    },
    'virtual_insider' : {
        ...youtube({playlist : 'UUJFSq0-05sUbvgJYV8biODg'}),
        iframe : iframe1,
        title  : 'Virtual Insider',
        list   : 'yt.gaming.vr',
    }
});
window.tv.config('tv.config.streams.yt_science', {
    'terra_lesch' : {
        ...youtube({playlist : 'UU5E9-r42JlymhLPnDv2wHuA'}),
        iframe : iframe1,
        title  : 'Terry X Lesch & Co',
        list   : 'yt.science',
    },
});
window.tv.config('tv.config.streams.yt_gaming', {
    'rb_gaming' : {
        ...youtube({playlist : 'UUtSP1OA6jO4quIGLae7Fb4g'}),
        iframe : iframe1,
        title  : 'Gaming',
        list   : 'yt.gaming.rb',
    },
    'rb_lets_play' : {
        ...youtube({playlist : 'UUkfDws3roWo1GaA3pZUzfIQ'}),
        iframe : iframe1,
        title  : 'Lets Play',
        list   : 'yt.gaming.rb',
    },
    'rb_game_two' : {
        ...youtube({playlist : 'UUFBapHA35loZ3KZwT_z3BsQ'}),
        iframe : iframe1,
        title  : 'Game Two',
        list   : 'yt.gaming.rb',
    },
    'gamestar' : {
        ...youtube({playlist : 'UU6C1dyHHOMVIBAze8dWfqCw'}),
        iframe : iframe1,
        title  : 'GameStar',
        list   : 'yt.gaming',
    },
    'worth_a_buy' : {
        ...youtube({playlist : 'UUywBfpGBYhsczNuyyh6Cf6w'}),
        iframe : iframe1,
        title  : 'Worth a buy',
        list   : 'yt.gaming',
    },
    'gronkh' : {
        ...youtube({playlist : 'UUYJ61XIK64sp6ZFFS8sctxw'}),
        iframe : iframe1,
        title  : 'Gronkh',
        list   : 'yt.gaming',
    },
    'GmanLives' : {
        ...youtube({playlist : 'UUKlUrYO3i9MDlL45Ia6j5EA'}),
        iframe : iframe1,
        title  : 'GmanLives',
        list   : 'yt.gaming',
    },
    'LGR' : {
        ...youtube({playlist : 'UULx053rWZxCiYWsBETgdKrQ'}),
        iframe : iframe1,
        title  : 'LazyGameReviews',
        list   : 'yt.gaming',
    },
    'handOfBlood' : {
        ...youtube({playlist : 'UU9YTp5M6yYgSd6t0SeL2GQw'}),
        iframe : iframe1,
        title  : 'HandOfBlood',
        list   : 'yt.gaming',
    },
    'handOfUncut' : {
        ...youtube({playlist : 'UUCJ-NJtqLQRxuaxHZA9q6zg'}),
        iframe : iframe1,
        title  : 'HandOfUncut',
        list   : 'yt.gaming',
    },
    'mandalore_gaming' : {
        ...youtube({playlist : 'UUlOGLGPOqlAiLmOvXW5lKbw'}),
        iframe : iframe1,
        title  : 'Mandalore Gaming',
        list   : 'yt.gaming',
    },
    'nightdive_studios' : {
        ...youtube({playlist : 'UUNFs4mUpyf3GxBbfLSty78A'}),
        iframe : iframe1,
        title  : 'Nightdive Studios',
        list   : 'yt.gaming',
    }
});

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
