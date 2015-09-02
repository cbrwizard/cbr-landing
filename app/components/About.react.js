import React from 'react';
import Router from 'react-router';
import Helmet from 'react-helmet';

const Link = Router.Link;

import Text from 'components/Text.react';
import styles from 'scss/components/_about';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '666'};
  }


  render() {
    return (
      <div className={styles.about}>
        <h1 className={styles.about__header}>Abouts Ninjssssaae Ocewan</h1>
        <Link to='index'>Main</Link>
        <Text text={this.state.text}/>

        <p className={styles.about__description}>Ninja Ocean is comprised of a team of passionate developers, hackers
          scientists, aimed to do good.</p>

        <Helmet
          title='Admin index'
          />
      </div>
    );
  }
}
