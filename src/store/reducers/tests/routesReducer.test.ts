import { initialState, routesReducer } from '../routesReducer';
import * as T from 'store/actionTypes';

describe('Addresses reducer', () => {
  test('Send request', () => {
    const action = {
      type: T.FETCH_ROUTES_START,
    };

    expect(routesReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: true,
    });
  });

  test('Get response', () => {
    const action = {
      type: T.FETCH_ROUTES_SUCCESS,
      payload: [1, 2, 3],
    };

    expect(routesReducer(initialState, action)).toEqual({
      ...initialState,
      isFetching: false,
      hasRequest: true,
      coordinates: [1, 2, 3],
    });
  });

  test('Handling error', () => {
    const action = {
      type: T.FETCH_ROUTES_FAIL,
      payload: 'Error',
    };

    expect(routesReducer(initialState, action)).toEqual({
      ...initialState,
      hasError: true,
      error: 'Error',
    });
  });
});
