import {DISPLAY_PLAYLISTS} from 'actionTypes';

let _init = {
  playlists: null
};

function playlistReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    
    case DISPLAY_PLAYLISTS:
      stateCopy.playlists = action.playlists;
      return stateCopy;

    default:
      return stateCopy;
  }
}

export default playlistReducer;