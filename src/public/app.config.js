/* global requirejs */

requirejs.config({
    baseUrl: 'src',

    paths: {
        'underscore': '../bower_components/underscore/underscore',
        'jquery': '../bower_components/jquery/dist/jquery',
        'jade': '../bower_components/jade/jade',
        'q': '../bower_components/q/q',

        // require-css modules
        // note: it is declared here vs map because the path is relative to baseUrl while map urls are
        // relative to the file that included it
        'css': '../bower_components/require-css/css.min',
        'css-builder': '../bower_components/require-css/css-builder',
        'normalize': '../bower_components/require-css/normalize',
    },

    shim: {
        'jquery.bootstrap': {
            deps: [
                'jquery',
                'css!ui-bootstrap/dist/css/bootstrap.min',
            ]
        },
        'q': {
            exports: 'Q',
        },
    },
});
