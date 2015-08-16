import Helmet from "react-helmet";
import React from "react";

import './greeting.css';

class Main extends React.Component {
  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!

        <Helmet
          title='Home'
          />
      </div>
    );
  }
}

Main.propTypes = {name: React.PropTypes.string};
Main.defaultProps = {name: 'somebody'};

module.exports = Main;
