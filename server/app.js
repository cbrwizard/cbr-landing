/**
 * Server start point
 * @module Express app
 */

const express = require('express');
const expressConfig = require('./config/express');
const routesConfig = require('./config/routes');

const app = express();

expressConfig(app);
routesConfig(app);

module.exports = app;
