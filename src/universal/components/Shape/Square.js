// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import Shape from 'universal/Components/Shape/Shape.js'

import {
  squareShape,
  squareOutline,
  squareHalf
} from './shapes.less';

class Square extends Shape {
  static propTypes = {
    outline: PropTypes.bool,
    half: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string
  };

  render () {
    const {
      outline,
      half,
      x,
      y,
      color
    } = this.props;

    let classOptions = {
      [squareOutline]: outline,
      [squareHalf]: half
    };

    let styles = {
      top: x+'px',
      left: y+'px'
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
