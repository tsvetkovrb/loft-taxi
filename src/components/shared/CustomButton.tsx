import React from 'react';
import { Button, ButtonProps } from '@material-ui/core';

type TCustomButton = {
  isLoading: boolean;
  title: string;
  'data-testid'?: string;
} & ButtonProps;

export const CustomButton: React.FC<TCustomButton> = props => {
  return (
    <Button
      className={props.className}
      variant={props.variant}
      color={props.color}
      data-testid={props['data-testid']}
      type={props.type}
    >
      {props.isLoading ? 'В процессе...' : props.title}
    </Button>
  );
};
