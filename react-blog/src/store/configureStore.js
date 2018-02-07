import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import reducers from './reducers';

export const store = createStore(reducers, applyMiddleware(promise));
