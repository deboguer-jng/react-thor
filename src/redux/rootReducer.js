import { combineReducers } from 'redux';

import uiReducer from './reducers/uiReducer';
import web3Reducer from './reducers/web3Reducer';
import authReducer from './reducers/authReducer';

const rootReducer = combineReducers({
  ui: uiReducer,
  web3: web3Reducer,
  auth: authReducer,
});

export default rootReducer;
