import React, { Component } from 'react';
import Nav from '../../components/Nav';
import Cases from '../../components/Cases';
import Header from '../../components/Header';
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
            <Nav />
            <Header />
            <Cases />
          </div> : <HomeMobile />}
      </React.Fragment>

    )
  }
}
