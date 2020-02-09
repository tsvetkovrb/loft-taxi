import React from 'react';
import { useDispatch } from 'react-redux';

import { useSelector } from 'store';
import { logoutAction } from 'store/actions/authActinos';

import { Header } from 'components/Header/Header';

export const HeaderContainer = React.memo(() => {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const logoutDispatch = useDispatch();

  const doLogout = () => {
    try {
      localStorage.removeItem('store');
      logoutDispatch(logoutAction());
    } catch (error) {
      console.log(error);
    }
  };

  return <Header isAuth={isAuth} doLogout={doLogout} />;
});
