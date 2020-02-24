import { takeEvery, put, call } from 'redux-saga/effects';
import { FETCH_ROUTES } from 'store/actionTypes';
import { makeRequest } from 'api';

import { AxiosResponse } from 'axios';
import {
  routesActionStart,
  routesActionSuccess,
  routesActionFail,
} from 'store/actions/routesActions';

export function fetchRoutes(from: string, to: string) {
  return makeRequest(`/route?address1=${from}&address2=${to}`, 'GET');
}

export function* watchFetchRoutes(action: any) {
  const { from, to } = action.payload;
  yield put(routesActionStart());

  try {
    const response: AxiosResponse = yield call(fetchRoutes, from, to);
    const { data } = response;
    yield put(routesActionSuccess(data));
  } catch (error) {
    yield put(routesActionFail(error));
  }
}

export function* routesSaga() {
  yield takeEvery(FETCH_ROUTES, watchFetchRoutes);
}
