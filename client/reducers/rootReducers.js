import {combineReducers} from 'redux';
import store from 'store';
import apiReducer from 'apiReducer';

const rootReducer = combineReducers({
  apiReducer
})

export default rootReducer;