import React, { Component } from 'react';
import styled from 'styled-components';
import { AboutToggle, StyledNav, NavLeft, Wrapper } from './styles.js';

class Nav extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);
  }

  componentDidUpdate() {
    console.log(this.props);
  }

  componentDidMount() {}

  render() {
    return (
      <StyledNav id="nav">
        <NavLeft>
          <Wrapper>
            <AboutToggle
              id="about-toggle"
              aboutVisible={this.props.aboutVisible}
              onClick={this.props.toggleAbout}>About
            </AboutToggle>
          </Wrapper>
        </NavLeft>
      </StyledNav>
    );
  }
}

export default Nav;
