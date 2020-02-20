import * as T from 'store/actionTypes';

export const loginActionStart = () => ({
  type: T.FETCH_LOGIN_USER_START,
});

export const loginActionSuccess = (payload: string) => ({
  type: T.FETCH_LOGIN_USER_SUCCESS,
  payload,
});

export const loginActionFail = (payload: any) => ({
  type: T.FETCH_LOGIN_USER_FAIL,
  payload,
});

export const logoutAction = () => ({
  type: T.LOGOUT_USER,
});

export const loginAction = (payload: { email: string; password: string }) => ({
  type: T.FETCH_LOGIN_USER,
  payload,
});
