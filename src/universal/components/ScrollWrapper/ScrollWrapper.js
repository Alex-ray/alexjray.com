// Libraries
import React, {Component, PropTypes} from 'react';

class ScrollWrapper extends Component {
  static propTypes = {
    onWindowScroll: PropTypes.func,
    onScrollDimensions: PropTypes.func
  };

  handleScroll (callback) {
    return function (event) {
      // Call the passed-in prop
      if (callback) callback(event, this.scrollY, this.scrollX);
    };
  }

  render () {
    return (this.props.children);
  }

  componentDidMount () {
    if (this.props.onScrollDimensions && typeof window !== "undefined") {
      let body = window.document.body;
      let html = window.document.documentElement;
      let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
      let width  = Math.max( body.scrollWidth, body.offsetHeight, html.clientWidth, html.scrollWidth, html.offsetWidth );
      this.props.onScrollDimensions({x: width, y: height});
    }

    if (this.props.onWindowScroll && window) {
      window.addEventListener("scroll", this.handleScroll(this.props.onWindowScroll));
    }
  }

  componentWillUnmount () {
    if (this.props.onWindowScroll && window) {
      window.removeEventListener("scroll", this.handleScroll(this.props.onWindowScroll));
    }
  }
};

export default ScrollWrapper;
