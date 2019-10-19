import React, { Component } from 'react';
import BlogDesktop from '../pages/Desktop/Blog';
import BlogMobile from '../pages/Mobile/Blog';

class BlogLayout extends Component {
  constructor(props) {
    super(props)

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
    this.setState({ isDesktop: window.innerWidth >= 1000 })
  }

  render() {
    const isDesktop = this.state.isDesktop;

    return (
      <div id="blog-container">
        { isDesktop ? <BlogDesktop /> : <BlogMobile /> }
      </div>
    )
  }
}

export default BlogLayout;
