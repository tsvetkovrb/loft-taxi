import { watchSendingProfileData, profileDataRequest } from '../profileSaga';
import { call, put } from 'redux-saga/effects';
import {
  sendingProfileData,
  sendingProfileDataStart,
  sendingProfileDataSuccess,
  sendingProfileDataFail,
} from 'store/actions/profileActions';

describe('Profile saga', function() {
  test('should completed successfully', () => {
    const cardData = {
      cardNumber: 'cardNumber',
      expiryDate: 'expiryDate',
      cardName: 'cardName',
      cvc: 'cvc',
    };
    const payload = {
      ...cardData,
      token: 'token',
    };
    const response = {
      data: {
        success: true,
        token: '123',
      },
    };

    const gen = watchSendingProfileData(sendingProfileData(payload));

    expect(gen.next().value).toEqual(put(sendingProfileDataStart()));
    expect(gen.next().value).toEqual(call(profileDataRequest, payload));
    expect(gen.next(response as any).value).toEqual(put(sendingProfileDataSuccess(cardData)));
  });

  test('should handle the error', () => {
    const cardData = {
      cardNumber: 'cardNumber',
      expiryDate: 'expiryDate',
      cardName: 'cardName',
      cvc: 'cvc',
    };
    const payload = {
      ...cardData,
      token: 'token',
    };
    const response = {
      data: {
        success: false,
        error: 'error',
      },
    };

    const gen = watchSendingProfileData(sendingProfileData(payload));

    expect(gen.next().value).toEqual(put(sendingProfileDataStart()));
    expect(gen.next().value).toEqual(call(profileDataRequest, payload));
    expect(gen.next(response as any).value).toEqual(
      put(sendingProfileDataFail(response.data.error)),
    );
  });
});
