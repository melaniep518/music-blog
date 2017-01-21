import {DISPLAY_PLAYLISTS, UPDATE_CURRENT_PLAYLIST} from 'actionTypes';

let _init = {
  playlists: null,
  currentPlaylist: null,
  currentPlaylistTitle: null,
  currentPlaylistId: null
};

function playlistReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    
    case DISPLAY_PLAYLISTS:
      stateCopy.playlists = action.playlists;
      return stateCopy;

    case UPDATE_CURRENT_PLAYLIST:
      stateCopy.currentPlaylist = action.playlist;
      if(action.title) {
        stateCopy.currentPlaylistTitle = action.title;
      }
      if(action.id) {
        stateCopy.currentPlaylistId = action.id;
      }
      return stateCopy;

    default:
      return stateCopy;
  }
}

export default playlistReducer;