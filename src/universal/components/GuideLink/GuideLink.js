import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';

class GuideLink extends Component {
  static propTypes = {
    handleClick: PropTypes.func
  };

  handleClick = (event) => {
    event.preventDefault();
    event.stopPropagation();
    this.props.handleClick();
  }

  render () {

    return (
      <Link to="/about" className={this.props.className}>
        Guide
      </Link>
    );
  }
}

export default GuideLink;
