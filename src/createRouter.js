import { connectRoutes } from 'redux-first-router';
import createHistory from 'history/createBrowserHistory';
import routes from './ducks/location';

export default () => {
  const history = createHistory();
  const { reducer, middleware, enhancer } = connectRoutes(history, routes);

  return {
    reducer,
    middleware,
    enhancer,
  };
};
