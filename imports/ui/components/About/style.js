import styled, { keyframes } from 'styled-components';


export const AboutSection = styled.div`
  min-height: 100vh;
  height: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #FFFFFF;
  padding: 2em 0 5em;
  font-family: 'HelveticaNeue', sans-serif
`

export const FirstIntro = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 50em;
  margin: 8em 0 0
`

export const IntroCopy = styled.h1`
  display: flex;
  flex-direction: column;
  margin-top: 8em;
  font-size: 2.5em;
  line-height: 4em;
  font-weight: 500
`

export const KnowMore = styled.h1`
  width: 100%;
  font-size: 6vw;
  margin: 4em auto;
  text-align: center
`

export const OverlayText = styled.h2`
  position: absolute;
  top: -0.5em;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  font-size: 4em
`

export const SecondIntro = styled.div`
  display: flex;
  flex-direction: column;
  width: 45em
`

export const SecondIntroCopy = styled.h1`
  display: block;
  font-size: 2.5em;
  line-height: 4em;
  font-weight: 500;
  padding-bottom: 4em
`


// export const visibleKeyframe = keyframes`
//   0% {
//     opacity: 0;
//     height: 0
//   }
//
//   50% {
//     opacity: 0.8
//   }
//
//   100% {
//     bottom: 0;
//     opacity: 1
//   }
// `
//
// &.about-visible {
//   display: flex !important;
//   height: 100vh;
//   animation: ${visibleKeyframe} 0.9s ease-in-out
// }
