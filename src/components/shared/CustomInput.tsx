import React from 'react';
import { TextField, TextFieldProps } from '@material-ui/core';

type IInputProps = {
  errors?: any;
} & TextFieldProps;

export const CustomInput: React.FC<IInputProps> = ({ className, ...props }) => {
  const error = props.name && props.errors[props.name];

  return (
    <div className={className}>
      <TextField {...props} error={!!error} fullWidth />
      {error && (
        <span style={{ color: 'tomato', marginTop: 10, display: 'block' }}>{error.message}</span>
      )}
    </div>
  );
};
