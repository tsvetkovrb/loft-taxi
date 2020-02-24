import { takeEvery, call, put, select } from 'redux-saga/effects';
import { AxiosResponse } from 'axios';
import { makeRequest } from 'api';
import { FETCH_LOGIN_USER } from 'store/actionTypes';
import { TRootState } from 'utils/types';
import { saveStore } from 'utils/localStorage';
import { loginActionStart, loginActionSuccess, loginActionFail } from 'store/actions/authActinos';

export function authRequest(email: string, password: string) {
  return makeRequest('/auth', 'POST', { email, password });
}

export function* watchLoginUser(action: any) {
  const { email, password } = action.payload;
  yield put(loginActionStart());

  try {
    const response: AxiosResponse = yield call(authRequest, email, password);
    const { data } = response;
    const { success, token } = data;

    if (success) {
      yield put(loginActionSuccess(token));

      const store: TRootState = yield select();
      yield saveStore(store);
    } else {
      yield put(loginActionFail(data.error));
    }
  } catch (error) {
    yield put(loginActionFail(error));
  }
}

export function* authSaga() {
  yield takeEvery(FETCH_LOGIN_USER, watchLoginUser);
}
