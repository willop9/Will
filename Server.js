var http = require('http');

var server = http.createServer(function(req, res){
  console.log('Got a request');
  res.write('Hi');
  console.log(req.url);
  res.end();
});
server.listen(3000);
