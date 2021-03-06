//
// # SimpleServer
//
// A simple chat server using Socket.IO, Express, and Async.
//
var http = require('http');
var path = require('path');

var express = require('express');
var constants = require('./constants')

var router = express();
var server = http.createServer(router);

router.use(express.static(path.resolve(__dirname, 'front_end')));


server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log(constants.api_base_url);
});

