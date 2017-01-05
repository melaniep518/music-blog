import {CREATE_PLAYLIST, CREATE_SONG} from 'actionTypes';


let _init = {
  playlistTitle: "",
  playlistUrl: "",
  songTitle: "",
  songArtist: "",
  songAlbum: ""
}

function formReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case CREATE_PLAYLIST:
      stateCopy[action.name] = action.value;
      return stateCopy;
    case CREATE_SONG:
      stateCopy[action.name] = action.value;
      return stateCopy;
    default: 
      return stateCopy;
  }
}

export default formReducer;