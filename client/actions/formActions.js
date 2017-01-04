import store from 'store';

import {CREATE_PLAYLIST} from 'actionTypes';

export function createNewPlaylist(name, value) {
  store.dispatch({
    type: CREATE_PLAYLIST,
    name,
    value
  })
}