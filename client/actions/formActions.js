import store from 'store';

import {CREATE_PLAYLIST, 
        CREATE_SONG, 
        CREATE_ARTIST,
        CREATE_GENRE,
        CREATE_PRODUCER,
        CREATE_ALBUM} from 'actionTypes';

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
  });
};

export function createNewProducer(name, value) {
  store.dispatch({
    type: CREATE_PRODUCER,
    name,
    value
  });
};

export function createNewAlbum(name, value) {
  store.dispatch({
    type: CREATE_ALBUM,
    name,
    value
  });
};