import { call, put } from 'redux-saga/effects';
import {
  signupAction,
  signupActionStart,
  signupActionSuccess,
  signupActionFail,
} from 'store/actions/signupActions';
import { signupRequest, watchSignupUser } from '../signupSaga';

describe('Signup saga', function() {
  test('should completed successfully', () => {
    const data = {
      email: '123',
      name: '123',
      surname: '123',
      password: '123',
    };

    const response = {
      data: {
        success: true,
        token: '123',
      },
    };

    const gen = watchSignupUser(signupAction(data));

    expect(gen.next().value).toEqual(put(signupActionStart()));
    expect(gen.next().value).toEqual(call(signupRequest, data));
    expect(gen.next(response as any).value).toEqual(put(signupActionSuccess()));
  });

  test('should handle the error', () => {
    const data = {
      email: '123',
      name: '123',
      surname: '123',
      password: '123',
    };

    const response = {
      data: {
        success: false,
        error: '123',
      },
    };

    const gen = watchSignupUser(signupAction(data));

    expect(gen.next().value).toEqual(put(signupActionStart()));
    expect(gen.next().value).toEqual(call(signupRequest, data));
    expect(gen.next(response as any).value).toEqual(put(signupActionFail(response.data.error)));
  });
});
