import * as T from 'store/actionTypes';

const initialState = {
  isSending: false,
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

    default:
      return state;
  }
};
