import {fromJS, Map as iMap} from 'immutable';
import {push, replace} from 'react-router-redux';

export const FOOTER_SET_VISIBILITY = 'FOOTER_SET_VISIBILITY';

const initialState = fromJS({
  visible: false
});

export default function reducer(state = initialState, action = { }) {
  switch(action.type) {
    case FOOTER_SET_VISIBILITY:
      return state.merge({
        visible: action.visible
      });
    default:
      return state;
  }
}

export const setVisibility = (dispatch) => {
  return (isVisible) => {
    dispatch({
      type: FOOTER_SET_VISIBILITY,
      visible: isVisible
    });
  }
}
