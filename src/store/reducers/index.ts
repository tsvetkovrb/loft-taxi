import { combineReducers } from 'redux';

import { authReducer } from './authReducer';
import { signupReducer } from './signupReducer';
import { profileReducer } from './profileReducer';

export const rootReducer = combineReducers({
  authReducer,
  signupReducer,
  profileReducer,
});
