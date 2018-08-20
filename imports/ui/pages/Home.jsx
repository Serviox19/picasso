import React, { Component } from 'react';
import Nav from '../components/Nav';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <React.Fragment>
        <Nav />
      </React.Fragment>
    )
  }
}
