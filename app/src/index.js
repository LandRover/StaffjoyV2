import React from 'react';
import ReactDOM from 'react-dom';
import { Provider, ReactReduxContext } from 'react-redux';
import { Route, Switch } from 'react-router';
import { BrowserRouter as Router, Redirect } from 'react-router-dom';
import Raven from 'raven-js';
import configureStore, { history } from 'stores/configureStore';
import { ConnectedRouter } from 'connected-react-router';
import Launcher from 'components/Launcher';
import App from 'components/App';
import Employees from 'components/Employees';
import EmployeeSidePanel from 'components/Employees/EmployeeSidePanel';
import InfoSidePanel from 'components/Employees/InfoSidePanel';
import Scheduling from 'components/Scheduling';
import Settings from 'components/Settings';
import { Title, OtherTitle } from 'components/Title';
import * as paths from 'constants/paths';
import { detectEnvironment } from './utility';
import {
  ENV_NAME_DEVELOPMENT,
  ENV_NAME_PRODUCTION,
  SENTRY_STAGING_KEY,
  SENTRY_PRODUCTION_KEY,
} from './constants/config';

require('./main.scss');

const currentEnv = detectEnvironment();

if (currentEnv !== ENV_NAME_DEVELOPMENT) {
  const sentryKey = (currentEnv === ENV_NAME_PRODUCTION) ?
    SENTRY_PRODUCTION_KEY : SENTRY_STAGING_KEY;
  Raven
    .config(sentryKey)
    .install();
}

const store = configureStore();

const Main = () => 
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <App>
        {/* Company Launcher  */}
        <Switch>
          <Route
              exact path={paths.getRoute(paths.ROOT_PATH)}
              component={Launcher}
            />

          {/* Base page for a specific company */}
          
          <Redirect exact from={paths.getRoute(paths.COMPANY_BASE)} to={paths.getRoute(paths.COMPANY_EMPLOYEES)} />

          <Route
            path={paths.getRoute(paths.COMPANY_EMPLOYEES)} component={ (props) => (
              <Employees { ...props }>
                <Switch>
                  <Route 
                    exact path={paths.getRoute(paths.COMPANY_EMPLOYEES)}
                    component={InfoSidePanel} />
                  
                  <Route
                    exact path={paths.getRoute(paths.COMPANY_EMPLOYEE)}
                    component={EmployeeSidePanel}
                  />
                </Switch>
              </Employees>
            ) }
          />

          <Route
            path={paths.getRoute(paths.COMPANY_HISTORY)}
            component={Title}
          />

          {/* Base page for a team within a company  */}
          
          <Redirect exact from={paths.getRoute(paths.TEAM_BASE)} to={paths.getRoute(paths.TEAM_SCHEDULING)} />

          <Route
            path={paths.getRoute(paths.TEAM_SCHEDULING)}
            component={Scheduling}
          />
          <Route
            path={paths.getRoute(paths.TEAM_SETTINGS)}
            component={Settings}
          />
          <Route
            path={paths.getRoute(paths.TEAM_SHIFT_BOARD)}
            component={OtherTitle}
          />
        </Switch>
      </App>
    </ConnectedRouter>
  </Provider>

ReactDOM.render(
  <Main />,
  document.getElementById('app')
);
