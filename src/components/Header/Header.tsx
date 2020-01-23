import React, { useCallback } from 'react';

import { ROUTES } from 'utils/routes';

import './Header.scss';

interface IProps {
  navigateTo: (route: string) => void;
}

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

export const Header: React.FC<IProps> = ({ navigateTo }) => {
  const handleClick = useCallback(
    route => (e: any) => {
      e.preventDefault();

      navigateTo(route);
    },
    [navigateTo],
  );

  return (
    <div className="header">
      {headerStructure.map((headerItem, index) => (
        <a
          key={index}
          href={headerItem.href}
          className={headerItem.className}
          onClick={handleClick(headerItem.address)}
        >
          {headerItem.text}
        </a>
      ))}
    </div>
  );
};
