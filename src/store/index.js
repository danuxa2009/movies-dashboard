// create store import в inxed js
import { createStore, applyMiddleware, compose } from 'redux';
import reducer from './reducers/reducer';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';

const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const middleware = [thunk];
const loggerMiddleware = createLogger();

const composeEnhancers = devtools || compose;

export const store = createStore(
  reducer,
  composeEnhancers(applyMiddleware(...middleware, loggerMiddleware))
);
