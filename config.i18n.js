(function(path){
    let ref = window;
    path.split('.').forEach(v => {ref[v] = ref[v] || {}; ref = ref[v]});
})('tv.config.i18n')

window.tv.i18n = window.tv.i18n || {
    'tv_hungary' : 'Magyar',
    'tv_germany' : 'Deutsch',
    'weekday' : {
        0 : 'So',
        1 : 'Mo',
        2 : 'Di',
        3 : 'Mi',
        4 : 'Do',
        5 : 'Fr',
        6 : 'Sa',
        // 7 : 'So',
    }
}