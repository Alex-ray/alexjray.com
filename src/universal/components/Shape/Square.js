// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import {
  squareShape,
  squareOutline,
  squareHalf
} from './shapes.less';

class Square extends Component {
  static propTypes = {
    outline: PropTypes.bool,
    half: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
    degree:  PropTypes.number
  };

  render () {
    const {
      outline,
      half,
      x,
      y,
      color,
      degree
    } = this.props;

    let classOptions = {
      [squareOutline]: outline,
      [squareHalf]: half
    };

    let styles = {
      top: y+'px',
      left: x+'px',
      transform: `rotate(${degree}deg)`
    };

    if (outline) {
      styles['borderColor'] = color;
    }  else {
      styles['background'] = color;
    }

    return (
      <i style={styles} className={classNames(squareShape, classOptions)}></i>
    );
  }
}

export default Square;
