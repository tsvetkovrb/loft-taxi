import { fork } from 'redux-saga/effects';
import { authSaga } from './authSaga';
import { signupSaga } from './signupSaga';
import { profileSaga } from './profileSaga';
import { addressesSaga } from './addressesSaga';
import { routesSaga } from './routeSaga';

export function* rootSaga() {
  yield fork(authSaga);
  yield fork(signupSaga);
  yield fork(profileSaga);
  yield fork(addressesSaga);
  yield fork(routesSaga);
}
