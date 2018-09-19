import React, { Component } from 'react';

export default class Cases extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="cases">
        <div className="container">
          <section>
            <h2>Project 1</h2>
          </section>
        </div>
        <div className="container">
          <section>
            <h2>Project 2</h2>
          </section>
        </div>
        <div className="container">
          <section>
            <h2>Project 3</h2>
          </section>
        </div>
      </div>
    );
  }
}
