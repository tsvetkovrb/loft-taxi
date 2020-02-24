import React from 'react';
import { render } from '@testing-library/react';
import { LoginForm } from '../LoginForm';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('LoginForm.test', () => {
  test('LoginForm', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <LoginForm handleLogin={jest.fn()} isFetching={false} />
      </Router>,
    );

    expect(getByTestId('login-form')).toBeInTheDocument();
  });
});
