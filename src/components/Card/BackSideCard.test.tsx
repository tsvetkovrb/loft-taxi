import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { BackSideCard } from './BackSideCard';

describe('BackSideCard', () => {
  test('Успешный redner', () => {
    const { getByTestId } = render(<BackSideCard handleInputChange={() => {}} />);

    expect(getByTestId('back-side')).toBeTruthy();
  });

  test('Все елементы отрисовались', () => {
    const { getByTestId } = render(<BackSideCard handleInputChange={() => {}} />);

    expect(getByTestId('back-side').children).toHaveLength(2);
  });

  test('Значения в инпуте ввода имени изменяются', () => {
    const inputChangeFunc = jest.fn();

    const { getByPlaceholderText } = render(<BackSideCard handleInputChange={inputChangeFunc} />);

    const input = getByPlaceholderText('USER NAME') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'USER' } });

    expect(input.value).toBe('USER');
    expect(inputChangeFunc).toHaveBeenCalled();
  });

  test('Значения в инпуте даты изменяются', () => {
    const { getByPlaceholderText } = render(<BackSideCard handleInputChange={() => {}} />);

    const input = getByPlaceholderText('***') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '222' } });

    expect(input.value).toBe('222');
  });
});
