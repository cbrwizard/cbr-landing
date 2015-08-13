import Router from 'react-router';
import React from "react";
import routes from './../../js/routes';

const Link = Router.Link;
const RouteHandler = Router.RouteHandler;

/**
 * @TODO: probably we need to create a separate app for admin and regular too
 */
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to="app">App</Link></li>
            <li><Link to="index">Index</Link></li>
            <li><Link to="admin">Admin</Link></li>
          </ul>
        </header>

        <RouteHandler/>
      </div>
    );
  }
}

module.exports = App;
