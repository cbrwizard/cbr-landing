import React from 'react';

export default class Text extends React.Component {
  render() {
    return (
      <h2>{this.props.text}</h2>
    );
  }
}

Text.propTypes = {
  text: React.PropTypes.string,
};
