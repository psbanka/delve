'use strict';

var ns = {
    xsrfToken: '',
};

/**
 * Entry-point from route.js to get login form. Must fetch xsrf token
 *  from upstream server before rendering the page
 * @param {ServerRequest} req - request from the client
 * @param {ServerResponse} res - response to client
 */
ns.loginRequest = function(req, res) {
    var model = {
        static: '/static',
        xsrfToken: ns.xsrfToken
    };
    res.render('login', model, function(err, html) {
        if (err) {
            res.end('ERROR: ' + err);
        } else {
            res.end(html);
        }
    });
};

/**
 * Handles submission of POST data for a login attempt
 * @param {ServerRequest} req - request from the client
 * @param {ServerResponse} res - response to client
 */
ns.loginSubmit = function(req, res) {
    res.cookie('delve.username', 'eddie');
    res.redirect('/main');
};

/**
 * Entry-point from route.js to log out. Clears cookies and redirects.
 * @param {ServerRequest} req - request from the client
 * @param {ServerResponse} res - response to client
 */
ns.logoutRequest = function(req, res) {
    res.cookie('delve.username', 'eddie');
    res.redirect('/login');
};
