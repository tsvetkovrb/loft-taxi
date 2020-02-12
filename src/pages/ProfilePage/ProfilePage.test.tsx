import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { ProfilePage } from './ProfilePage';

describe('ProfilePage', () => {
  test('Успешный render', () => {
    const { getByTestId } = render(
      <ProfilePage isSending={false} sendCardData={jest.fn()} token="123" />,
    );

    expect(getByTestId('profile-page')).toBeInTheDocument();
  });

  test('Кнопка отображает статус', () => {
    const { getByTestId } = render(
      <ProfilePage isSending={true} sendCardData={jest.fn()} token="123" />,
    );

    expect(getByTestId('profile-page-button').textContent).toBe('В процессе...');
  });

  test('При вызове передаются нужные параметры', () => {
    const sendCardData = jest.fn();
    const token = '123';

    const { getByTestId, getByPlaceholderText } = render(
      <ProfilePage isSending={true} sendCardData={sendCardData} token={token} />,
    );

    const cardNumberInputValue = 'cardNumberInput';
    const expiryDateInputValue = 'expiryDateInput';
    const cardNameInputValue = 'cardNameInput';
    const cvcInputValue = 'cvcInput';

    const cardNumberInput = getByPlaceholderText('0000 0000 0000 0000') as HTMLInputElement;
    const expiryDateInput = getByPlaceholderText('02/01') as HTMLInputElement;
    const cardNameInput = getByPlaceholderText('USER NAME') as HTMLInputElement;
    const cvcInput = getByPlaceholderText('***') as HTMLInputElement;
    const submitButton = getByTestId('profile-page-button');

    fireEvent.change(cardNumberInput, { target: { value: cardNumberInputValue } });
    fireEvent.change(expiryDateInput, { target: { value: expiryDateInputValue } });
    fireEvent.change(cardNameInput, { target: { value: cardNameInputValue } });
    fireEvent.change(cvcInput, { target: { value: cvcInputValue } });
    fireEvent.click(submitButton);

    expect(sendCardData).toBeCalledWith({
      cardNumber: cardNumberInputValue,
      expiryDate: expiryDateInputValue,
      cardName: cardNameInputValue,
      cvc: cvcInputValue,
      token,
    });
  });
});
