import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router'
import associations from './associations';
import company from './company';
import employees from './employees';
import scheduling from './scheduling';
import teams from './teams';
import user from './user';
import whoami from './whoami';
import settings from './settings';

const rootReducer = (history) => combineReducers({
  router: connectRouter(history),
  form: formReducer,
  associations,
  company,
  employees,
  scheduling,
  teams,
  user,
  whoami,
  settings
});

export default rootReducer;