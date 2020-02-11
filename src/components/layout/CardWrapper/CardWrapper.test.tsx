import React from 'react';
import { render } from '@testing-library/react';
import { CardWrapper } from './CardWrapper';

describe('CardWrapper', () => {
  test('Успешный render', () => {
    const { getByTestId } = render(<CardWrapper children />);

    expect(getByTestId('card-wrapper')).toBeInTheDocument();
  });
});
