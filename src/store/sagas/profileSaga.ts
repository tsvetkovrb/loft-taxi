import { takeEvery, put, call, select } from 'redux-saga/effects';
import { SENDING_PROFILE_DATA } from 'store/actionTypes';
import {
  sendingProfileDataStart,
  IPayloadProfileData,
  sendingProfileDataSuccess,
  sendingProfileDataFail,
} from 'store/actions/profileActions';
import { makeRequest } from 'api';
import { AxiosResponse } from 'axios';
import { TRootState } from 'utils/types';
import { saveStore } from 'utils/localStorage';

function profileDataRequest(data: IPayloadProfileData) {
  return makeRequest('/card', 'POST', data);
}

function* watchSendingProfileData(action: any) {
  const { payload } = action;
  yield put(sendingProfileDataStart());

  try {
    const response: AxiosResponse = yield call(profileDataRequest, payload);
    const { data } = response;
    const { success } = data;

    if (success) {
      const { token, ...data } = payload;

      yield put(sendingProfileDataSuccess(data));

      const store: TRootState = yield select();
      saveStore(store);
    }
  } catch (error) {
    yield put(sendingProfileDataFail(error));
  }
}

export function* profileSaga() {
  yield takeEvery(SENDING_PROFILE_DATA, watchSendingProfileData);
}
