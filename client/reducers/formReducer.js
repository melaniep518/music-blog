import {CREATE_PLAYLIST} from 'actionTypes';

let _init = {
  playlistTitle: "",
  playlistUrl: ""
}

function formReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case CREATE_PLAYLIST:
      stateCopy[action.name] = action.value;
      return stateCopy;
    default: 
      return stateCopy;
  }
}

export default formReducer;