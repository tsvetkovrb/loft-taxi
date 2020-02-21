import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { getSavedStore } from 'utils/localStorage';
import { rootReducer } from './reducers';
import { rootSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware();

const preloadedStore = getSavedStore();

export const store = createStore(
  rootReducer,
  preloadedStore,
  applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);
