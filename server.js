var http = require("http");
var querystring = require('querystring');
var util = require('util');

function onRequest(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.write("idk");
  if (request.method == 'POST') {
        var body = '';

        request.on('data', function (data) {
            body += data;

            // Too much POST data, kill the connection!
            // 1e6 === 1 * Math.pow(10, 6) === 1 * 1000000 ~~~ 1MB
            if (body.length > 1e6)
                request.connection.destroy();
        });

        request.on('end', function () {
            var post = qs.parse(body);
            // use post['blah'], etc.
        });
    }
 
  
  response.end();
}


http.createServer(onRequest).listen(8888);

console.log("Server started.");