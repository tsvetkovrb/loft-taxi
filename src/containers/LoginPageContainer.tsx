import React from 'react';
import { LoginPage } from 'pages/LoginPage';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import { loginAction } from 'store/actions/authActinos';

export const LoginPageContainer = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.authReducer.isFetching);
  const handleLogin = (email: string, password: string) =>
    dispatch(loginAction({ email, password }));

  return <LoginPage isFetching={isFetching} handleLogin={handleLogin} />;
};
