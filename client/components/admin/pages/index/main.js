import React from 'react';
import Router from 'react-router';

const Link = Router.Link;

class Main extends React.Component {
  render() {
    return (
      <ul>
        <li><Link to='index'>Index</Link></li>
        <li>We're on admin!</li>
      </ul>
    );
  }
}

module.exports = Main;
