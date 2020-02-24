import React from 'react';
import { render } from '@testing-library/react';
import { MapPage } from './MapPage';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('MapPage.test', () => {
  test('test', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <MapPage coordinates={[]} />
        </Router>
      </Provider>,
    );

    expect(getByTestId('map-page')).toBeInTheDocument();
  });
});
