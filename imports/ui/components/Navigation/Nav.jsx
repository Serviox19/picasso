import React, { Component } from 'react';
import styled from 'styled-components';
import { AboutToggle, StyledNav, NavLeft, Wrapper } from './styles.js';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <StyledNav as="aside" id="nav">
        <NavLeft as="div">
          <Wrapper>
            <AboutToggle id="about-toggle">About</AboutToggle>
          </Wrapper>
        </NavLeft>
      </StyledNav>
    );
  }
}

export default Nav;
