import {GET_GUARDIAN_DATA, GET_NPR_DATA} from 'actionTypes';

let _init = {
  guardianData: [],
  nprData: []
}

function apiReducer(state = _init, action) {
  let stateCopy = Object.assign({}, state);
  switch(action.type) {
    case GET_GUARDIAN_DATA: 
      stateCopy.guardianData = action.data;
      return stateCopy;
    case GET_NPR_DATA: 
      stateCopy.nprData = action.data;
      return stateCopy;
    default: 
      return stateCopy;
  }
}

export default apiReducer;