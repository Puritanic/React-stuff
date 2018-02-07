import { createStore, applyMiddleware } from 'redux';
import ReduxPromise from 'redux-promise';
import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(ReduxPromise));
