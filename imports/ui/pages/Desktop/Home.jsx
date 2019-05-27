import React, { Component } from 'react';
import Nav from '../../components/Navigation/Nav';
import Projects from '../../components/Projects/Projects';
import Header from '../../components/Header/Desktop';
import About from '../../components/About/About';
import Scrollbar from 'smooth-scrollbar';

export default class HomeDesktop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      aboutToggled: false
    }

    console.log(this.state);
  }

  toggleAbout() {
    console.log('hit');
    this.setState({ aboutToggled: !this.state.aboutToggled })
  }


  componentDidMount() {
    $('.header').css({
      'opacity': '1',
      'transition': 'all .8s ease-in'
    });

    $('#about-toggle').on('click', function (event) {
      $('#about-overlay').toggleClass('about-visible');

      if ($('#about-overlay').hasClass('about-visible')) {
        $('#about-toggle').html('Close');
      } else {
        $('#about-toggle').html('About');
      }
    });

    $('.about-visible').on('click', function () {
      $('#about-overlay').toggleClass('about-visible');
      $('#about-toggle').html('About');
    });
  }

  render() {

    return (
      <div className="desktop-home-wrapper">
        <About visible={this.state.aboutToggled} />
        <Nav aboutVisible={this.state.aboutToggled} toggleAbout={() => this.toggleAbout()} />
        <Header />
        <Projects />
      </div>
    )
  }
}
