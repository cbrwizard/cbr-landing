import React from 'react';
import { RouteHandler } from 'react-router';

//import ReactIntl from 'react-intl';
//import reactMixin from 'react-mixin';

//const IntlMixin = ReactIntl.IntlMixin;
//const FormattedMessage = ReactIntl.FormattedMessage;

import 'scss/main';

//@reactMixin.decorate(IntlMixin)
class App extends React.Component {
  render() {
    return (
      <div>
        <RouteHandler />
      </div>
    );
  }
}

export default App;
