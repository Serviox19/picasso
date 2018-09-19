import React, { Component } from 'react';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    $(document).ready(function () {
      $('.header').css({
        'opacity': '1',
        'transition': 'all .8s ease-in'
      });
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
