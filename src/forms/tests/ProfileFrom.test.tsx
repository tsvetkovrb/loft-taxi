import React from 'react';
import { render } from '@testing-library/react';
import { ProfileFrom } from 'forms/ProfileFrom';

describe('ProfileFrom.test', () => {
  test('ProfileFrom', () => {
    const { getByTestId } = render(
      <ProfileFrom
        isSending={false}
        cardData={{ cardName: '', cardNumber: '', cvc: '', expiryDate: '' }}
        sendCardData={jest.fn()}
        token="sfd"
      />,
    );

    expect(getByTestId('profile-form')).toBeInTheDocument();
  });
});
