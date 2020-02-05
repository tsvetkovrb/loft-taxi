import React from 'react';
import { makeStyles } from '@material-ui/core';
import MainBg from 'static/main_bg.png';

const useStyles = makeStyles({
  withBackground: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    backgroundImage: `url(${MainBg})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundColor: '#2e2e2e',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

interface IWithBackgroundProps {
  children: React.ReactNode;
}

export const WithBackground: React.FC<IWithBackgroundProps> = props => {
  const styles = useStyles();

  return <div className={styles.withBackground}>{props.children}</div>;
};
