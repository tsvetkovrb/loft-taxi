import React from 'react';
import { render } from '@testing-library/react';
import { Header } from './Header';
import { Router } from 'react-router-dom';
import { history } from 'utils/history';

describe('Header', () => {
  test('Происходит render компонента', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Header isAuth={false} />
      </Router>,
    );

    expect(getByTestId('header')).toBeTruthy();
  });

  test('Header имеет блок навигации', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Header isAuth={false} />
      </Router>,
    );

    expect(getByTestId('header').children).toHaveLength(2);
    expect(getByTestId('controls')).toBeTruthy();
  });

  test('2 нопки, если незалогинен', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Header isAuth={false} />
      </Router>,
    );

    expect(getByTestId('controls').children).toHaveLength(2);
  });

  test('3 нопки, если залогинен', () => {
    const { getByTestId } = render(
      <Router history={history}>
        <Header isAuth={true} />
      </Router>,
    );

    expect(getByTestId('controls').children).toHaveLength(3);
  });
});
