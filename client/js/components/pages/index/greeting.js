import React from "react";

class Greeting extends React.Component {
  render() {
    return (
      <div className="greeting">
        Hello, {this.props.name}!
      </div>
    );
  }
}

Greeting.propTypes = {name: React.PropTypes.string};
Greeting.defaultProps = {name: 'somebody'};

module.exports = Greeting;
