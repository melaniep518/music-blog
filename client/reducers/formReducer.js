import {CREATE_PLAYLIST, 
        CREATE_SONG,
        CREATE_ARTIST,
        CREATE_GENRE,
        CREATE_PRODUCER,
        CREATE_ALBUM} from 'actionTypes';


let _init = {
// Playlist form  
  playlistTitle: "",
  playlistUrl: "",
// Song form  
  songTitle: "",
  albumName: "",
  releaseDate: "",
// Artist/song/album form  
  artistName: "",
// Genre form
  genreTitle: "",
// Producer form
  producerName: ""
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
      return stateCopy;
    
    case CREATE_GENRE:
      stateCopy[action.name] = action.value;
      return stateCopy;

    case CREATE_PRODUCER:
      stateCopy[action.name] = action.value;
      return stateCopy;
    
    case CREATE_ALBUM:
      stateCopy[action.name] = action.value;
      return stateCopy;

    default: 
      return stateCopy;
  }
}

export default formReducer;