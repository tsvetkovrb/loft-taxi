import * as T from 'store/actionTypes';
import { history } from 'utils/history';

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

export const signupAction = (payload: any) => async (dispatch: any, api: any) => {
  dispatch(signupActionStart());

  try {
    const response = await api.post('/register', payload);
    history.push('/login');

    if (response.data.success) {
      dispatch(signupActionSuccess());
    }
  } catch (error) {
    dispatch(signupActionFail(error));
  }
};
