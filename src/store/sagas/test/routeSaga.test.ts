import { watchFetchRoutes, fetchRoutes } from '../routeSaga';
import { call, put } from 'redux-saga/effects';
import {
  routesAction,
  routesActionStart,
  routesActionSuccess,
  routesActionFail,
} from 'store/actions/routesActions';

describe('Route saga', function() {
  test('should completed successfully', () => {
    const data = {
      from: '1',
      to: '2',
    };

    const response = {
      data: [1, 2, 3],
    };

    const gen = watchFetchRoutes(routesAction(data));

    expect(gen.next().value).toEqual(put(routesActionStart()));
    expect(gen.next().value).toEqual(call(fetchRoutes, data.from, data.to));
    expect(gen.next(response as any).value).toEqual(put(routesActionSuccess(response.data)));
  });
  test('should handle the error', () => {
    const data = {
      from: '1',
      to: '2',
    };

    const gen = watchFetchRoutes(routesAction(data));

    expect(gen.next().value).toEqual(put(routesActionStart()));
    expect(gen.next().value).toEqual(call(fetchRoutes, data.from, data.to));
    expect(gen.throw('Error').value).toEqual(put(routesActionFail('Error')));
  });
});
