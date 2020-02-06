import React from 'react';
import { App } from 'App';
import { useSelector } from 'store';

export const AppContainer = () => {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  return <App isAuth={isAuth} />;
};
