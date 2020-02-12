import { initialState, profileReducer } from '../profileReducer';
import * as T from 'store/actionTypes';

describe('profileReducer', () => {
  test('Отправили завпрос', () => {
    const action = {
      type: T.SENDING_PROFILE_DATA_START,
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: true,
    });
  });

  test('Получили ответ, положили данные в store', () => {
    const cardData = {
      cardNumber: '222',
      expiryDate: '222',
      cardName: '222',
      cvc: '222',
    };

    const action = {
      type: T.SENDING_PROFILE_DATA_SUCCESS,
      payload: {
        ...cardData,
      },
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
      cardData,
    });
  });

  test('Обработали ошибку', () => {
    const action = {
      type: T.SENDING_PROFILE_DATA_FAIL,
      payload: 'Error',
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: false,
      hasError: true,
      error: 'Error',
    });
  });
});
