import {combineReducers} from 'redux-immutablejs';
import {routing}         from './routing.js';
import guidePopUp        from './guidePopUp.js';
import scroll            from './scroll.js';
import footer            from './footer.js';

const currentReducers = {
  routing,
  guidePopUp,
  scroll,
  footer
};

export default combineReducers({...currentReducers});
