// Libraries
import React, {Component, PropTypes} from 'react';
import classNames from 'classnames';

import Square from 'universal/components/Shape/Square.js';
import Circle from 'universal/components/Shape/Circle.js';

// MouseEnter ru/ MouseLeave Events
// number clientX
// number clientY
// boolean ctrlKey
// boolean getModifierState(key)
// boolean metaKey
// number pageX
// number pageY
// DOMEventTarget relatedTarget
// number screenX
// number screenY

function getShape(type, x, y, color = '#222222', degree = 0) {
  if (type === 'square') {
    return (<Square x={x} y={y} degree={degree} color={color}/>);
  } else if (type === 'square-outline') {
    return (<Square x={x} y={y} degree={degree} color={color} outline/>);
  } else if (type === 'circle-outline') {
    return (<Circle x={x} y={y} degree={degree} color={color} outline/>);
  } else if (type === 'circle') {
    return (<Circle x={x} y={y} degree={degree} color={color}/>);
  } else if (type === 'square-outline-half') {
    return (<Square x={x} y={y} degree={degree} color={color} outline half/>);
  } else if (type === 'circle-outline-half') {
    return (<Circle x={x} y={y} degree={degree} color={color} outline half/>);
  }
}

class Shape extends Component {
  static propTypes = {
    type: PropTypes.string.isRequired,
    x: PropTypes.number,
    y: PropTypes.number,
    color: PropTypes.string,
    degree:  PropTypes.number
  };

  render () {
    const {
      type,
      x,
      y,
      // Optional
      color,
      degree,
    } = this.props;

    return getShape(type, x, y, color, degree);
  }
};

export default Shape;
