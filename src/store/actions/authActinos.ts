import * as T from 'store/actionTypes';
import { Dispatch } from 'redux';
import { AxiosInstance } from 'axios';
import { RootState } from 'store/store';

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

export const loginAction = (email: string, password: string) => async (
  dispatch: Dispatch,
  api: AxiosInstance,
  getStore: () => RootState,
) => {
  dispatch(loginActionStart());
  try {
    const response = await api.post('/auth', {
      email,
      password,
    });
    const { data } = response;
    const { success, token } = data;

    if (success) {
      dispatch(loginActionSuccess(token));
      const store = JSON.stringify(getStore());

      localStorage.setItem('store', store);
    }
  } catch (error) {
    dispatch(loginActionFail(error));
  }
};
