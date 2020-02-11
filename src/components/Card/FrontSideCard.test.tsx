import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { FrontSideCard } from './FrontSideCard';

describe('FrontSideCard', () => {
  test('Успешный redner', () => {
    const { getByTestId } = render(<FrontSideCard handleInputChange={() => {}} />);

    expect(getByTestId('front-side')).toBeTruthy();
  });

  test('Все елементы отрисовались', () => {
    const { getByTestId } = render(<FrontSideCard handleInputChange={() => {}} />);

    expect(getByTestId('front-side').children).toHaveLength(3);
  });

  test('Значения в инпуте ввода карты изменяются', () => {
    const inputChangeFunc = jest.fn();

    const { getByPlaceholderText } = render(<FrontSideCard handleInputChange={inputChangeFunc} />);

    const input = getByPlaceholderText('0000 0000 0000 0000') as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'Tes' } });
    fireEvent.change(input, { target: { value: 'Test' } });

    expect(input.value).toBe('Test');
    expect(inputChangeFunc).toBeCalledTimes(2);
  });

  test('Значения в инпуте даты изменяются', () => {
    const { getByPlaceholderText } = render(<FrontSideCard handleInputChange={() => {}} />);

    const input = getByPlaceholderText('02/01') as HTMLInputElement;
    fireEvent.change(input, { target: { value: '02/02' } });

    expect(input.value).toBe('02/02');
  });
});
