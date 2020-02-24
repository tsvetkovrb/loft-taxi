import { watchLoginUser, authRequest } from '../authSaga';
import { call, put } from 'redux-saga/effects';
import {
  loginAction,
  loginActionStart,
  loginActionSuccess,
  loginActionFail,
} from 'store/actions/authActinos';

describe('Auth saga', function() {
  test('should completed successfully', () => {
    const data = {
      email: 'email',
      password: 'password',
    };
    const response = {
      data: {
        success: true,
        token: '123',
      },
    };

    const gen = watchLoginUser(loginAction(data));

    expect(gen.next().value).toEqual(put(loginActionStart()));
    expect(gen.next().value).toEqual(call(authRequest, data.email, data.password));
    expect(gen.next(response as any).value).toEqual(put(loginActionSuccess(response.data.token)));
  });

  test('should handle the error', () => {
    const data = {
      email: 'email',
      password: 'password',
    };
    const response = {
      data: {
        success: false,
        error: '123',
      },
    };

    const gen = watchLoginUser(loginAction(data));

    expect(gen.next().value).toEqual(put(loginActionStart()));
    expect(gen.next().value).toEqual(call(authRequest, data.email, data.password));
    expect(gen.next(response as any).value).toEqual(put(loginActionFail(response.data.error)));
  });
});
