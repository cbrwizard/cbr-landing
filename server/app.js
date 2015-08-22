/**
 * Server start point
 * @module Express app
 */

require('babel/register')({
  stage: 1,
});

const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');
const app = express();

expressConfig(app);
routesConfig(app);

module.exports = app;
