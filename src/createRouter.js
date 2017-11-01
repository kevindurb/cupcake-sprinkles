import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import * as constants from './ducks/location';

const routes = {
  [constants.HOME]: '/',
};

export default () => {
  const history = createHistory();
  const { reducer, middleware, enhancer } = connectRoutes(history, routes);

  return {
    reducer,
    middleware,
    enhancer,
  };
};
