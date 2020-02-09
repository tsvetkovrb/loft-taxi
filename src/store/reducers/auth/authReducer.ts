import * as T from 'store/actionTypes';

const initialState = {
  isAuth: false,
  isFetching: false,
  token: '',
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
        isAuth: true,
        token: action.payload,
      };
    case T.LOGOUT_USER:
      return {
        ...initialState,
      };

    default:
      return state;
  }
};
