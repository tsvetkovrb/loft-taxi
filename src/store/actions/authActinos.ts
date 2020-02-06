import * as T from 'store/actionTypes';

export const loginAction = () => ({
  type: T.LOGIN_USER,
});

export const logoutAction = () => ({
  type: T.LOGOUT_USER,
});
