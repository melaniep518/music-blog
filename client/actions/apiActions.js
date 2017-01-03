import store from 'store';

import {GET_GUARDIAN_DATA, GET_NPR_DATA} from 'actionTypes';

export function displayGuardianData(data) {
  store.dispatch({
    type: GET_GUARDIAN_DATA,
    data
  })
};

export function displayNPRData(data) {
  store.dispatch({
    type: GET_NPR_DATA,
    data
  })
};