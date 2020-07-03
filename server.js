var http = require("http");
var querystring = require('querystring');


http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('end');
console.log("Server started.");