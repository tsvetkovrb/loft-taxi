import React from 'react';

import { ROUTES } from './routes';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { SignupPage } from 'pages/SignupPage/SignupPage';
import { MapPage } from 'pages/MapPage/MapPage';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';

export const SCREENS: { [key: string]: JSX.Element } = {
  [ROUTES.login]: <LoginPage />,
  [ROUTES.signup]: <SignupPage />,
  [ROUTES.map]: <MapPage />,
  [ROUTES.profile]: <ProfilePage />,
};
