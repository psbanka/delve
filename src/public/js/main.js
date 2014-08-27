'use strict';

define(function (require) {

    var $ = require('jquery');
    var cardPageTmpl = require('delve-client/tmpl/cards.tmpl');

    var DelveClient = function() {};

    DelveClient.prototype = {
        /**
         * Entrypoint
        */
        main: function() {
            console.log('delveClient is online.');
            var cardPageHtml = cardPageTmpl({});
            $('body').append(cardPageHtml);
        },
    };

    return DelveClient;
});
