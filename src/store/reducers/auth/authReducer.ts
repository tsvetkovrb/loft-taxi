import { Action } from 'redux';
import * as T from 'store/actionTypes';

const initialState = {
  isAuth: false,
};

export const authReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case T.LOGIN_USER:
      return {
        ...state,
        isAuth: true,
      };

    case T.LOGOUT_USER:
      return {
        ...state,
        isAuth: false,
      };
    default:
      return state;
  }
};
