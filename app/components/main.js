import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

const Link = Router.Link;

class Main extends React.Component {
  render() {
    return (
      <div className='greeting'>
        Hello, {this.props.name}!!

        <Link to='about'>aboust</Link>

        <Helmet
          title='Home'
          />
      </div>
    );
  }
}

Main.propTypes = {name: React.PropTypes.string};
Main.defaultProps = {name: 'somebody'};

export default Main;
