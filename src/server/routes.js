'use strict';

// var api = require('./api');
var login = require('./login');
// var config = require('./config');

var ns = {};
var COPY = 'Copyright &copy; 2014 Peter Banka and Jeremy Banka; Inc&period; All Rights Reserved&period;';

ns.configure = function (app) {

    // Index ---------------------------------------------

    app.get('/', function(req, res) {
        res.redirect('/main');
    });

    // Login ---------------------------------------------
    app.get('/login', function(req, res) {
        return login.loginRequest(req, res);
    });

    app.post('/login', function(req, res) {
        return login.loginSubmit(req, res);
    });

    app.get('/logout', function(req, res) {
        return login.logoutRequest(req, res);
    });

    // Main page ----------------------------
    app.get('/main', function (req, res) {
        /*
        var username = req.cookies('delve.username');
        if (!username) {
            res.redirect('/login');
        }
        */
        var username = 'fred';

        res.render('okay', {
            static: '/static',
            username: username,
            copyright: COPY,
        });
    });

    // API -----------------------------------------------
    /*
    app.all('/api/*', function (req, res) {
        return api.request(req, res);
    });
    */

};

module.exports = ns;
