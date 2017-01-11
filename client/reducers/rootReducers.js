import {combineReducers} from 'redux';
import store from 'store';
import apiReducer from 'apiReducer';
import formReducer from 'formReducer';
import playlistReducer from 'playlistReducer';

const rootReducer = combineReducers({
  apiReducer,
  formReducer,
  playlistReducer
})

export default rootReducer;