import React from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'store';
import { loginAction } from 'store/actions/authActinos';
import { LoginForm } from 'forms/LoginForm';
import { TLoginFormPayload } from 'utils/types';

export const LoginFormContainer = () => {
  const dispatch = useDispatch();
  const isFetching = useSelector(state => state.authReducer.isFetching);
  const handleLogin = (payload: TLoginFormPayload) => dispatch(loginAction(payload));

  return <LoginForm isFetching={isFetching} handleLogin={handleLogin} />;
};
