import React, {Component, PropTypes} from 'react';

class MenuLink extends Component {
  render () {
    return (
      <a className={this.props.className}>
        Guide
      </a>
    );
  }
}

export default MenuLink;
