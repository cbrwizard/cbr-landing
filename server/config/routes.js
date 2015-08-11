/**
 * Express routes configuration
 * @module Express routes configuration function
 */

var express = require('express');
var router = express.Router();
var pagesController = require('./../controllers/pages');

module.exports = function (app) {
  app.get('/', pagesController.index);
};

