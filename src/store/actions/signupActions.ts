import * as T from 'store/actionTypes';

export const signupActionStart = () => ({
  type: T.SIGNUP_USER_START,
});

export const signupActionSuccess = () => ({
  type: T.SIGNUP_USER_SUCCESS,
});

export const signupActionFail = (payload: any) => ({
  type: T.SIGNUP_USER_FAIL,
  payload,
});

export const signupAction = (payload: any) => ({
  type: T.SIGNUP_USER,
  payload,
});
