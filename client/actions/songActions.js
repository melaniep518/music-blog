import store from 'store';

import {DISPLAY_ALL_SONGS} from 'actionTypes';

export function displayAllSongs(songs) {
  store.dispatch({
    type: DISPLAY_ALL_SONGS,
    songs
  })
}