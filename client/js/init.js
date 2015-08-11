/**
 * Client start point
 */

import React from 'react';
import Greeting from "./../components/pages/index/greeting";

React.render(
  <Greeting name={'you'}/>,
  document.querySelector('.content')
);