import * as T from 'store/actionTypes';

export const initialState = {
  isFetching: false,
  hasError: false,
  error: null,
  coordinates: [],
};

export const routesReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case T.FETCH_ROUTES_START:
      return {
        ...state,
        isFetching: true,
      };
    case T.FETCH_ROUTES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        coordinates: action.payload,
      };

    case T.FETCH_ROUTES_FAIL:
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
