import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { CustomContext } from 'App';

test('should header', () => {
  const props = {
    navigateTo: () => {},
  };
  const { getByTestId } = render(<Header {...props} />);

  expect(getByTestId('header')).toBeTruthy();
});

test('should header 2', () => {
  const props = {
    navigateTo: () => {},
  };
  const { getByTestId } = render(<Header {...props} />);

  expect(getByTestId('controls').children).toHaveLength(2);
  expect(getByTestId('controls').firstChild?.textContent).toEqual('Войти');
  expect(getByTestId('controls').lastChild?.textContent).toEqual(
    'Зарегестрироваться',
  );
});

test('should header 3', () => {
  const props = {
    navigateTo: () => {},
  };
  const HeaderWithContext = () => (
    <CustomContext.Provider value={{ isLoggedIn: true }}>
      <Header {...props} />
    </CustomContext.Provider>
  );
  const { getByTestId } = render(<HeaderWithContext />);

  expect(getByTestId('controls').children).toHaveLength(3);

  expect(getByTestId('controls').firstChild?.textContent).toEqual('Карта');
  expect(getByTestId('controls').children[1]?.textContent).toEqual('Профиль');
  expect(getByTestId('controls').lastChild?.textContent).toEqual('Выйти');
});
