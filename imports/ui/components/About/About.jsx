import React, { Component } from 'react';
import styled from 'styled-components';
import { AboutSection, FirstIntro, OverlayText, IntroCopy, KnowMore, SecondIntro, SecondIntroCopy, Emoji } from './style.js';

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidUpdate() {}

  componentDidMount() {}

  render() {
    return (
      <AboutSection id="about-section">

        <FirstIntro>
          <img src="https://via.placeholder.com/500x600" />
          <OverlayText>Web Dev</OverlayText>
          <IntroCopy>Hi My name is Servio. I'm a Web Developer and I build pretty cool stuff. Some people call me a Front End Dev, others call me an Engineer, and others just think I'm super cool and smart. What do you think?</IntroCopy>
        </FirstIntro>

        <KnowMore>WANT TO KNOW MORE???</KnowMore>

        <SecondIntro>
          <SecondIntroCopy>Ok, so lets keep this brief shall we? So... I'm a young and ambitious Developer who has always been super interested in tech. My background is in Information Technology / Network Administration, but I quickly figured out that being a Dev was definately for me!</SecondIntroCopy>

          <SecondIntroCopy>I've mostly worked in Ecommerce which I find absoloutely fascinating. Developing Websites, Landing Pages, Maketing funnels has taught me alot about what it really takes to compete in the growing world of Ecommerce and win peoples money. Besides Ecommerce and Front End, I have taken a massive interest in Data Science and Blockchain Technology. I see myself moving into those fields one day, and I can't wait to see what the future has in store for me.</SecondIntroCopy>

          <SecondIntroCopy>In the meantime, I enjoy building things and continuing to learn more and expand my knowledge and skillset as a Developer. I'd welcome any freelance opportiunites and the chance to collaborate with anyone building exciting cool stuff. Well... anyways, keep scrolling theres more to see.  <Emoji>😉</Emoji></SecondIntroCopy>
        </SecondIntro>
      </AboutSection>
    );
  }
}
