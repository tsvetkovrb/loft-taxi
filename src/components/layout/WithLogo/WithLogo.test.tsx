import React from 'react';
import { render } from '@testing-library/react';
import { WithLogo } from './WithLogo';

describe('WithLogo.test', () => {
  test('Успешный render', () => {
    const { getByTestId } = render(<WithLogo children />);

    expect(getByTestId('with-logo')).toBeInTheDocument();
  });

  test('Children передаются успешно', () => {
    const { getByTestId } = render(
      <WithLogo>
        <div></div>
        <div></div>
      </WithLogo>,
    );

    expect(getByTestId('with-logo').children).toHaveLength(3);
  });
});
