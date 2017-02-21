import {fromJS, Map as iMap} from 'immutable';
import {push, replace} from 'react-router-redux';

export const GUIDE_POP_UP_OPEN  = 'GUIDE_POP_UP_OPEN';
export const GUIDE_POP_UP_CLOSE = 'GUIDE_POP_UP_CLOSE';

const initialState = iMap({
  open: false
});

export default function reducer(state = initialState, action = { }) {
  switch(action.type) {
    case GUIDE_POP_UP_OPEN:
      return state.merge({
        open: true
      });
    case GUIDE_POP_UP_CLOSE:
      return state.merge({
        open: false
      });
    default:
      return state;
  }
}

export const openGuidePopUp = (dispatch) => {
  return () => {
    dispatch({type: GUIDE_POP_UP_OPEN});
  }
}

export const closeGuidePopUp = (dispatch) => {
  return () => {
    dispatch({type: GUIDE_POP_UP_CLOSE});
  }
}
