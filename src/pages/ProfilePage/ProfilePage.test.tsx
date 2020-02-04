import React from 'react';
import { render } from '@testing-library/react';
import { ProfilePage } from './ProfilePage';

describe('ProfilePage', () => {
  test('Происходит render компонента', () => {
    const { getByTestId } = render(<ProfilePage />);

    expect(getByTestId('profile-page')).toBeTruthy();
    expect(getByTestId('profile-page').innerHTML).toEqual(
      '<h1>Profile page</h1>',
    );
  });
});
