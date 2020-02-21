import * as T from 'store/actionTypes';

export const initialState = {
  isFetching: false,
  hasError: false,
  error: null,
  coordinates: [],
  hasRequest: false,
};

export const routesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case T.FETCH_ROUTES_START:
      return {
        ...state,
        hasRequest: false,
        isFetching: true,
      };
    case T.FETCH_ROUTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        coordinates: action.payload,
        hasRequest: true,
      };

    case T.FETCH_ROUTES_FAIL:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        hasRequest: false,
        error: action.payload,
      };

    case T.CANCEL_REQUEST: {
      return {
        ...state,
        hasRequest: false,
      };
    }

    default:
      return state;
  }
};
