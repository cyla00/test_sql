const http = require('http');
const mysql = require("mysql");

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

const connessione = mysql.createConnection({
  host : "localhost",
  user : "root",
  pass : "",
  db : "test"
});

connessione.on('error', function(err) {
  console.log(err.code);
});

exports.connection = function() {
    return connessione;
};
