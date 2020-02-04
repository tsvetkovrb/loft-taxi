import React from 'react';
import { render } from '@testing-library/react';
import { SignupPage } from './SignupPage';

describe('SignupPage', () => {
  test('Происходит render компонента ', () => {
    const { getByTestId } = render(<SignupPage />);

    expect(getByTestId('signup-page')).toBeTruthy();
  });

  test('Форма регистрации содержит все поля ', () => {
    const { getByTestId } = render(<SignupPage />);

    expect(getByTestId('signup-page-form').children).toHaveLength(5);
  });
});
