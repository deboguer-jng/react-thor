import axios from 'axios';

import * as authTypes from '../types/authTypes';
import { logError, logMessage } from '../../utils/log';
import { store } from '../store';

//get jwt web token
export const getJWT = (wallet_address, time_stamp) => {
  return async (dispatch) => {
    try {
      const body = { wallet_address, time_stamp };
      const res = await axios.post(`./upload_csv/auth`, body);
      logMessage('getJWT', res);
      if (res?.data?.responseCode === 200) {
        dispatch({ type: authTypes.SAVE_JWT, payload: res.data.result });
      }
    } catch (e) {
      logError('getJWT', e);
    }
  };
};

export const authorize = () => {
  return async (dispatch) => {
    dispatch({ type: authTypes.AUTHORIZED });
  };
};

export const authError = (error) => {
  if (error.message === 'Request failed with status code 403') {
    store.dispatch({
      type: authTypes.UN_AUTHORIZED,
    });
  }
};
