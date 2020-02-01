import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import { ScreenHandler } from './ScreenHandler';
import { CustomContext } from '../../App';

describe('ScreenHandler', () => {
  test('По умолчанию рендерит LoginPage', () => {
    const TestComponent = () => (
      <CustomContext.Provider value={{ isLoggedIn: false }}>
        <ScreenHandler />
      </CustomContext.Provider>
    );
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('login-page')).toBeTruthy();
  });

  test('Если залогинен, то показывает ProfilePage', () => {
    const TestComponent = () => (
      <CustomContext.Provider value={{ isLoggedIn: true }}>
        <ScreenHandler />
      </CustomContext.Provider>
    );
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('profile-page')).toBeTruthy();
  });

  test('Отрабатывает функционал переключения', () => {
    const TestComponent = () => (
      <CustomContext.Provider value={{ isLoggedIn: true, activeScreen: 'map' }}>
        <ScreenHandler />
      </CustomContext.Provider>
    );
    const { getByTestId } = render(<TestComponent />);

    expect(getByTestId('map-page')).toBeTruthy();
  });
});
