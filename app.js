var path = require('path');
var Server = require(path.join(__dirname, 'server/server.js'));
var config = require('./config.js')(__dirname);
var server = new Server(config);

//server.initCache();

server.initGlobal();

server.start();

server.connectDb();

server.errHandle(function(err) {
  _log(err);
});
