// Start entry for app

import Person from './person'

let person = new Person('niu');
person.sayHi();

import React from "react";
import Greeting from "./greeting";

React.render(
  <Greeting name={person.name}/>,
  document.body
);