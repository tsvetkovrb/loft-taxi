import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginPage } from './LoginPage';
import { CustomContext } from '../../App';

describe('LoginPage', () => {
  test('Происходит render компонента', () => {
    const { getByTestId } = render(<LoginPage />);

    expect(getByTestId('login-page')).toBeTruthy();
  });

  test('При submit формы вызывается функция из контекста', () => {
    const mockLoginFn = jest.fn();

    const LoginPageWithContext = () => (
      <CustomContext.Provider value={{ login: mockLoginFn }}>
        <LoginPage />
      </CustomContext.Provider>
    );
    const { queryByTestId } = render(<LoginPageWithContext />);

    fireEvent.click(queryByTestId('login-page-submit') as Element);
    expect(mockLoginFn).toBeCalled();
  });

  test('При submit формы в функцию передаются значения инпутов', () => {
    const mockLoginFn = jest.fn();

    const LoginPageWithContext = () => (
      <CustomContext.Provider value={{ login: mockLoginFn }}>
        <LoginPage />
      </CustomContext.Provider>
    );
    const { queryByPlaceholderText, queryByTestId } = render(
      <LoginPageWithContext />,
    );

    fireEvent.change(queryByPlaceholderText('Имя') as Element, {
      target: { value: 'Имя' },
    });
    fireEvent.change(queryByPlaceholderText('Пароль') as Element, {
      target: { value: 'Пароль' },
    });

    fireEvent.click(queryByTestId('login-page-submit') as Element);
    expect(mockLoginFn).toBeCalledWith('Имя', 'Пароль');
  });
});
