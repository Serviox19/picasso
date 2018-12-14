import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Projects from '../../components/Projects';
import Header from '../../components/Header';
import About from '../../components/About';
import HomeMobile from '../Mobile/Mobile-Home';

export default class HomeDesktop extends Component {
  constructor(props) {
    super(props);
    this.state = { isDesktop: false };

    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.updateView();
    window.addEventListener("resize", this.updateView);

    //Scroll up and down detection/movement
    $(window).bind('mousewheel', function(event) {
      console.log(event.originalEvent);
      // event.preventDefault();
      if (event.originalEvent.deltaY > 0) {
        //scroll down
      } else {
        //scroll up
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateView);
  }

  updateView() {
    this.setState({ isDesktop: window.innerWidth >= 1000 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <React.Fragment>
        {isDesktop ?
          <div className="desktop-home-wrapper">
            <About />
            <Nav />
            <Header />
            <Projects />
          </div> : <HomeMobile />}
      </React.Fragment>

    )
  }
}
