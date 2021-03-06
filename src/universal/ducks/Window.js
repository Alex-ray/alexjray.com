import {fromJS, Map as iMap} from 'immutable';
import {push, replace} from 'react-router-redux';

export const WINDOW_SET_DIMENSIONS     = 'WINDOW_SET_DIMENSIONS';
export const WINDOW_SCROLL_SET_OFFSETS = 'WINDOW_SCROLL_SET_OFFSETS';
export const WINDOW_MOUSE_SET_OFFSETS  = 'WINDOW_MOUSE_SET_OFFSETS';
export const WINDOW_SCROLL_SET_GYRO    = 'WINDOW_SCROLL_SET_GYRO';

const initialState = fromJS({
  height: 0,
  width: 0,
  scroll: {
    offsets: {
      x: 0,
      y: 0,
    }
  },
  mouse: {
    offsets: {
      x: 0,
      y: 0
    }
  },
  gyro: {
    tiltX: 0,
    tiltY: 0,
    direction: 0
  }
});

export default function reducer(state = initialState, action = { }) {
  switch(action.type) {
    case WINDOW_SET_DIMENSIONS:
      return state.merge({
        width: action.width,
        height: action.height
      });
    case WINDOW_SCROLL_SET_OFFSETS:
      return state.merge({
        scroll: {
          offsets: {
            x: action.x,
            y: action.y
          }
        }
      });
    case WINDOW_MOUSE_SET_OFFSETS:
      return state.merge({
        mouse: {
          offsets: {
            x: action.x,
            y: action.y
          }
        }
      });
    case WINDOW_SCROLL_SET_GYRO:
    return state.merge({
      gyro: {
        tiltX: action.tiltX,
        tiltY: action.tiltY,
        direction: action.direction
      }
    })
    default:
      return state;
  }
}

export const setWindowDimensions = (dispatch) => {
  return ({width, height}) => {
    dispatch({
      type: WINDOW_SET_DIMENSIONS,
      width: width,
      height: height
    });
  };
};

export const setMouse = (dispatch) => {
  return (mouseEvent) => {
    const {
      x,
      y
    } = mouseEvent;

    dispatch({
      type: WINDOW_MOUSE_SET_OFFSETS,
      x: x,
      y: y
    });
  };
};

export const setScroll = (dispatch) => {
  return ({x, y}) => {
    dispatch({
      type: WINDOW_SCROLL_SET_OFFSETS,
      x: x,
      y: y
    });
  };
};

export const setGyro = (dispatch) => {
  return (gyroEvent) => {

    const {
       gamma,
       beta,
       alpha
    } = gyroEvent;

    dispatch({
      type: WINDOW_SCROLL_SET_GYRO,
      tiltX: gamma,
      tiltY: beta,
      direction: alpha
    });
  }
}
