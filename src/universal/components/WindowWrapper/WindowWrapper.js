// TODO: Abstract this and open source it : )

// Libraries
import React, {Component, PropTypes} from 'react';

const HAS_WINDOW = typeof window !== "undefined";

class WindowWrapper extends Component {
  static propTypes = {
    handleScroll: PropTypes.func,
    handleOnMouseMove: PropTypes.func,
    handleWindowDimensions: PropTypes.func,
    children: PropTypes.any
  };

  handleScroll(callback) {
    return function () {
      if (callback) {
        callback({x: this.srcollX, y: this.scrollY });
      }
    };
  }

  render () {
    return (this.props.children);
  }

  componentDidMount () {
    const {
      handleWindowDimensions,
      handleScroll,
      handleOnMouseMove
    } = this.props;

    if (HAS_WINDOW) {
      if (handleWindowDimensions) {
        let body   = window.document.body;
        let html   = window.document.documentElement;
        let height = Math.max( body.scrollHeight, body.offsetHeight, html.clientHeight, html.scrollHeight, html.offsetHeight );
        let width  = Math.max( body.scrollWidth, body.offsetHeight, html.clientWidth, html.scrollWidth, html.offsetWidth );
        handleWindowDimensions({width: width, height: height});
      }

      if (handleScroll) {
        window.addEventListener("scroll", this.handleScroll(handleScroll));
      }

      if (handleOnMouseMove) {
        window.addEventListener("mousemove", handleOnMouseMove);
      }

    }
  }

  componentWillUnmount () {
    const {
      handleWindowDimensions,
      handleScroll,
      handleOnMouseMove
    } = this.props;

    if (HAS_WINDOW) {
      if (handleScroll) {
        window.removeEventListener("scroll", handleScroll);
      }

      if (handleOnMouseMove) {
        window.removeEventListener("mousemove", handleOnMouseMove);
      }
    }
  }
};

export default WindowWrapper;
