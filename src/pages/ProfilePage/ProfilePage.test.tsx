import React from 'react';
import { render } from '@testing-library/react';
import { ProfilePage } from './ProfilePage';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('ProfilePage.test', () => {
  test('test', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <ProfilePage />
        </Router>
      </Provider>,
    );

    expect(getByTestId('profile-page')).toBeInTheDocument();
  });
});
