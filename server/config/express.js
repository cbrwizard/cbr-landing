/**
 * Express configuration
 * @module Express configuration function
 */

var path = require('path');
var express = require('express');

module.exports = function (app) {
  app.set('views', path.join(__dirname, '../../shared/views'));
  app.set('view engine', 'jade');

  app.set('port', process.env.PORT || 3000);

  app.use(express.static(path.join(__dirname, '../../public')));

  app.listen(app.get('port'));
};
