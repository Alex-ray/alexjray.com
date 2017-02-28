import {combineReducers} from 'redux-immutablejs';
import {routing}         from './routing.js';
import guidePopUp        from './guidePopUp.js';
import window            from './window.js';
import footer            from './footer.js';
import shapeBackground   from './shapeBackground.js';

const currentReducers = {
  routing,
  guidePopUp,
  window,
  footer,
  shapeBackground
};

export default combineReducers({...currentReducers});
