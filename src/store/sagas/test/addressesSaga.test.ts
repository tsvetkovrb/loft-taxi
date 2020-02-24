import { watchFetchAddresses, fetchAddresses } from '../addressesSaga';
import { put, call } from 'redux-saga/effects';
import {
  addressesActionStart,
  addressesActionSuccess,
  addressesActionFail,
} from 'store/actions/addressesActions';

describe('Addresses saga', () => {
  test('should completed successfully', () => {
    const gen = watchFetchAddresses();

    const response = {
      data: { addresses: ['1', '2', '3'] },
    };

    expect(gen.next().value).toEqual(put(addressesActionStart()));
    expect(gen.next().value).toEqual(call(fetchAddresses));
    expect(gen.next(response as any).value).toEqual(
      put(addressesActionSuccess(response.data.addresses)),
    );
  });

  test('should handle the error', () => {
    const gen = watchFetchAddresses();

    expect(gen.next().value).toEqual(put(addressesActionStart()));
    expect(gen.next().value).toEqual(call(fetchAddresses));
    expect(gen.throw('Error').value).toEqual(put(addressesActionFail('Error')));
  });
});
