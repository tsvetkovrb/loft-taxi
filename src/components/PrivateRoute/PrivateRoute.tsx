import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface IPrivateRoute extends RouteProps {
  isAuth: boolean;
  to: string;
}

export const PrivateRoute: React.FC<IPrivateRoute> = (props): any => {
  return props.isAuth ? (
    <Route component={props.component} {...props} />
  ) : (
    <Redirect to={props.to} />
  );
};
