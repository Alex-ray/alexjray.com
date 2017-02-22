import {fromJS, Map as iMap} from 'immutable';
import {push, replace} from 'react-router-redux';

export const SCROLL_SET_OFFSETS    = 'SCROLL_SET_OFFSETS';
export const SCROLL_SET_DIMENSIONS = 'SCROLL_SET_DIMENSIONS';

const initialState = fromJS({
  offsets: {
    x: 0,
    y: 0,
  },
  scrollHeight: 0,
  scrollWidth: 0
});

export default function reducer(state = initialState, action = { }) {
  switch(action.type) {
    case SCROLL_SET_OFFSETS:
      return state.merge({
        offsets: {
          x: action.x,
          y: action.y
        }
      });
    case SCROLL_SET_DIMENSIONS:
      return state.merge({
        scrollHeight: action.height,
        scrollWidth: action.width
      });
    default:
      return state;
  }
}

export const setScrollDimensions = (dispatch) => {
  return ({x, y}) => {
    dispatch({
      type: SCROLL_SET_DIMENSIONS,
      height: y,
      width: x
    });
  }
}

export const setScrollOffsets = (dispatch) => {
  return ({x, y}) => {
    dispatch({
      type: SCROLL_SET_OFFSETS,
      x: x,
      y: y
    });
  }
}
