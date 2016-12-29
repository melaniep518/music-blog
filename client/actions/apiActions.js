import store from 'store';

import {GET_GUARDIAN_DATA} from 'actionTypes';

export function displayGuardianData(data) {
  store.dispatch({
    type: GET_GUARDIAN_DATA,
    data
  })
};