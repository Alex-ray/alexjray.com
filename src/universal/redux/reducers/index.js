import {combineReducers} from 'redux-immutablejs';
import {routing}         from './routing.js';
import guidePopUp        from './guidePopUp.js';

const currentReducers = {
  routing,
  guidePopUp
};

export default combineReducers({...currentReducers});
