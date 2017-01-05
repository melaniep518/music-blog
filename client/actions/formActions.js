import store from 'store';

import {CREATE_PLAYLIST, CREATE_SONG} from 'actionTypes';

export function createNewPlaylist(name, value) {
  store.dispatch({
    type: CREATE_PLAYLIST,
    name,
    value
  });
};

export function createNewSong(name, value) {
  store.dispatch({
    type: CREATE_SONG,
    name,
    value
  });
};