import React, { Component } from 'react';
import Scrollbar from 'smooth-scrollbar';
import styled from 'styled-components';
import { StyledProjects, Container, Section, Block } from './style.js'

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: {
        all: true,
        ecommerce: false,
        side_project: false
      }
    }
  }

  blocks() {
    return [
      {"_id": 1, "name": "qc-site", "type": "front_end", "url": "http://quantifiedcommerce.com", "title": "Quantified Commerce Website", "description": "", "landing-img": ""},
      {"_id": 2, "name": "9h-page", "type": "ecommerce", "url": "", "title": "9H-Nano Car Coating", "description": "Custom ecommerce webpage for our popular and great selling car polish", "landing-img": ""},
      {"_id": 3, "name": "phone-mount", "type": "ecommerce", "url": "", "title": "Automatic Locking Phone Mount", "description": "", "landing-img": ""},
      {"_id": 4, "name": "sticky-pad", "type": "ecommerce", "url": "", "title": "Best Gel Pad", "description": "", "landing-img": ""},
      {"_id": 5, "name": "laundry-betty", "type": "ecommerce", "url": "", "title": "Laundry Betty", "description": "", "landing-img": ""},
      {"_id": 6, "name": "fur-brush", "type": "", "url": "", "title": "", "description": "Magic Fur Brush", "landing-img": ""},
      {"_id": 7, "name": "", "type": "", "url": "", "title": "", "description": "", "landing-img": ""},
      {"_id": 8, "name": "", "type": "", "url": "", "title": "", "description": "", "landing-img": ""},
      {"_id": 9, "name": "", "type": "", "url": "", "title": "", "description": "", "landing-img": ""},
      {"_id": 10, "name": "", "type": "", "url": "", "title": "", "description": "", "landing-img": ""}
    ]
  }

  renderBlocks() {
    let type;
    // update variable type with current state
    // this.state.projetcs.all ? type = 'all' : null;
    // this.state.projects.ecommerce ? type = 'ecommerce' : null;

    return this.blocks().filter((project) => {
      return project.type === `${type}`;
    }).map((project) => {
      return (
        <Section key={project._id}>
          <a style={{textDecoration: 'none'}} href={project.url} target="_blank">
            <Block>
              <h2>{project.name}</h2>
            </Block>
          </a>
        </Section>
      )
    })
  }

  componentWillUpdate() {}

  componentDidMount() {}

  render() {
    return (
      <StyledProjects>
        <div>
          <button onClick={() => this.setState({  })}>All</button>
          <button onClick={() => this.setState({  })}>Ecommerce</button>
        </div>
        <Container>
          {this.renderBlocks()}
        </Container>
      </StyledProjects>
    );
  }
}
