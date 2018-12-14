import React, { Component } from 'react';

class Nav extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <aside id="nav">
        <div className="nav-left">
          <div className="wrapper">
            <h3 id="about-toggle">About</h3>
          </div>
        </div>
      </aside>
    );
  }
}

export default Nav;
