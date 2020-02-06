import React from 'react';
import { useSelector } from 'store';

import { Header } from 'components/Header/Header';
import { logoutAction, loginAction } from 'store/actions/authActinos';
import { useDispatch } from 'react-redux';

export const HeaderContainer = React.memo(() => {
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const doLogout = useDispatch();
  const doLogin = useDispatch();

  return (
    <Header
      isAuth={isAuth}
      doLogout={() => doLogout(logoutAction())}
      doLogin={() => doLogin(loginAction())}
    />
  );
});
