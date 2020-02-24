import { initialState, signupReducer } from '../signupReducer';
import * as T from 'store/actionTypes';

describe('signupReducer', () => {
  test('Send request', () => {
    const action = {
      type: T.SIGNUP_USER_START,
    };

    expect(signupReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: true,
    });
  });

  test('Get response', () => {
    const action = {
      type: T.SIGNUP_USER_SUCCESS,
    };

    expect(signupReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
    });
  });

  test('Handling error', () => {
    const action = {
      type: T.SIGNUP_USER_FAIL,
      payload: 'Error',
    };

    expect(signupReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
      hasError: true,
      error: 'Error',
    });
  });
});
