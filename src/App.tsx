import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { LoginPage } from 'pages/LoginPage/LoginPage';
import { SignupPage } from 'pages/SignupPage/SignupPage';

import './App.module.scss';
import { PrivateRoute } from 'components/PrivateRoute/PrivateRoute';
import { ProfilePage } from 'pages/ProfilePage/ProfilePage';

export const App = () => {
  return (
    <Switch>
      <Route path="/login" component={LoginPage} />
      <Route path="/signup" component={SignupPage} />
      <PrivateRoute isAuth={false} component={ProfilePage} path="/profile" to="/login" />
    </Switch>
  );
};
