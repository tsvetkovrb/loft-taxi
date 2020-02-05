import React from 'react';
import { Switch, Redirect } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { SignupPage } from 'pages/SignupPage/SignupPage';

import { CustomRoute } from 'components/CustomRoute/CustomRoute';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';

import './App.module.scss';
import { MapPage } from 'pages/MapPage/MapPage';

const isAuth = true;

export const App = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/map" />
      <CustomRoute path="/map" component={MapPage} to="/login" isAuth={isAuth} />
      <CustomRoute path="/login" component={LoginPage} to="/profile" isAuth={!isAuth} />
      <CustomRoute path="/signup" component={SignupPage} to="/profile" isAuth={!isAuth} />
      <CustomRoute path="/profile" component={ProfilePage} to="/login" isAuth={isAuth} />
    </Switch>
  );
};
