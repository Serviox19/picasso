import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Projects from '../../components/Projects';
import Header from '../../components/Header';
import About from '../../components/About';
import Scrollbar from 'smooth-scrollbar';

export default class HomeDesktop extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div className="desktop-home-wrapper">
        <About />
        <Nav />
        <Header />
        <Projects />
      </div>
    )
  }
}
