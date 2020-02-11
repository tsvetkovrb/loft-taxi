import React from 'react';
import { render } from '@testing-library/react';
import { WithBackground } from './WithBackground';

describe('WithBackground', () => {
  test('Успешный render', () => {
    const { getByTestId } = render(<WithBackground children />);

    expect(getByTestId('with-background')).toBeInTheDocument();
  });
});
