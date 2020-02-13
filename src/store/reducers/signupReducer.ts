import * as T from 'store/actionTypes';

export const initialState = {
  isSending: false,
  hasError: false,
  error: null,
};

export const signupReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case T.SIGNUP_USER_START:
      return {
        ...state,
        isSending: true,
      };
    case T.SIGNUP_USER_SUCCESS:
      return {
        ...state,
        isSending: false,
      };

    case T.SIGNUP_USER_FAIL:
      return {
        ...state,
        isSending: false,
        hasError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
