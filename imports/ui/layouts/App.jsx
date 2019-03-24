import React, { Component } from 'react';
import HomeDesktop from '../pages/Desktop/Home';
import HomeMobile from '../pages/Mobile/Mobile-Home';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = { isDesktop: false }

    this.updateView = this.updateView.bind(this)
  }

  componentDidMount() {
    this.updateView();
    window.addEventListener("resize", this.updateView);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateView);
  }

  updateView() {
    this.setState({ isDesktop: window.innerWidth >= 1000 });
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div id="main-container">
        { isDesktop ? <HomeDesktop /> : <HomeMobile /> }
      </div>
    );
  }
}

export default App;
