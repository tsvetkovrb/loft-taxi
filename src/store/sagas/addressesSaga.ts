import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_ADDRESSES } from 'store/actionTypes';
import { makeRequest } from 'api';
import {
  addressesActionStart,
  addressesActionSuccess,
  addressesActionFail,
} from 'store/actions/addressesActions';
import { AxiosResponse } from 'axios';

function fetchAddresses() {
  return makeRequest('/addressList', 'GET');
}

function* watchFetchAddresses() {
  yield put(addressesActionStart());

  try {
    const response: AxiosResponse = yield call(fetchAddresses);
    const { data } = response;
    const { addresses } = data;
    yield put(addressesActionSuccess(addresses));
  } catch (error) {
    yield put(addressesActionFail(error));
  }
}

export function* addressesSaga() {
  yield takeEvery(FETCH_ADDRESSES, watchFetchAddresses);
}
