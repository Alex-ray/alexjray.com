// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Square from 'universal/components/Shape/Square.js';
import Circle from 'universal/components/Shape/Circle.js';

// Styles
import {container} from './ShapeBackground.less';


class ShapeBackground extends Component {
  static propTypes = {
    offset: PropTypes.object,
    shapes: PropTypes.array,
    scrollHeight: PropTypes.number,
    scrollWidth: PropTypes.number
  };

  getShape(shape, color, cordinates, degree, index) {
    if (shape === 'square') {
      return (<Square key={index} x={cordinates.x} y={cordinates.y} degree={degree} color={color}/>);
    } else if (shape === 'square-outline') {
      return (<Square key={index} x={cordinates.x} y={cordinates.y} degree={degree} color={color} outline/>);
    } else if (shape === 'circle-outline') {
      return (<Circle key={index} x={cordinates.x} y={cordinates.y} degree={degree} color={color} outline/>);
    } else if (shape === 'circle') {
      return (<Circle key={index} x={cordinates.x} y={cordinates.y} degree={degree} color={color}/>);
    } else if (shape === 'square-outline-half') {
      return (<Square key={index} x={cordinates.x} y={cordinates.y} degree={degree} color={color} outline half/>);
    } else if (shape === 'circle-outline-half') {
      return (<Circle key={index} x={cordinates.x} y={cordinates.y} degree={degree} color={color} outline half/>);
    }
  }

  render () {

    const {
      shapes,
      scrollHeight,
      offset: {
        x,
        y
      }
    } = this.props;
    // max pixel offset 20

    let ratio = (y/scrollHeight);
    let diff  =  ratio * 150;

    let shapeEls = [];

    for (var i = 0; i < shapes.length; i++) {
      let shape = shapes[i];
      let cordinates = {
        y: shape.cordinates.y + diff,
        x: shape.cordinates.x
      };
      let el = this.getShape(shape.shape, shape.color, cordinates, shape.degree, i);
      shapeEls.push(el);
    }

    return (
      <div className={container}>
        {shapeEls}
      </div>
    );
  }
}

export default ShapeBackground;
