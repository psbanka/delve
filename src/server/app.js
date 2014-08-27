/**
 * @file entry point for express app
 *
 * Copyright(c) 2014 Cyan, Inc. All rights reserved.
 *
*/

'use strict';

var express = require('express');
var cookieParser = require('cookie-parser');
var path = require('path');
var logger = require('morgan');
var routes = require('./routes');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.use(cookieParser());


// static files directory
var publicDir;
if (app.get('prod')) {
    publicDir = path.join(__dirname, '../../production-build');
    console.log('production-build' + publicDir);

} else {
    publicDir = path.join(__dirname, '../public');
    console.log('demo-build: ' + publicDir);
}

app.use(express.static(publicDir));
app.use('/static', express.static(publicDir));
var faviconPath = path.join(publicDir, 'css/images/favicon.ico');
app.use('/favicon.ico', express.static(faviconPath));

app.use(logger('dev'));

// configure routes
routes.configure(app);


/// catch 404 and forwarding to error handler
app.use(function(req, res) {
    res.status(404);
    res.render('404', {
        url: req.url,
    });
});

/// error handler
app.use(function(err, req, res) {
    res.render('error', {
        message: err.message
    });
});

module.exports = app;
