var express = require('express');
var path = require('path');
var http = require('http');

var webpack = require('webpack');
var webpackConfig = require('./../webpack.config');

var routes = require('./routes/index');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, '../client/views'));
app.set('view engine', 'jade');

var port = 3000;
app.set('port', port);

app.use(express.static(path.join(__dirname, '../public')));

app.use('/', routes);

var server = http.createServer(app);
server.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

module.exports = app;
