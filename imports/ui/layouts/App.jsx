import React, { Component } from 'react';

//Layouts
import { DesktopLayout } from '../layouts/Desktop';
import { MobileLayout } from '../layouts/Mobile';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { isDesktop: false };

    this.updateView = this.updateView.bind(this);
  }

  componentDidMount() {
    this.updateView();
    window.addEventListener("resize", this.updateView);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateView);
  }

  updateView() {
    this.setState({ isDesktop: window.innerWidth >= 900 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div id="main-container">
        {isDesktop ? <DesktopLayout /> : <MobileLayout /> }
      </div>
    );
  }
}

export default App;
