import React from 'react';
import { Route, DefaultRoute } from 'react-router';

import App from 'components/App.react';
import About from 'components/About.react';
import Main from 'components/main.js';

const routes = (
  <Route name='app' path='/' handler={App}>
    <Route name='index' handler={Main}/>
    <Route name='about' handler={About}/>
    <DefaultRoute handler={About}/>
  </Route>
);

export default routes;
