import {combineReducers} from 'redux';
import store from 'store';
import apiReducer from 'apiReducer';
import formReducer from 'formReducer';
import playlistReducer from 'playlistReducer';
import songReducer from 'songReducer';

const rootReducer = combineReducers({
  apiReducer,
  formReducer,
  playlistReducer,
  songReducer
})

export default rootReducer;