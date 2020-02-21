import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { signupReducer } from './signupReducer';
import { profileReducer } from './profileReducer';
import { addressesReducer } from './addressesReducer';
import { routesReducer } from './routesReducer';

export const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profileReducer,
  addressesReducer,
  routesReducer,
});
