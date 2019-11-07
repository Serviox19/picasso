import React, { Component } from 'react';
import Nav from '../../components/Navigation/Nav';
import Projects from '../../components/Projects/Projects';
import Header from '../../components/Header/Header';
import About from '../../components/About/About';

export default class HomeDesktop extends Component {
  constructor(props) {
    super(props);

    this.state = {}

    console.log(this.state);
  }


  componentDidMount() {

    $('.header').css({
      'opacity': '1',
      'transition': 'all .8s ease-in'
    });
  }

  render() {

    return (
      <React.Fragment>
        <Nav />
        <Header />
        <div className="desktop-home-wrapper">
          <About />
          <Projects />
        </div>
      </React.Fragment>
    )
  }
}
