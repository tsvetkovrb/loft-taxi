import React from 'react';
import { useDispatch } from 'react-redux';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import { useSelector } from 'store';
import { logoutAction } from 'store/actions/authActinos';

import { Header } from 'components/Header/Header';

const unvisiblePaths = ['/signup', '/login'];

const HeaderWrapper = (props: RouteComponentProps) => {
  const dispatch = useDispatch();
  const isAuth = useSelector(state => state.authReducer.isAuth);
  const currentPath = props.location.pathname;

  const doLogout = () => {
    try {
      localStorage.removeItem('store');
      dispatch(logoutAction());
    } catch (error) {
      console.log(error);
    }
  };

  if (unvisiblePaths.includes(currentPath)) {
    return null;
  }

  return <Header isAuth={isAuth} doLogout={doLogout} />;
};

export const HeaderContainer = withRouter(HeaderWrapper);
