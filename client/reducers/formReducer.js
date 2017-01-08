import {CREATE_PLAYLIST, 
        CREATE_SONG,
        CREATE_ARTIST,
        CREATE_GENRE} from 'actionTypes';


let _init = {
// Playlist form  
  playlistTitle: "",
  playlistUrl: "",
// Song form  
  songTitle: "",
  songAlbum: "",
  releaseDate: "",
// Artist/song form  
  artistName: "",
// Genre form
  genreTitle: ""
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
    case CREATE_ARTIST:
      stateCopy[action.name] = action.value;
    case CREATE_GENRE:
      stateCopy[action.name] = action.value;
    default: 
      return stateCopy;
  }
}

export default formReducer;