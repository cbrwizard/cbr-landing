/**
 * Express routes configuration
 * @module Express routes configuration function
 */

const pagesController = require('./../controllers/pages');

module.exports = function (app) {
  app.get('/', pagesController.index);
};
