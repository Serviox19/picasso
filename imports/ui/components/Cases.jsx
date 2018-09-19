import React, { Component } from 'react';

export default class Cases extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="cases">
        <section>
          <h2>Project 1</h2>
        </section>
        <section>
          <h2>Project 2</h2>
        </section>
        <section>
          <h2>Project 3</h2>
        </section>
      </div>
    );
  }
}
