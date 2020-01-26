import React, { useCallback } from 'react';
import { AppBar, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import logoIcon from './static/logo.png';
import { ROUTES } from 'utils/routes';

interface IProps {
  navigateTo: (route: string) => void;
}

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
});

const headerStructure = [
  {
    className: 'header__item',
    text: 'Войти',
    href: '/',
    address: ROUTES.login,
  },
  {
    className: 'header__item',
    text: 'Зарегестрироваться',
    href: '/',
    address: ROUTES.signup,
  },
  {
    className: 'header__item',
    text: 'Карта',
    href: '/',
    address: ROUTES.map,
  },
  {
    className: 'header__item',
    text: 'Профиль',
    href: '/',
    address: ROUTES.profile,
  },
];

export const Header: React.FC<IProps> = React.memo(({ navigateTo }) => {
  const styles = useStyles();

  const handleClick = useCallback(
    route => (e: any) => {
      e.preventDefault();

      navigateTo(route);
    },
    [navigateTo],
  );

  return (
    <AppBar className={styles.header} position='static'>
      <Container className={styles.container}>
        <img src={logoIcon} alt="Loft taxi" />
        <div>
          {headerStructure.map((headerItem, index) => (
            <Button
              key={index}
              href={headerItem.href}
              className={headerItem.className}
              onClick={handleClick(headerItem.address)}
            >
              {headerItem.text}
            </Button>
          ))}
        </div>
      </Container>
    </AppBar>
  );
});
