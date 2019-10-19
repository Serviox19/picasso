import React, { Component } from 'react';
import styled from 'styled-components';
import { AboutLink, BlogLink, ProjetcsLink, StyledNav, NavLeft, Wrapper } from './styles.js';

class Nav extends Component {
  constructor(props) {
    super(props);

    console.log(this.props);

    this.handleProjectsClick = this.handleProjectsClick.bind(this)
    this.handleBlogLink = this.handleBlogLink.bind(this)
  }

  handleBlogLink() {
    window.location = '/blog';
  }

  handleProjectsClick() {
    alert('event worked')
    //code to scroll to projects section
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
            <AboutLink
              id="about-toggle"
              onClick={this.props.toggleAbout}>About
            </AboutLink>
            <BlogLink
              id="blog-link"
              onClick={this.handleBlogLink}>Blog</BlogLink>
            <ProjetcsLink
              id="projects-link"
              onClick={this.handleProjectsClick}>Projects
            </ProjetcsLink>
          </Wrapper>
        </NavLeft>
      </StyledNav>
    );
  }
}

export default Nav;
