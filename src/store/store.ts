import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { rootReducer } from './reducers';
import { customMiddleware } from './middlewares/customMiddleware';

export type RootState = ReturnType<typeof rootReducer>;

let preloadedStore = null;

try {
  preloadedStore = localStorage.getItem('store');
  if (preloadedStore) {
    preloadedStore = JSON.parse(preloadedStore);
  }
} catch (error) {
  console.log(error);
}

export const store = preloadedStore
  ? createStore(rootReducer, preloadedStore as any, applyMiddleware(customMiddleware, logger))
  : createStore(rootReducer, applyMiddleware(customMiddleware, logger));
