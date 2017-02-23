import React, {Component, PropTypes} from 'react';

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
      <a href="#" onClick={this.handleClick} className={this.props.className}>
        Guide
      </a>
    );
  }
}

export default GuideLink;
