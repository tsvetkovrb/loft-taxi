import { initialState, profileReducer } from '../profileReducer';
import * as T from 'store/actionTypes';

describe('profileReducer', () => {
  test('Send request', () => {
    const action = {
      type: T.SENDING_PROFILE_DATA_START,
    };

    expect(profileReducer(initialState, action)).toEqual({
      ...initialState,
      isSending: true,
    });
  });

  test('Get response', () => {
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

  test('Handling error', () => {
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
