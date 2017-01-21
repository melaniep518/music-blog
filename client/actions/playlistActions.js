import store from 'store';

import {DISPLAY_PLAYLISTS, UPDATE_CURRENT_PLAYLIST} from 'actionTypes';

export function displayPlaylists(playlists) {
  store.dispatch({
    type: DISPLAY_PLAYLISTS,
    playlists
  })
}

export function updateCurrentPlaylist(playlist, title, id) {
  store.dispatch({
    type: UPDATE_CURRENT_PLAYLIST,
    playlist,
    title,
    id
  })
}