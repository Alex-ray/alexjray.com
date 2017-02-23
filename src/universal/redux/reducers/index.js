import {combineReducers} from 'redux-immutablejs';
import {routing}         from './routing.js';
import guidePopUp        from './guidePopUp.js';
import scroll            from './scroll.js';
import footer            from './footer.js';
import shapeBackground   from './shapeBackground.js';

const currentReducers = {
  routing,
  guidePopUp,
  scroll,
  footer,
  shapeBackground
};

export default combineReducers({...currentReducers});
