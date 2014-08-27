'use strict';

// define(function (require) {
define(function () {

    //var $ = require('jquery');

    var DelveClient = function() {};

    DelveClient.prototype = {
        /**
         * Entrypoint
        */
        main: function() {
            console.log('delveClient is online.');
        },
    };

    return DelveClient;
});
