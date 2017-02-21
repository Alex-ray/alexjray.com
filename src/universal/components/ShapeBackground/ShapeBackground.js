// Libraries
import React, {Component, PropTypes} from 'react';

// Components
import Square from 'universal/components/Shape/Square.js';
import Circle from 'universal/components/Shape/Circle.js';

// Styles
import {container} from './ShapeBackground.less';


// TODO: Randomly layout out shapes
// Hook up scrolling events to move shapes with a parallax affect
// Hook up mouseEnter and mouseLeave events so mouse can interact with shapes

class ShapeBackground extends Component {
  render () {
    let green  = '#C3DAAF';
    let red    = '#EDCACF';
    let orange = '#E9C9AC';
    let blue   = '#C6EAE0';


    return (
      <div className={container}>
        <Square x={75} y={150} color={green}/>
        <Square x={175} y={180} color={red} outline/>
        <Square x={190} y={150} color={blue} outline half/>
        <Square x={690} y={250} color={orange} outline half/>

        <Circle x={575} y={250} color={green}/>
        <Circle x={575} y={280} color={red} outline/>
        <Circle x={190} y={150} color={blue} outline half/>
        <Circle x={490} y={150} color={orange} outline half/>
      </div>
    );
  }
}

export default ShapeBackground;
