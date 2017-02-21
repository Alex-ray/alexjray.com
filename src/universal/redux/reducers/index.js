import {combineReducers} from 'redux-immutablejs';
import {routing}         from './routing.js';
import guidePopUp        from './guidePopUp.js';
import scroll            from './scroll.js';

const currentReducers = {
  routing,
  guidePopUp,
  scroll
};

export default combineReducers({...currentReducers});
