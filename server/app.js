/**
 * Server start point
 * @module Express app
 */

var express = require('express');
var path = require('path');
var http = require('http');
var expressConfig = require('./config/express');
var routesConfig = require('./config/routes');

var app = express();

expressConfig(app);
routesConfig(app);

module.exports = app;
