import React, { useContext } from 'react';

import { ROUTES } from 'utils/routes';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { SignupPage } from 'pages/SignupPage/SignupPage';
import { MapPage } from 'pages/MapPage/MapPage';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';
import { CustomContext, ICustomContext } from 'App';

export const ScreenHandler = () => {
  const { isLoggedIn, activeScreen = 'profile' }: ICustomContext = useContext(
    CustomContext,
  );

  return {
    [ROUTES.login]: isLoggedIn ? <MapPage /> : <LoginPage />,
    [ROUTES.signup]: isLoggedIn ? <MapPage /> : <SignupPage />,
    [ROUTES.map]: isLoggedIn ? <MapPage /> : <LoginPage />,
    [ROUTES.profile]: isLoggedIn ? <ProfilePage /> : <LoginPage />,
  }[activeScreen];
};
