import './greeting.css';

import React from "react";

class Main extends React.Component {
  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
}

Main.propTypes = {name: React.PropTypes.string};
Main.defaultProps = {name: 'somebody'};

module.exports = Main;
