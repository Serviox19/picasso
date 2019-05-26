import React, { Component } from 'react';
import ResumeDesktop from '../pages/Desktop/Resume';
import ResumeMobile from '../pages/Mobile/Resume';

class ResumeLayout extends Component {
  constructor(props) {
    super(props);
  }

  //logic for resize here

  componentDidMount() {}

  render() {
    return (
      <React.Fragment>
        <h2>Render Resume Desktop or Mobile</h2>
      </React.Fragment>
    )
  }
}

export default ResumeLayout;
