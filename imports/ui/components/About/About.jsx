import React, { Component } from 'react';
import styled from 'styled-components';
import { AboutOverlay } from './style.js';

export default class About extends Component {
  constructor(props) {
    super(props);

    console.log(props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  componentDidMount() {}

  render() {
    return (
      <AboutOverlay visible={this.props.visible} id="about-overlay">
        <h1>About Overlay</h1>
      </AboutOverlay>
    );
  }
}
