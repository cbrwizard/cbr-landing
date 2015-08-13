import Router from 'react-router';
import React from "react";
import App from './../components/app/app';
import Index from './../components/regular/pages/index/main';
import Admin from './../components/admin/pages/index/main';

const Route = Router.Route;
const DefaultRoute = Router.DefaultRoute;

const routes = (
  <Route name="app" path="/" handler={App}>
    <Route name="index" handler={Index}/>
    <Route name="admin" handler={Admin}/>

    <DefaultRoute handler={Index}/>
  </Route>
);

export default routes;
