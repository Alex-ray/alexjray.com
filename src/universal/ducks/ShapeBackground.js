import {fromJS, Map as iMap} from 'immutable';
import {push, replace} from 'react-router-redux';

//Utils
import poissonDiscSampler from 'universal/utils/PoissonDiscSampler.js';

export const SHAPE_BACKGROUND_SET_SHAPES = 'SHAPE_BACKGROUND_SET_SHAPES';
export const SHAPE_BACKGROUND_SET_DIMENSIONS = 'SHAPE_BACKGROUND_SET_DIMENSIONS';

function getRandomDegree ( ) {
  return Math.floor(Math.random() * 360);
}

function getRandomColor() {
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

function getRandomShape() {
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


function generateShapes(maxWidth, maxHeight) {
  let shapes = [];

  // Not sure what this means.... 🤔
  let spread = 150;

  const sampler = poissonDiscSampler(maxWidth, maxHeight, spread);

  let sample = [];
  while (sample = sampler()) {
    let degree    = getRandomDegree();
    let color     = getRandomColor();
    let coordinates = {x: sample[0] , y: sample[1]};
    let shape = getRandomShape();

    let shapeConfig = {
      color: color,
      type: shape,
      degree: degree,
      coordinates: coordinates
    };

    shapes.push(shapeConfig);
  }

  return shapes;
}

const initialState = fromJS({
  shapes: [],
  width: 0,
  height: 0
});

export default function reducer(state = initialState, action = { }) {
  switch(action.type) {
    case SHAPE_BACKGROUND_SET_SHAPES:
      return state.merge({
        shapes: action.shapes
      });
    case SHAPE_BACKGROUND_SET_DIMENSIONS:
      return state.merge({
        width: action.width,
        height: action.height
      });
    default:
      return state;
  }
}

export const setShapeDimensions = (dispatch) => {
  return (maxWidthPosition, maxHeightPosition) => {
    dispatch({
      type: SHAPE_BACKGROUND_SET_DIMENSIONS,
      width: maxWidthPosition,
      height: maxHeightPosition
    });
  }
}

export const setShapes = (dispatch) => {
  return (maxWidthPosition, maxHeightPosition) => {
    let shapes = generateShapes(maxWidthPosition, maxHeightPosition)
    dispatch({
      type: SHAPE_BACKGROUND_SET_SHAPES,
      shapes: shapes
    });
  }
}
