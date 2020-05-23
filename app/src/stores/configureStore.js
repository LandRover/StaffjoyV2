import { createStore, applyMiddleware, compose } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware } from 'connected-react-router';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import rootReducer from 'reducers/index';
import { detectEnvironment } from 'utility';
import { ENV_NAME_DEVELOPMENT } from 'constants/config';

const history = createBrowserHistory();
const middlewares = [routerMiddleware(history), thunk];

if (detectEnvironment() === ENV_NAME_DEVELOPMENT) {
  const logger = createLogger();
  middlewares.push(logger);
}

export { history };

export default function configureStore(initialState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const store = createStore(
		rootReducer(history), // root reducer with router state
		initialState,
		composeEnhancer(applyMiddleware(...middlewares)),
  );

	return store;
}
