#!/usr/bin/env node
var app = require('../src/server/app');
var config = require('../src/server/config');

app.set('port', config.get('server').port || 3030);
app.set('prod', config.get('server').prod || false);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});
