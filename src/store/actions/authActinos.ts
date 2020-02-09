import * as T from 'store/actionTypes';

export const loginActionStart = () => ({
  type: T.FETCH_LOGIN_USER_START,
});

export const loginActionSuccess = (payload: string) => ({
  type: T.FETCH_LOGIN_USER_SUCCESS,
  payload,
});

export const loginActionFail = () => ({
  type: T.FETCH_LOGIN_USER_FAIL,
});

export const logoutAction = () => ({
  type: T.LOGOUT_USER,
});

export const loginAction = (email: string, password: string) => async (
  dispatch: any,
  api: any,
  getStore: any,
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
      localStorage.setItem('store', JSON.stringify(getStore()));
    }
  } catch (error) {
    console.log(error);
  }
};
