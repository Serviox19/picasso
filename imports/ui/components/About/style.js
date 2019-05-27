import styled, { keyframes } from 'styled-components';

export const visibleKeyframe = keyframes`
  0% {
    opacity: 0;
    height: 0
  }

  50% {
    opacity: 0.8
  }

  100% {
    bottom: 0;
    opacity: 1
  }
`

export const AboutOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background: #000;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center

  &.about-visible {
    display: flex !important;
    height: 100vh;
    animation: ${visibleKeyframe} 0.9s ease-in-out
  }
`
