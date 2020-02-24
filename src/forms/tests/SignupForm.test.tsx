import React from 'react';
import { render } from '@testing-library/react';
import { SignupForm } from 'forms/SignupForm';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('SignupForm.test', () => {
  test('SignupForm', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <SignupForm handleSignup={jest.fn()} isSending={false} />
      </Router>,
    );

    expect(getByTestId('signup-form')).toBeInTheDocument();
  });
});
