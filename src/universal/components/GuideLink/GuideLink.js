import React, {Component, PropTypes} from 'react';

class GuideLink extends Component {
  static propTypes = {
    handleClick: PropTypes.func
  };

  render () {
    const {
      handleClick
    } = this.props;

    return (
      <a href="#" onClick={handleClick} className={this.props.className}>
        Guide
      </a>
    );
  }
}

export default GuideLink;
