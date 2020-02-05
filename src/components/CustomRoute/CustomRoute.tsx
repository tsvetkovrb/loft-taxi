import React from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

interface ICustomRoute extends RouteProps {
  isAuth: boolean;
  to: string;
}

export const CustomRoute: React.FC<ICustomRoute> = (props): any => {
  return props.isAuth ? <Route component={props.component} {...props} /> : <Redirect to={props.to} />;
};
