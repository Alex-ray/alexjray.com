// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import Shape from 'universal/Components/Shape/Shape.js';

import {
  circleShape,
  circleHalf,
  circleOutline
} from './shapes.less';

class Circle extends Shape {
  static propTypes = {
    outline: PropTypes.bool,
    half: PropTypes.bool,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
    degree:  PropTypes.number
  }

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
      [circleOutline]: outline,
      [circleHalf]: half
    };

    let styles = {
      top: y+'px',
      left: x+'px',
      'transform': `rotate(${degree}deg)`
    };

    if (outline) {
      styles['borderColor'] = color;
    }  else {
      styles['background'] = color;
    }

    return (
      <i style={styles} className={classNames(circleShape, classOptions)}></i>
    );
   }
}

export default Circle;
