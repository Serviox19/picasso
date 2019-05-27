import styled, { css } from 'styled-components';

export const StyledNav = styled.aside`
  visibility: inherit;
  opacity: 1
`

export const NavLeft = styled.div`
  position: fixed;
  left: 50px;
  z-index: 100;
  transform: rotateZ(-90deg) translateX(-50%);
  transform-origin: 0 50%;
  top: 50%
`

export const Wrapper = styled.div`
  display: inline-block;
  padding: 10px
`

export const AboutToggle = styled.h3`
  color: ${props => props.aboutVisible ? "#FFFFFF" : "blue"};
  opacity: .5;
  white-space: nowrap;
  cursor: pointer;
  -webkit-transition: opacity .3s;
  transition: opacity .3s
`
