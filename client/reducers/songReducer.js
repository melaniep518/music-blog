import {DISPLAY_ALL_SONGS} from 'actionTypes';

let _init = {
  songs: null
};

function songReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {

    case DISPLAY_ALL_SONGS: 
      stateCopy.songs = action.songs;
      return stateCopy;

    default:
      return stateCopy;
  }
}

export default songReducer;