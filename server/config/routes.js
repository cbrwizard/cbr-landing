/**
 * Express routes configuration
 * @module Express routes configuration function
 */

const React = require('react');
const Router = require('react-router');

const routes = require('./../../client/js/routes');

import currentLocale from './../../client/config/locales/current_locale';
import localeData from './../../client/config/locales/locale_data';

//const pagesController = require('./../controllers/pages');

module.exports = function(app) {
  app.use(function(req, res) {
    const router = Router.create({location: req.url, routes: routes});
    router.run(function(Handler) {
      const reactOutput = React.renderToString(<Handler locales={[currentLocale]} {...localeData}/>);
      return res.render('pages/blank', {reactOutput: reactOutput});
    });
  });

  //app.get('/', pagesController.index);
};
