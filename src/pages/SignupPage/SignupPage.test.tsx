import React from 'react';
import { render } from '@testing-library/react';
import { SignupPage } from './SignupPage';
import { Provider } from 'react-redux';
import { store } from 'store/store';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('SignupPage.test', () => {
  test('test', () => {
    const { getByTestId } = render(
      <Provider store={store}>
        <Router history={history}>
          <SignupPage handleSignup={jest.fn()} isSending={false} />
        </Router>
      </Provider>,
    );

    expect(getByTestId('signup-page')).toBeInTheDocument();
  });
});
