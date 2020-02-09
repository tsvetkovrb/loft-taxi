import * as T from 'store/actionTypes';

export const signupActionStart = () => ({
  type: T.SIGNUP_USER_START,
});

export const signupActionSuccess = () => ({
  type: T.SIGNUP_USER_SUCCESS,
});

export const signupActionFail = () => ({
  type: T.SIGNUP_USER_FAIL,
});

export const signupAction = (payload: any, redirectTo: (path: string) => void) => async (
  dispatch: any,
  api: any,
) => {
  dispatch(signupActionStart());

  try {
    const response = await api.post('/register', payload);
    redirectTo('/login');

    if (response.data.success) {
      dispatch(signupActionSuccess());
    }
  } catch (error) {
    console.log(error);
  }
};
