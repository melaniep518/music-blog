import {combineReducers} from 'redux';
import store from 'store';
import apiReducer from 'apiReducer';
import formReducer from 'formReducer';

const rootReducer = combineReducers({
  apiReducer,
  formReducer
})

export default rootReducer;