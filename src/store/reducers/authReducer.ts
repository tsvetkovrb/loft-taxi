import * as T from 'store/actionTypes';

export const initialState = {
  isAuth: false,
  isFetching: false,
  token: '',
  hasError: false,
  error: null,
};

export const authReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case T.FETCH_LOGIN_USER_START:
      return {
        ...state,
        isFetching: true,
      };

    case T.FETCH_LOGIN_USER_SUCCESS:
      return {
        ...state,
        isFetching: false,
        hasError: false,
        isAuth: true,
        token: action.payload,
      };

    case T.FETCH_LOGIN_USER_FAIL:
      return {
        ...state,
        isFetching: false,
        isAuth: false,
        hasError: true,
        error: action.payload,
      };

    case T.LOGOUT_USER:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
