import store from 'store';

import {DISPLAY_PLAYLISTS} from 'actionTypes';

export function displayPlaylists(playlists) {
  store.dispatch({
    type: DISPLAY_PLAYLISTS,
    playlists
  })
}