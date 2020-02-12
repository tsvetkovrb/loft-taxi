import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { LoginPage } from './LoginPage';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('LoginPage', () => {
  test('Успешный render', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <LoginPage handleLogin={() => {}} isFetching={false} />
      </Router>,
    );

    expect(getByTestId('login-page')).toBeInTheDocument();
  });

  test('Поля заполняются', () => {
    const { getByPlaceholderText } = render(
      <Router history={history}>
        <LoginPage handleLogin={() => {}} isFetching={false} />
      </Router>,
    );
    const usernameField = getByPlaceholderText('Имя') as HTMLInputElement;
    const passwordField = getByPlaceholderText('Пароль') as HTMLInputElement;

    fireEvent.change(usernameField, { target: { value: 'Имя' } });
    fireEvent.change(passwordField, { target: { value: 'Пароль' } });

    expect(usernameField.value).toBe('Имя');
    expect(passwordField.value).toBe('Пароль');
  });

  test('Данные при сабмите передаются в функцию', () => {
    const handleLogin = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <Router history={history}>
        <LoginPage handleLogin={handleLogin} isFetching={false} />
      </Router>,
    );
    const usernameField = getByPlaceholderText('Имя') as HTMLInputElement;
    const passwordField = getByPlaceholderText('Пароль') as HTMLInputElement;
    const form = getByTestId('form');

    fireEvent.change(usernameField, { target: { value: 'Имя' } });
    fireEvent.change(passwordField, { target: { value: 'Пароль' } });
    fireEvent.submit(form);

    expect(handleLogin).toBeCalledWith('Имя', 'Пароль');
  });

  test('Отображается статус отправки на сервер', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <LoginPage handleLogin={() => {}} isFetching={true} />
      </Router>,
    );

    expect(getByTestId('login-page-submit').textContent).toBe('В процессе...');
  });
});
