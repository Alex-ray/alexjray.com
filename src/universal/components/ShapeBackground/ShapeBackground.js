// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Square from 'universal/components/Shape/Square.js';
import Circle from 'universal/components/Shape/Circle.js';

// Styles
import {container} from './ShapeBackground.less';


const REF_SHAPE_BACKGROUND = 'REF_SHAPE_BACKGROUND';


class ShapeBackground extends Component {
  static propTypes = {
    offset: PropTypes.object,
    shapes: PropTypes.array,
    scrollHeight: PropTypes.number,
    scrollWidth: PropTypes.number,
    setDimensions: PropTypes.func
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
      <div ref={this.setRef(REF_SHAPE_BACKGROUND)} className={container}>
        {shapeEls}
      </div>
    );
  }

  setRef (key) {
    return (ref) => {
      this[key] = ref;
    };
  }

  componentDidMount () {
    let el = this[REF_SHAPE_BACKGROUND];
    this.props.setDimensions(el.clientWidth, el.clientHeight);
  }


}

export default ShapeBackground;
