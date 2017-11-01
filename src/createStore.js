import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import createRouter from './createRouter';
import appReducers from './ducks';
import * as callApi from './callApi';

const router = createRouter();

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const buildReducer = (reducers) => (
  combineReducers({
    ...appReducers,
    location: router.reducer,
  })
);

export default () => {
  const reducers = buildReducer(appReducers);
  const store = createStore(
    reducers,
    composeEnhancers(
      router.enhancer,
      applyMiddleware(
        thunk.withExtraArgument((action) => (
          callApi(action, store.dispatch, store.getState)
        )),
        router.middleware,
      ),
    ),
  );

  return store;
};
