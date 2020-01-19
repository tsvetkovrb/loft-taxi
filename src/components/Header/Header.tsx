import React from 'react';

import { ROUTES } from 'utils/routes';

import './Header.scss';

interface IProps {
  navigateTo: (route: string) => void;
}

export const Header: React.FC<IProps> = ({ navigateTo }) => {
  const handleClick = (route: string) => (e: React.MouseEvent) => {
    e.preventDefault();

    navigateTo(route);
  };

  return (
    <div className="header">
      <a href="/" className="header__item" onClick={handleClick(ROUTES.login)}>
        Войти
      </a>
      <a href="/" className="header__item" onClick={handleClick(ROUTES.signup)}>
        Зарегестрироваться
      </a>
      <a href="/" className="header__item" onClick={handleClick(ROUTES.map)}>
        Карта
      </a>
      <a href="/" className="header__item" onClick={handleClick(ROUTES.profile)}>
        Профиль
      </a>
    </div>
  );
};
