import {fromJS, Map as iMap} from 'immutable';
import {push, replace} from 'react-router-redux';

export const FOOTER_SET_VISIBILITY = 'FOOTER_SET_VISIBILITY';
export const FOOTER_SET_DIMENSIONS =  'FOOTER_SET_DIMENSIONS';

const initialState = fromJS({
  visible: false,
  height: 0,
  width: 0,
  offset: {
    top: 0
  }
});

export default function reducer(state = initialState, action = { }) {
  switch(action.type) {
    case FOOTER_SET_VISIBILITY:
      return state.merge({
        visible: action.visible
      });
    case FOOTER_SET_DIMENSIONS:
      return state.merge({
        width: action.width,
        height: action.height,
        offset: action.offset
      });
    default:
      return state;
  }
}


export const setDimensions = (dispatch) => {
  return ({width, height, offset}) => {
    dispatch({
      type: FOOTER_SET_DIMENSIONS,
      height: height,
      widht: width,
      offset: offset
    });
  };
};


export const setVisibility = (dispatch) => {
  return (isVisible) => {
    dispatch({
      type: FOOTER_SET_VISIBILITY,
      visible: isVisible
    });
  }
}
