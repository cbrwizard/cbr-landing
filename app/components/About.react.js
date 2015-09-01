import React from 'react';

import Text from 'components/Text.react';
import styles from 'scss/components/_about';

export default class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {text: '454'};
  }

  render() {
    return (
      <div className={styles.about}>
        <h1 className={styles.about__header}>Abouts Ninjssssaaea Ocean</h1>
        <Text text={this.state.text}/>

        <p className={styles.about__description}>Ninja Ocean is comprised of a team of passionate developers, hackers &
          scientists, aimed to do good.</p>
      </div>
    );
  }
}
