import React from 'react';

import { makeStyles } from '@material-ui/core';

interface IFormProps {
  children: React.ReactNode;
  title: string;
  className?: string;
  onSubmit: () => void;
}

const useStyles = makeStyles({
  formWrapper: {
    padding: '70px 50px 65px',
    backgroundColor: '#fff',
    display: 'flex',
    flexDirection: 'column',
  },
  formTitle: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#323232',
    margin: '0',
    marginBottom: '32px',
  },
});

export const Form: React.FC<IFormProps> = props => {
  const styles = useStyles();

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    props.onSubmit();
  };

  return (
    <form className={styles.formWrapper} onSubmit={onSubmit}>
      <h2 className={styles.formTitle}>{props.title}</h2>
      {props.children}
    </form>
  );
};
