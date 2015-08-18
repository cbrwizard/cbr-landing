/**
 * Client start point
 */

import React from 'react';
import Router from 'react-router';
import routes from './routes';
import currentLocale from './../config/locales/current_locale';
import localeData from './../config/locales/locale_data';

Router.run(routes, function (Handler) {
  React.render(<Handler locales={[currentLocale]} {...localeData}/>, document.querySelector('.content'));
});
