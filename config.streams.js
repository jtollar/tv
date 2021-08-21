// channels
/** @see https://de.live-tv-channels.org/tvcountry/Hungary.html */
/** @see https://de.live-tv-channels.org/tvcountry/Germany.html */

// find best icon -> look app-store
/** @see https://play.google.com/store/search?q=tagesschau%20app&hl=de */
// brand -> icon
/** @see https://www.wikipedia.de/ */

// grab fav-icon
/** @see https://developer.mozilla.org/de/docs/Web/CSS/Attributselektoren */
// console.clear(); $$('link[rel*="icon"]').forEach(d => console.log(d.getAttribute('rel'), location.origin + d.getAttribute('href')))

const
    iframe1    = document.querySelector('#iframe1'),
    video      = document.querySelector('#video');

const streams_tv_de_illegal = {
        // sources
        /**
         * @see https://raidrush.net/pages/online-fernsehen/
         *
         * // best - a lot
         * // orf -> has "debugger" statement
         * https://www.kalitepro.com/pro7-prosieben/
         */

        'sat1' : {
            url    : 'https://wer2.wertvlive.com/hls/w6.m3u8',
            video  : video,
            title  : 'Sat 1',
        },
        'pro7' : {
            url    : 'https://wer2.wertvlive.com/hls/r1.m3u8',
            video  : video,
            title  : 'Pro 7',
        },
        'pro7_maxx' : {
            url    : 'https://11.bild-upload.com/w2/video.m3u8?token=Rh45MoyoC3',
            video  : video,
            title  : 'Pro7 Maxx',
        },
        'kabel_1' : {
            url    : 'https://11.bild-upload.com/w55/video.m3u8?token=Rh45MoyoC3',
            video  : video,
            title  : 'Kabel 1',
        },
        'dmax' : {
            url    : 'https://11.bild-upload.com/w4/video.m3u8?token=Rh45MoyoC3',
            video  : video,
            title  : 'Dmax',
        },
        'orf1' : {
            url    : 'https://c6.freeliveetv.com/web/1/www.kalitepro.com/c3/1593041636/PE3AmPHhsSyVemrqz-zxdA/11762.m3u8',
            video  : video,
            title  : 'ORF 1',
        },
    },

    streams_tv_etvserver = {
        // NEEDS wmsAuthSign
        /** @see https://www.ecanlitvizle.live/n-tv-live-stream-tv/ */

        // is base64 encoded
        /** @see https://www.base64decode.org/ */
        // e.g      : *.m3u?wmsAuthSign=c2VydmVyX3RpbWU9Ny8yMi8yMDIwIDk6Mjc6MjQgUE0maGFzaF92YWx1ZT1wbnpRcGpwa0RDdnQ2RkpwUEFFQmlnPT0mdmFsaWRtaW51dGVzPTEw
        // where    : page loads iframe -> in iframe -> jwplayer-url
        // problem  : redirects, if parent-page is not same
        // solution : get via puppeteer

        // decode  : c2VydmVyX3RpbWU9Ny8yMi8yMDIwIDk6Mjc6MjQgUE0maGFzaF92YWx1ZT1wbnpRcGpwa0RDdnQ2RkpwUEFFQmlnPT0mdmFsaWRtaW51dGVzPTEw
        // result  : server_time=7/22/2020 9:27:24 PM&hash_value=pnzQpjpkDCvt6FJpPAEBig==&validminutes=10

        // test
        /** @see https://www.jwplayer.com/developers/stream-tester/ */
        // e.g     : https://ecanlitv1.etvserver.com/live_sd/dekabel1/playlist.m3u8?wmsAuthSign=c2VydmVyX3RpbWU9Ny8yMi8yMDIwIDk6Mjc6MjQgUE0maGFzaF92YWx1ZT1wbnpRcGpwa0RDdnQ2RkpwUEFFQmlnPT0mdmFsaWRtaW51dGVzPTEw

        // same WmsAuthSign between channels ?
        // dekabel1 : c2VydmVyX3RpbWU9Ny8yMi8yMDIwIDk6Mjc6MjQgUE0maGFzaF92YWx1ZT1wbnpRcGpwa0RDdnQ2RkpwUEFFQmlnPT0mdmFsaWRtaW51dGVzPTEw
        //            server_time=7/22/2020 9:27:24 PM&hash_value=pnzQpjpkDCvt6FJpPAEBig==&validminutes=10
        // pro7maxx : c2VydmVyX3RpbWU9Ny8yMi8yMDIwIDk6NDU6NTkgUE0maGFzaF92YWx1ZT1FSk9pL0QwZW9QQjdpcVQvSGFXRzl3PT0mdmFsaWRtaW51dGVzPTEw
        //            server_time=7/22/2020 9:45:59 PM&hash_value=EJOi/D0eoPB7iqT/HaWG9w==&validminutes=10


        'ntv' : {
            // url    : 'https://www.ecanlitvizle.live/embed.php?kanal=n-tv-live-stream-tv', // not working
            url    : 'https://ecanlitv2.etvserver.com/live_sd/dentv/playlist.m3u8' // working with "wmsAuthSign"
                +'?'
                +'wmsAuthSign=c2VydmVyX3RpbWU9Ni8yNS8yMDIwIDc6Mjc6MDUgUE0maGFzaF92YWx1ZT1KQURWVXFJZzdQNW5EM0Zzc1Z5b0pnPT0mdmFsaWRtaW51dGVzPTEw',
            video  : video,
            title  : 'NTV',
            icon   : 'https://www.n-tv.de/resources/93477804/responsive/img/favicon.ico'
        },
    }
;
