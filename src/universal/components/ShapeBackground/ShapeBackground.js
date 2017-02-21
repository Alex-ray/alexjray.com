// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Square from 'universal/components/Shape/Square.js';
import Circle from 'universal/components/Shape/Circle.js';

// Styles
import {container} from './ShapeBackground.less';

//Utils
import poissonDiscSampler from 'universal/utils/PoissonDiscSampler.js';


// TODO: Randomly layout out shapes
// Hook up scrolling events to move shapes with a parallax affect
// Hook up mouseEnter and mouseLeave events so mouse can interact with shapes

class ShapeBackground extends Component {
  static propTypes = {
    offset: PropTypes.object,
    scrollHeight: PropTypes.number,
    scrollWidth: PropTypes.number
  };

  getRandomColor() {
    let num = Math.random()*100;

    let green  = '#C3DAAF';
    let red    = '#EDCACF';
    let orange = '#E9C9AC';
    let blue   = '#C6EAE0';

    if (num > 0 && num < 25) {
      return green;
    } else if (num > 25 && num < 50) {
      return red;
    } else if (num > 50 && num < 75) {
      return orange;
    } else if (num > 75) {
      return blue;
    }
  }

  getRandomShape() {
    let num = Math.random()*100;

    if (num > 0 && num < 16) {
      return 'square';
    } else if (num > 16 && num < 32) {
      return 'square-outline';
    } else if (num > 32 && num < 48) {
      return 'circle-outline';
    } else if (num > 48 && num < 64) {
      return 'circle';
    } else if (num > 64 && num < 80) {
      return 'square-outline-half';
    } else if (num > 80) {
      return 'circle-outline-half';
    }
  }

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


  getRandomPosition (maxX, maxY) {
    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY)
    };
  }

  getRandomDegree ( ) {
    return Math.floor(Math.random() * 360);
  }

  constructor (props) {
    super(props);
    this.state = {
      shapes: []
    };
  }

  getShapes(limit) {
    let shapes = [];

    const {
      scrollHeight,
      scrollWidth
    } = this.props;

    const sampler = poissonDiscSampler(scrollWidth, scrollHeight, 200);

    for (var i = 0; i < limit; i++) {
      let degree    = this.getRandomDegree();
      let color     = this.getRandomColor();
      let position  = sampler() || [];
      let cordinates = {x: position[0] , y: position[1]};
      let shape = this.getRandomShape();

      if (position.length > 0) {
        shapes.push({
          shape: shape,
          color: color,
          cordinates: cordinates,
          degree: degree,
          index: i
        });
      }
    }

    return shapes;
  }

  componentDidUpdate () {
    const {
      props: {
        scrollHeight,
        scrollWidth
      },
      state: {
        shapes
      }
    } = this ;

    if ( scrollHeight > 0 && scrollWidth > 0 && shapes.length === 0) {
      let shapes = this.getShapes(30);
      this.setState({shapes: shapes});
    }
  }

  render () {

    const {
      props: {
        scrollHeight,
        scrollWidth,
        offset: {
          x,
          y
        },
      },
      state: {
        shapes
      }
    } = this;

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
      let el = this.getShape(shape.shape, shape.color, cordinates, shape.degree, shape.index);
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
