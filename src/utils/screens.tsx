import React from 'react';

import { ROUTES } from './routes';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { SignupPage } from 'pages/SignupPage/SignupPage';
import { MapPage } from 'pages/MapPage/MapPage';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';

interface IProp {
  setActiveScreen: (activeScreen: string) => void;
}

export const SCREENS: { [key: string]: (props: IProp) => JSX.Element } = {
  [ROUTES.login]: () => <LoginPage />,
  [ROUTES.signup]: ({ setActiveScreen }) => <SignupPage setActiveScreen={setActiveScreen} />,
  [ROUTES.map]: () => <MapPage />,
  [ROUTES.profile]: () => <ProfilePage />,
};
