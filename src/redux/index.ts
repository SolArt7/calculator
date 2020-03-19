import {createStore, applyMiddleware} from 'redux';
import logger from 'redux-logger';
import reducers from './reducers';

const enhancer = applyMiddleware(logger);

const store = createStore(reducers, enhancer);

// dev only
declare global {
  interface Window {
    store: any
  }
}
window.store = store;

export default store;