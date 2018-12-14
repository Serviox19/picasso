import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
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
      <div className="header">
        <h2>Home header <br /> (Prob put img here!)</h2>
      </div>
    );
  }
}
