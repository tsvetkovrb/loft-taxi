import React from 'react';
import { AppBar, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';

import LogoIcon from 'static/logo_dark.png';

const useStyles = makeStyles({
  header: {
    backgroundColor: '#ffffff',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'row',
    height: 80,
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  link: {
    textDecoration: 'none',
  },
});

interface IHeaderProps {
  isAuth: boolean;
  doLogout?: any;
}

export const Header = React.memo((props: IHeaderProps) => {
  const styles = useStyles();

  const renderAuthedControls = () => (
    <>
      <Link to="/map" className={styles.link}>
        <Button>Карта</Button>
      </Link>
      <Link to="/profile" className={styles.link}>
        <Button>Профиль</Button>
      </Link>
      <Button onClick={props.doLogout}>Выйти</Button>
    </>
  );

  const renderUnAuthedControls = () => (
    <>
      <Link to="/login" className={styles.link}>
        <Button>Войти</Button>
      </Link>
      <Link to="/signup" className={styles.link}>
        <Button>Зарегестрироваться</Button>
      </Link>
    </>
  );

  return (
    <AppBar className={styles.header} position="fixed">
      <Container className={styles.container} data-testid="header">
        <img src={LogoIcon} alt="Loft taxi" />
        <div data-testid="controls">
          {props.isAuth ? renderAuthedControls() : renderUnAuthedControls()}
        </div>
      </Container>
    </AppBar>
  );
});
