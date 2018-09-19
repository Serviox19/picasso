import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {

  }

  render() {
    return (
      <nav id="nav">
        <div className="nav-left">
          <div className="wrapper">
            <h3>About</h3>
          </div>
        </div>
      </nav>
    );
  }
}

export default Nav;
