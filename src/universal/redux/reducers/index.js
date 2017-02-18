import {combineReducers} from 'redux-immutablejs';
import {routing}         from './routing';

const currentReducers = {
  routing
};

export default combineReducers({...currentReducers});
