import React from 'react';
import { RouteHandler } from 'react-router';

import 'scss/main';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
}
