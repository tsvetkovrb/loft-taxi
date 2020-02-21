import * as T from 'store/actionTypes';

export const addressesActionStart = () => ({
  type: T.FETCH_ADDRESSES_START,
});

export const addressesActionSuccess = (payload: any) => ({
  type: T.FETCH_ADDRESSES_SUCCESS,
  payload,
});

export const addressesActionFail = (payload: any) => ({
  type: T.FETCH_ADDRESSES_FAIL,
  payload,
});

export const addressesAction = () => ({
  type: T.FETCH_ADDRESSES,
});
