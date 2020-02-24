import { initialState, authReducer } from '../authReducer';
import * as T from 'store/actionTypes';

describe('Auth reducer', () => {
  test('Send request', () => {
    const action = {
      type: T.FETCH_LOGIN_USER_START,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  test('Get response', () => {
    const action = {
      type: T.FETCH_LOGIN_USER_SUCCESS,
      payload: '123',
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      isAuth: true,
      token: '123',
    });
  });

  test('Handled error', () => {
    const action = {
      type: T.FETCH_LOGIN_USER_FAIL,
      payload: 'Error',
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      hasError: true,
      error: 'Error',
    });
  });

  test('Do logout', () => {
    const action = {
      type: T.LOGOUT_USER,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
    });
  });
});
