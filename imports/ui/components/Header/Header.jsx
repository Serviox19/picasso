import React, { Component } from 'react';
import styled from 'styled-components';
import { StyledHeader } from './style.js';

export default class Header extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <StyledHeader className="header">
        <h2></h2>
      </StyledHeader>
    );
  }
}
