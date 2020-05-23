import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { matchPath } from 'react-router';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import NavigationSide from 'components/SideNavigation';
import Intercom from 'components/Intercom';
import * as paths from 'constants/paths';
import * as actions from 'actions';

import Drawer, { DrawerContent, DrawerAppContent } from '@rmwc/drawer';

require('./app.scss');


class App extends Component {
  componentDidMount() {
    const { dispatch, companyUuid } = this.props;

    // query whoami endpoint if needed
    dispatch(actions.getWhoAmI());

    // get user data too
    dispatch(actions.getUser());

    // get company info because we are now at the company level
    dispatch(actions.getCompany(companyUuid));

    // get team data because it's needed for side nav paths
    dispatch(actions.getTeams(companyUuid));

    // get intercom settings
    dispatch(actions.fetchIntercomSettings());
  }

  render() {
    const { children, companyUuid, intercomSettings } = this.props;

    return (
      <div className='drawer-container'>
        <NavigationSide companyUuid={companyUuid} />

        <DrawerAppContent className='drawer-app-content'>
          {children}
        </DrawerAppContent>

        {!_.isEmpty(intercomSettings)
        &&
          <Intercom
            {...intercomSettings}
            appID={intercomSettings.app_id}
          />}
      </div>
    );
  }
}

App.propTypes = {
  dispatch: PropTypes.func.isRequired,
  children: PropTypes.element,
  companyUuid: PropTypes.string.isRequired,
  intercomSettings: PropTypes.object.isRequired,
};

function mapStateToProps(state, ownProps) {
  // @TODO is there a cleaner way? to get it via ownProps
  // ownProps.match.params = [] - always for some reason.
  const match = matchPath(location.pathname, { 
    path: paths.getRoute(paths.COMPANY_EMPLOYEES),
    exact: true,
    strict: false
  }) || matchPath(location.pathname, { 
    path: paths.getRoute(paths.COMPANY_EMPLOYEE),
    exact: true,
    strict: false
  }) || matchPath(location.pathname, { 
    path: paths.getRoute(paths.COMPANY_HISTORY),
    exact: true,
    strict: false
  }) || matchPath(location.pathname, { 
    path: paths.getRoute(paths.TEAM_SCHEDULING),
    exact: true,
    strict: false
  }) || matchPath(location.pathname, { 
    path: paths.getRoute(paths.TEAM_SETTINGS),
    exact: true,
    strict: false
  })
  ;
  
  let companyUuid = null;
  try {
    companyUuid = match.params.companyUuid;
  } catch(e) {
    // err?
  }


  
  return {
    companyUuid,
    intercomSettings: state.whoami.intercomSettings,
  };
}

const ConnectedComponent = connect(mapStateToProps)(App);

export default withRouter(ConnectedComponent);
