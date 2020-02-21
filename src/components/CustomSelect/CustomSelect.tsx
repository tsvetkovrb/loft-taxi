import React from 'react';
import { FormControl, makeStyles, TextField, Paper, MenuItem } from '@material-ui/core';
import Select from 'react-select';

const useStyles = makeStyles({
  input: {
    display: 'flex',
    padding: 0,
    height: 'auto',
  },
  valueContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    flex: 1,
    alignItems: 'center',
    overflow: 'hidden',
  },
  menu: {
    position: 'absolute',
    zIndex: 1,
    left: 0,
    right: 0,
  },
});

const inputComponent = ({ inputRef, ...props }: any) => {
  return <div ref={inputRef} {...props} />;
};

const Control = (props: any) => {
  const {
    children,
    innerProps,
    innerRef,
    selectProps: { classes, TextFieldProps },
  } = props;

  return (
    <TextField
      fullWidth
      InputProps={{
        inputComponent,
        inputProps: {
          className: classes.input,
          ref: innerRef,
          children,
          ...innerProps,
        },
      }}
      {...TextFieldProps}
    />
  );
};

const Menu = (props: any) => {
  return (
    <Paper square className={props.selectProps.classes.menu} {...props.innerProps}>
      {props.children}
    </Paper>
  );
};

const Option = (props: any) => {
  return (
    <MenuItem
      ref={props.innerRef}
      selected={props.isFocused}
      component="div"
      style={{
        fontWeight: props.isSelected ? 500 : 400,
      }}
      {...props.innerProps}
    >
      {props.children}
    </MenuItem>
  );
};

const ValueContainer = (props: any) => {
  return <div className={props.selectProps.classes.valueContainer}>{props.children}</div>;
};

const components = {
  Control,
  Menu,
  Option,
  ValueContainer,
};

interface ICustomSelectProps {
  options: any[];
  placeholder: string;
  onChange: any;
  value: any;
}

export const CustomSelect: React.FC<ICustomSelectProps> = props => {
  const styles = useStyles();

  return (
    <div>
      <FormControl fullWidth>
        <Select
          value={props.value}
          onChange={props.onChange}
          classes={styles}
          placeholder={props.placeholder}
          isClearable={true}
          options={props.options}
          components={components}
        />
      </FormControl>
    </div>
  );
};
