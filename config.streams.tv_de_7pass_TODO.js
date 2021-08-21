window.tv.config('tv.config.streams.tv_de_7pass_TODO', { // TODO DASH-DR

    /** @see https://www.futurezone.de/entertainment/streaming/article215812831/Vergiss-Kabelgebuehren-Im-Internet-schaust-du-so-kostenlos-fern.html */
    // ProSieben        // TODO
    // Sat. 1           // TODO
    // 7 Maxx           // TODO
    // Kabel Eins       // TODO
    // Kabel Eins Doku  // TODO
    // Sixx             // TODO
    // Sat. 1 Gold      // TODO

    '7_maxx' : {
        /**
         * @see https://www.prosiebenmaxx.de/livestream
         *
         * // mpd-dash
         * @see https://ac-001.live.p7s1video.net/719ea289/t_001/sat1gold-de/cenc-default.mpd
         * // mpd-dash license, see network-tab for getsources-file for the license-urls
         * @see https://vas.live.p7s1video.net/2.0/getsources?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Inhfc2F0MWdvbGQtZGUifQ.eyJjb250ZW50X2lkcyI6eyJzYXQxZ29sZC1kZSI6e319LCJzZWN1cmVfZGVsaXZlcnkiOnRydWUsImlhdCI6MTU5MzAxODQ5OSwibmJmIjoxNTkzMDE4MTk5LCJleHAiOjE1OTMwMTg3OTl9.kXEHtvifSSrUEr7abjY1lRmKZoU8hqiL90k5YL2ascc
         *
         * @see https://videojs.github.io/videojs-contrib-dash/ // play mpd
         *
         * // video-drm @ each browser-version
         * https://support.jwplayer.com/articles/digital-rights-management-drm-reference
         */

        // see network-tab -> getsources-file for dash, hls, hss (url + licenses)

        // dash -> needs license
        // url    : 'https://ac-001.live.p7s1video.net/4790383b/t_001/prosiebenmaxx-de/cenc-default.mpd',
        // m3u blocked by cors
        // url    : 'https://ac-001.live.p7s1video.net/719ea289/t_001/sat1gold-de/cbcs-default.m3u8',

        video  : video,
        title  : '7 Maxx',
    },
    'sat1_gold' : {
        /**
         * @see https://www.sat1gold.de/livestream
         *
         * // mpd-dash
         * @see https://ac-001.live.p7s1video.net/719ea289/t_001/sat1gold-de/cenc-default.mpd
         * // mpd-dash license, see network-tab for getsources-file for the license-urls
         * @see https://vas.live.p7s1video.net/2.0/getsources?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Inhfc2F0MWdvbGQtZGUifQ.eyJjb250ZW50X2lkcyI6eyJzYXQxZ29sZC1kZSI6e319LCJzZWN1cmVfZGVsaXZlcnkiOnRydWUsImlhdCI6MTU5MzAxODQ5OSwibmJmIjoxNTkzMDE4MTk5LCJleHAiOjE1OTMwMTg3OTl9.kXEHtvifSSrUEr7abjY1lRmKZoU8hqiL90k5YL2ascc
         *
         * @see https://videojs.github.io/videojs-contrib-dash/ // play mpd
         *
         * // video-drm @ each browser-version
         * https://support.jwplayer.com/articles/digital-rights-management-drm-reference
         */

        // see network-tab -> getsources-file for dash, hls, hss (url + licenses)

        // dash -> needs license
        // url    : 'https://ac-001.live.p7s1video.net/719ea289/t_001/sat1gold-de/sat1gold-de_video_04/cenc-default.mpd',
        // m3u blocked by cors
        // url    : 'https://ac-001.live.p7s1video.net/719ea289/t_001/sat1gold-de/cbcs-default.m3u8',

        video  : video,
        title  : 'SAT1 Gold',
    },
    'sixx' : {
        /**
         * @see https://www.sixx.de/livestream
         *
         * // mpd-dash
         * @see https://ac-001.live.p7s1video.net/719ea289/t_001/sat1gold-de/cenc-default.mpd
         * // mpd-dash license, see network-tab for getsources-file for the license-urls
         * @see https://vas.live.p7s1video.net/2.0/getsources?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6Inhfc2F0MWdvbGQtZGUifQ.eyJjb250ZW50X2lkcyI6eyJzYXQxZ29sZC1kZSI6e319LCJzZWN1cmVfZGVsaXZlcnkiOnRydWUsImlhdCI6MTU5MzAxODQ5OSwibmJmIjoxNTkzMDE4MTk5LCJleHAiOjE1OTMwMTg3OTl9.kXEHtvifSSrUEr7abjY1lRmKZoU8hqiL90k5YL2ascc
         *
         * @see https://videojs.github.io/videojs-contrib-dash/ // play mpd
         *
         * // video-drm @ each browser-version
         * https://support.jwplayer.com/articles/digital-rights-management-drm-reference
         */

        // see network-tab -> getsources-file for dash, hls, hss (url + licenses)

        // dash -> needs license
        // url    : '',
        // m3u blocked by cors
        // url    : '',

        video  : video,
        title  : 'Sixx',
    },
    'kabel1':{ /** @see https://www.kabeleins.de/livestream */

        // resume watching : application -> storage -> locale storage -> <homepage> -> delete all + reload

        url    : '?',
        video  : video,
        title  : 'Kabel 1',
        icon   : null,
    },
    'kabel1_doku':{ /** @see https://www.kabeleinsdoku.de/livestream */

        // resume watching : application -> storage -> locale storage -> <homepage> -> delete all + reload

        url    : '?',
        video  : video,
        title  : 'Kabel 1 Doku',
        icon   : null,
    },
})