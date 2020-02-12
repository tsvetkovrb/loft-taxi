import { initialState, signupReducer } from '../signupReducer';
import * as T from 'store/actionTypes';

describe('signupReducer', () => {
  test('Отправили завпрос', () => {
    const action = {
      type: T.SIGNUP_USER_START,
    };

    expect(signupReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: true,
    });
  });

  test('Получили успешный ответ', () => {
    const action = {
      type: T.SIGNUP_USER_SUCCESS,
    };

    expect(signupReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
    });
  });

  test('Ошибку положили в store', () => {
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
