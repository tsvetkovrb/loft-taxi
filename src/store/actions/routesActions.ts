import * as T from 'store/actionTypes';

export const routesActionStart = () => ({
  type: T.FETCH_ROUTES_START,
});

export const routesActionSuccess = (payload: any) => ({
  type: T.FETCH_ROUTES_SUCCESS,
  payload,
});

export const routesActionFail = (payload: any) => ({
  type: T.FETCH_ROUTES_FAIL,
  payload,
});

export const routesAction = (payload: any) => ({
  type: T.FETCH_ROUTES,
  payload,
});

export const cancelRequest = () => ({
  type: T.CANCEL_REQUEST,
});
