var nconf = require('nconf');
var path = require('path');

// setup app config object
nconf.file({file: path.join(__dirname, 'config.json')});

module.exports = nconf;
