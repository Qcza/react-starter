import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducers from './reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // eslint-disable-line no-underscore-dangle
const middlewares = [thunkMiddleware];
let store; // eslint-disable-line import/no-mutable-exports

if (process.env.NODE_ENV !== 'production') {
  store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(...middlewares)),
  );
} else {
  store = createStore(
    reducers,
    applyMiddleware(...middlewares),
  );
}

export default store;
