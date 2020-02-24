import React from 'react';
import { render } from '@testing-library/react';
import { LoginPage } from './LoginPage';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('LoginPage.test', () => {
  test('test', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <LoginPage />
        </Router>
      </Provider>,
    );

    expect(getByTestId('login-page')).toBeInTheDocument();
  });
});
