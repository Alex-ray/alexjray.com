// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import {
  logo,
  positionTop,
  positionBottom
} from './logo.less';

class Logo extends Component {
  static propTypes = {
    top: PropTypes.bool,
    bottom: PropTypes.bool
  };

  render () {

    const {
      top,
      bottom
    } = this.props;

    let classOptions = {
      [positionTop]: top,
      [positionBottom]: bottom
    };

    return (
      <i className={classNames(logo, classOptions)}></i>
    );
  }
}

export default Logo;
