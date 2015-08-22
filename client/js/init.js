/**
 * Client start point
 */

import React from 'react';
import Router from 'react-router';
import routes from './routes';
import currentLocale from './../config/locales/current_locale';
import localeData from './../config/locales/locale_data';

console.log(localeData);

Router.run(routes, Router.HistoryLocation, function(Handler) {
  React.render(<Handler locales={[currentLocale]} {...localeData}/>, document.querySelector('.content'));
});
