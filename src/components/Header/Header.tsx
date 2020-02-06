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

export const Header = React.memo(() => {
  const styles = useStyles();

  return (
    <AppBar className={styles.header} position="fixed" data-testid="header">
      <Container className={styles.container}>
        <img src={LogoIcon} alt="Loft taxi" />
        <div data-testid="controls">
          <Link to="/login" className={styles.link}>
            <Button>Войти</Button>
          </Link>
          <Link to="/signup" className={styles.link}>
            <Button>Зарегестрироваться</Button>
          </Link>
          <Link to="/map" className={styles.link}>
            <Button>Карта</Button>
          </Link>
          <Link to="/profile" className={styles.link}>
            <Button>Профиль</Button>
          </Link>
          <Button>Выйти</Button>
        </div>
      </Container>
    </AppBar>
  );
});
