import { request } from 'api';

export const customMiddleware = ({ dispatch, getState }: any) => (next: any) => (action: any) => {
  if (typeof action === 'function') {
    return action(dispatch, request, getState);
  }
  return next(action);
};
