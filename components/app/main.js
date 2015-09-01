import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';
import ReactIntl from 'react-intl';
import reactMixin from 'react-mixin';

const IntlMixin = ReactIntl.IntlMixin;
const Link = Router.Link;
const RouteHandler = Router.RouteHandler;
const FormattedMessage = ReactIntl.FormattedMessage;

/**
 * @TODO: probably we need to create a separate app for admin and regular too
 */
@reactMixin.decorate(IntlMixin)
class App extends React.Component {
  render() {
    return (
      <div>
        <header>
          <ul>
            <li><Link to='app'>App</Link></li>
            <li><Link to='index'>Index</Link></li>
            <li><Link to='admin'>Admin</Link></li>
          </ul>
        </header>
        <FormattedMessage
          message={this.getIntlMessage('photos')}
          name='Annie'
          numPhotos={1000}
          takenDate={Date.now()}/>

        <Helmet
          title='Hello'
          titleTemplate='%s | Project'
          meta={[
            {'name': 'description', 'content': 'Super interesting project page'},
          ]}
          />
        <RouteHandler/>
      </div>
    );
  }
}

module.exports = App;
