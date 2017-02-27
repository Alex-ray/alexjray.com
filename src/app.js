var http = require('http');
var express = require('express');
var colors = require('colors');

var PORT = process.env['PORT'] || 8080;

var app = express();

var PROD  = true;

var server = http.createServer(app);

app.get('/', function (req, res) {
  res.send('Hello World!');
})

server.listen(PORT, function() {
   const address = server.address();
   const envLog = '>>>>' + PROD ? 'PRODUCTION' : 'DEVELOPMENT';

   console.log(`${envLog.yellow} ${'>>>'.cyan} ${'Listening on:'.rainbow} PORT: ${address.port}`);
 });
