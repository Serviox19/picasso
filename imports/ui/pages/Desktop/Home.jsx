import React, { Component } from 'react';
import Nav from '../components/Nav';
import Cases from '../components/Cases';
import Header from '../components/Header';

export default class Home extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="home-wrapper">
        <Nav />
        <Header />
        <Cases />
      </div>
    )
  }
}
