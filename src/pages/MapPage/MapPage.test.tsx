import React from 'react';
import { render } from '@testing-library/react';
import { MapPage } from './MapPage';

describe('MapPage', () => {
  test('Происходит render компонента', () => {
    const { getByTestId } = render(<MapPage />);

    expect(getByTestId('map-page')).toBeTruthy();
  });
});
