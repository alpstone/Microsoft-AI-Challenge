// Create web server
// Run: node comments.js
// Open browser: http://localhost:8080/comments

var http = require('http');
var fs = require('fs');

http.createServer(function (req, res) {
  if (req.url === '/comments') {
    fs.readFile('comments.json', function(err, data) {
      if (err) {
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain'});
        res.end('500 - Internal Server Error');
      }
      else {
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.end(data);
      }
    });
  }
  else {
    res.writeHead(404, {'Content-Type': 'text/plain'});
    res.end('404 - Page Not Found');
  }
}).listen(8080, 'localhost');

console.log('Server running at http://localhost:8080');