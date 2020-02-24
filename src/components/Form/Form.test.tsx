import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { Form } from './Form';

describe('Form', () => {
  it('Происходит render компонента', () => {
    const { getByTestId } = render(
      <Form title="Test title" onSubmit={() => {}} data-testid="form">
        <p>Hello</p>
      </Form>,
    );

    expect(getByTestId('form')).toBeTruthy();
  });

  it('Title успешно передаётся', () => {
    const { getByText } = render(
      <Form title="Test title" onSubmit={() => {}}>
        <p>Hello</p>
      </Form>,
    );

    expect(getByText('Test title')).toBeInTheDocument();
  });

  it('Children успешно передаётся', () => {
    const { getByText } = render(
      <Form title="Test title" onSubmit={() => {}}>
        <p>Paragraph</p>
      </Form>,
    );

    expect(getByText('Paragraph')).toBeInTheDocument();
  });

  it('Функция успешно вызывается', () => {
    const onSubmit = jest.fn();

    const { getByTestId } = render(
      <Form title="title" onSubmit={onSubmit} data-testid="form">
        <p>Hello</p>
      </Form>,
    );

    const form = getByTestId('form');
    fireEvent.submit(form);

    expect(onSubmit).toBeCalled();
  });
});
