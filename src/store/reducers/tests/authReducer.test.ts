import { initialState, authReducer } from '../authReducer';
import * as T from 'store/actionTypes';

describe('authReducer', () => {
  test('Отправили завпрос', () => {
    const action = {
      type: T.FETCH_LOGIN_USER_START,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  test('Получили ответ', () => {
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

  test('Обработали ошибку', () => {
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

  test('Разлогинились', () => {
    const action = {
      type: T.LOGOUT_USER,
    };

    expect(authReducer(initialState, action)).toEqual({
      ...initialState,
    });
  });
});
