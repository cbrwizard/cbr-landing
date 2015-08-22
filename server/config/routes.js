/**
 * Express routes configuration
 * @module Express routes configuration function
 */

import React from 'react';
import Router from 'react-router';

import routes from './../../config/routes';
import currentLocale from './../../config/locales/current_locale';
import localeData from './../../config/locales/locale_data';

module.exports = function(app) {
  app.use(function(req, res) {
    const router = Router.create({location: req.url, routes: routes});

    router.run(function(Handler) {
      const reactOutput = React.renderToString(<Handler locales={[currentLocale]} {...localeData}/>);
      return res.render('pages/blank', {reactOutput: reactOutput});
    });
  });
};
