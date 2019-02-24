const http = require('http');
var domURL = document.URL;
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

  if(req.url === '/api/dom'){
    console.log(domURL);
    res.end();
  }
});
server.listen(3000);
