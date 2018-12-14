import React, { Component } from 'react';

export default class Projects extends Component {
  constructor(props) {
    super(props);
  }

  blocks() {
    return [
      {"title": "Project 1"},
      {"title": "Project 2"},
      {"title": "Project 3"}
    ]
  }

  renderBlocks() {
    return this.blocks().map(block => {
      return (
        <section key={block.title}>
          <div className="block">
            <h2>{block.title}</h2>
          </div>
        </section>
      )
    })
  }

  componentDidMount() {
    //jquery
  }

  render() {
    return (
      <div className="projects">
        <div className="container">
          {this.renderBlocks()}
        </div>
      </div>
    );
  }
}
