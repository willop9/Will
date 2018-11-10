const http = require('http');

var server = http.createServer((req, res) =>{

  console.log('Got a request');

  if(req.url === '/'){
    res.write('Hi');
    console.log(req.url);
    res.end();
  }

  if(req.url === '/api/courses'){
    res.write(JSON.stringify([1, 2, 3]));
    res.end();
  }
});
server.listen(3000);
