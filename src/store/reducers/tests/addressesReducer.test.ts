import { initialState, addressesReducer } from '../addressesReducer';
import * as T from 'store/actionTypes';

describe('Addresses reducer', () => {
  test('Send request', () => {
    const action = {
      type: T.FETCH_ADDRESSES_START,
    };

    expect(addressesReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  test('Get response', () => {
    const action = {
      type: T.FETCH_ADDRESSES_SUCCESS,
      payload: [1, 2, 3],
    };

    expect(addressesReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      addresses: [1, 2, 3],
    });
  });

  test('Handling error', () => {
    const action = {
      type: T.FETCH_ADDRESSES_FAIL,
      payload: 'Error',
    };

    expect(addressesReducer(initialState, action)).toEqual({
      ...initialState,
      hasError: true,
      error: 'Error',
    });
  });
});
