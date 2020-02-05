import React from 'react';
import { AppBar, Container, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';
import logoIcon from 'static/logo.png';
import { ROUTES } from 'utils/routes';

interface IProps {
  navigateTo: (route: string) => void;
}

type LinkData = {
  className: string;
  text: string;
  href: string;
  address: string;
  isAuthorizedShow: boolean;
};

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
    isAuthorizedShow: false,
  },
  {
    className: 'header__item',
    text: 'Зарегестрироваться',
    href: '/',
    address: ROUTES.signup,
    isAuthorizedShow: false,
  },
  {
    className: 'header__item',
    text: 'Карта',
    href: '/',
    address: ROUTES.map,
    isAuthorizedShow: true,
  },
  {
    className: 'header__item',
    text: 'Профиль',
    href: '/',
    address: ROUTES.profile,
    isAuthorizedShow: true,
  },
];

export const Header: React.FC<IProps> = React.memo(({ navigateTo }) => {
  const styles = useStyles();

  const showAvailableLinks = (
    links: LinkData[],
    condition: boolean = false,
  ) => {
    return links.filter(linkData => linkData.isAuthorizedShow === condition);
  };
  const isLoggedIn = false;

  return (
    <AppBar className={styles.header} position="static" data-testid="header">
      <Container className={styles.container}>
        <img src={logoIcon} alt="Loft taxi" />
        <div data-testid="controls">
          {showAvailableLinks(headerStructure, isLoggedIn).map(
            (headerItem, index) => (
              <Button
                key={index}
                href={headerItem.href}
                className={headerItem.className}
              >
                {headerItem.text}
              </Button>
            ),
          )}
          {isLoggedIn && <Button> Выйти</Button>}
        </div>
      </Container>
    </AppBar>
  );
});
