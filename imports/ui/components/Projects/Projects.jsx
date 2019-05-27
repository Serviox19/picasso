import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';
import { StyledProjects, Container, Section, Block } from './style.js'

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  blocks() {
    return [
      {"_id": 1, "name": "qc-site", "url": "http://quantifiedcommerce.com", "title": "Quantified Commerce", "description": "", "landing-img": ""},
      {"_id": 2, "name": "9h-landing", "url": "", "title": "9H-Nano Coating", "description": "", "landing-img": ""},
      {"_id": 3, "name": "sticky-pad", "url": "", "title": "MultiPurpose Gel Sticky Pad", "description": "", "landing-img": ""},
      {"_id": 4, "name": "phone-mount", "url": "", "title": "Automatic Locking Phone Mount", "description": "", "landing-img": ""},
      {"_id": 5, "name": "finance-app", "url": "", "title": "Finance App", "description": "", "landing-img": ""}
    ]
  }

  renderBlocks() {
    return this.blocks().map(block => {
      return (
        <Section key={block._id}>
          <a style={{textDecoration: 'none'}} href={block.url} target="_blank">
            <Block>
              <h2>{block.name}</h2>
            </Block>
          </a>
        </Section>
      )
    })
  }

  componentDidMount() {}

  render() {
    return (
      <StyledProjects>
        <Container>
          {this.renderBlocks()}
        </Container>
      </StyledProjects>
    );
  }
}
