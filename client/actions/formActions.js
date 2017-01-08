import store from 'store';

import {CREATE_PLAYLIST, 
        CREATE_SONG, 
        CREATE_ARTIST,
        CREATE_GENRE} from 'actionTypes';

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

export function createNewArtist(name, value) {
  store.dispatch({
    type: CREATE_ARTIST,
    name,
    value
  });
};

export function createNewGenre(name, value) {
  store.dispatch({
    type: CREATE_GENRE,
    name,
    value
  })
}