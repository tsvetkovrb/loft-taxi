import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  card: {
    width: '382px',
    height: '230px',
    boxShadow: '0 6px 20px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px',
    backgroundColor: '#ffffff',
    boxSizing: 'border-box',
    padding: '10px 35px 40px',
  },
});

interface ICardWrapper {
  children: React.ReactNode;
}

export const CardWrapper: React.FC<ICardWrapper> = props => {
  const styles = useStyles();

  return (
    <div className={styles.card} data-testid="card-wrapper">
      {props.children}
    </div>
  );
};
