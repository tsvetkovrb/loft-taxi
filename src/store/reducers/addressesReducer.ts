import * as T from 'store/actionTypes';

export const initialState = {
  isFetching: false,
  hasError: false,
  error: null,
  addresses: [],
};

export const addressesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case T.FETCH_ADDRESSES_START:
      return {
        ...state,
        isFetching: true,
      };
    case T.FETCH_ADDRESSES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        addresses: action.payload,
      };

    case T.FETCH_ADDRESSES_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        error: action.payload,
      };

    default:
      return state;
  }
};
