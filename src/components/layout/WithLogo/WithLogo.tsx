import React from 'react';
import { makeStyles } from '@material-ui/core';
import Logo from 'static/logo.png';

const useStyles = makeStyles({
  withLogo: {
    width: '800px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  logo: {
    width: '157px',
    height: '37px',
  },
});

interface IWithLogoProps {
  children: React.ReactNode;
}

export const WithLogo: React.FC<IWithLogoProps> = props => {
  const styles = useStyles();

  return (
    <div className={styles.withLogo}>
      <img src={Logo} alt="Logo" className={styles.logo} />

      {props.children}
    </div>
  );
};
