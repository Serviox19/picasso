import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(window).scroll(function () {
      if ($(window).scrollTop() < 60) {
        $('#mobile_nav').removeClass('fixed');
      }
      if ($(window).scrollTop() > 60) {
        $('#mobile_nav').addClass('fixed');
      }
    });

    $('#nav-icon').on('click', function () {
      $(this).toggleClass('open');
      $('#mobile_nav').find('.overlay-menu > li').toggleClass('toggled');
    });

    $('.overlay-menu > li > a').on('click', function () {
      $('#nav-icon').toggleClass('open');
      $('#mobile_nav').find('.overlay-menu > li').toggleClass('toggled');
    });
  }

  render() {
    return (
      <nav id="mobile_nav">
        <div className="wrapper">
          <a className="title">
            <h1>Servio.io</h1></a>
          <div id="nav-icon">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <ul className="overlay-menu">
            <li><a>About</a></li>
            <li><a>Cases</a></li>
            <li><a href="/blog">Blog</a></li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
