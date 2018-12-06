import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div id="main-container">
        {this.props.content}
      </div>
    );
  }
}

export default App;
