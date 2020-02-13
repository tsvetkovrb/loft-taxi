import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { SignupPage } from './SignupPage';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('SignupPage', () => {
  test('Успешный render', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <SignupPage handleSignup={() => {}} isSending={false} />
      </Router>,
    );

    expect(getByTestId('signup-page')).toBeInTheDocument();
  });

  test('Поля заполняются', () => {
    const { getByPlaceholderText } = render(
      <Router history={history}>
        <SignupPage handleSignup={() => {}} isSending={false} />
      </Router>,
    );

    const emailFieldValue = 'Адрес электронной почты';
    const namedFieldValue = 'Имя';
    const lastNameFieldValue = 'Фамилия';
    const passwordFieldValue = 'Пароль';

    const emailField = getByPlaceholderText(emailFieldValue) as HTMLInputElement;
    const namedField = getByPlaceholderText(namedFieldValue) as HTMLInputElement;
    const lastNameField = getByPlaceholderText(lastNameFieldValue) as HTMLInputElement;
    const passwordField = getByPlaceholderText(passwordFieldValue) as HTMLInputElement;

    fireEvent.change(emailField, { target: { value: emailFieldValue } });
    fireEvent.change(namedField, { target: { value: namedFieldValue } });
    fireEvent.change(lastNameField, { target: { value: lastNameFieldValue } });
    fireEvent.change(passwordField, { target: { value: passwordFieldValue } });

    expect(emailField.value).toBe(emailFieldValue);
    expect(namedField.value).toBe(namedFieldValue);
    expect(lastNameField.value).toBe(lastNameFieldValue);
    expect(passwordField.value).toBe(passwordFieldValue);
  });

  test('Данные при сабмите передаются в функцию', () => {
    const handleSignup = jest.fn();

    const { getByPlaceholderText, getByTestId } = render(
      <Router history={history}>
        <SignupPage handleSignup={handleSignup} isSending={false} />
      </Router>,
    );
    const emailFieldValue = 'Адрес электронной почты';
    const namedFieldValue = 'Имя';
    const lastNameFieldValue = 'Фамилия';
    const passwordFieldValue = 'Пароль';

    const emailField = getByPlaceholderText(emailFieldValue) as HTMLInputElement;
    const namedField = getByPlaceholderText(namedFieldValue) as HTMLInputElement;
    const lastNameField = getByPlaceholderText(lastNameFieldValue) as HTMLInputElement;
    const passwordField = getByPlaceholderText(passwordFieldValue) as HTMLInputElement;
    const form = getByTestId('form');

    fireEvent.change(emailField, { target: { value: emailFieldValue } });
    fireEvent.change(namedField, { target: { value: namedFieldValue } });
    fireEvent.change(lastNameField, { target: { value: lastNameFieldValue } });
    fireEvent.change(passwordField, { target: { value: passwordFieldValue } });
    fireEvent.submit(form);

    expect(handleSignup).toBeCalledWith({
      email: emailFieldValue,
      name: namedFieldValue,
      surname: lastNameFieldValue,
      password: passwordFieldValue,
    });
  });

  test('Отображается статус отправки на сервер', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <SignupPage handleSignup={() => {}} isSending={true} />
      </Router>,
    );

    expect(getByTestId('signup-page-submit').textContent).toBe('В процессе...');
  });
});
