import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <h3>{this.props.text}</h3>
    );
  }
}

Text.propTypes = {
  text: React.PropTypes.string,
};
