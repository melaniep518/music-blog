import {GET_GUARDIAN_DATA} from 'actionTypes';

const _init = {
  guardianData: []
}

function apiReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case GET_GUARDIAN_DATA: 
      stateCopy.guardianData = action.data;
      return stateCopy;
    default: 
      return stateCopy;
  }
}

export default apiReducer;