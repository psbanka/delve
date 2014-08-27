/* globals requirejs */
requirejs.config({
    baseUrl: '../',
    packages: [
        {
            name: 'delve-client',
            location: '/static/js'
        },
    ],
    paths: {
        'jquery': 'bower_components/jquery/dist/jquery.min',
        'underscore': 'bower_components/underscore/underscore',
        'jade': 'bower_components/jade/jade',
        'q': 'bower_components/q/q',
        // 'handlers.tmpl': 'demo/js/handlers.tmpl',
    },
    map: {
        '*': {
            'css': 'bower_components/require-css/css.min'
        }
    },
    shims: {
        'q': {
            exports: 'Q',
        },
        'underscore': {
            exports: '_'
        },
    }
});
