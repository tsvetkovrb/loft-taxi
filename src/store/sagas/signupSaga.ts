import { AxiosResponse } from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';
import { SIGNUP_USER } from 'store/actionTypes';
import {
  signupActionStart,
  signupActionSuccess,
  signupActionFail,
} from 'store/actions/signupActions';
import { makeRequest } from 'api';
import { history } from 'utils/history';
import { TSignupFormPayload } from 'utils/types';

export function signupRequest(data: TSignupFormPayload) {
  return makeRequest('/register', 'POST', data);
}

export function* watchSignupUser(action: any) {
  const { payload } = action;
  yield put(signupActionStart());

  try {
    const response: AxiosResponse = yield call(signupRequest, payload);
    const { data } = response;
    const { success } = data;
    history.push('/login');

    if (success) {
      yield put(signupActionSuccess());
    } else {
      yield put(signupActionFail(data.error));
    }
  } catch (error) {
    yield put(signupActionFail(error));
  }
}

export function* signupSaga() {
  yield takeEvery(SIGNUP_USER, watchSignupUser);
}
