import _ from 'lodash';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, GridInner, GridCell } from '@rmwc/grid';
import * as actions from '../../actions';
import LoadingScreen from '../LoadingScreen';
import ProfilePhoto from '../ProfilePhoto';
import AccountUpdate from '../AccountUpdate';
import PasswordUpdate from '../PasswordUpdate';
import NotificationManager from '../NotificationManager';
import StatsPanel from '../StatsPanel';
import StaffjoyButton from '../StaffjoyButton';
import Intercom from '../Intercom';
import { routeToMicroservice } from '../../utility';

class App extends Component {
  componentDidMount() {
    const { dispatch } = this.props;

    dispatch(actions.initialize());

    // get intercom settings
    dispatch(actions.fetchIntercomSettings());
  }

  render() {
    const {
      userData,
      isInitializing,
      formData,
      companies,
      intercomSettings,
    } = this.props;

    if (isInitializing) {
      return (
        <LoadingScreen />
      );
    }

    let appButton = null;

    if (companies.length > 0) {
      appButton = (
        <li>
          <a href={routeToMicroservice('app')}>
            <StaffjoyButton
              size="small"
              buttonType="primary"
            >
              Go to App
            </StaffjoyButton>
          </a>
        </li>
      );
    }

    return (
      <Grid>
        <GridInner
          id="myaccount"
        >
          <GridCell
            span={4}
          >
            <ProfilePhoto photoUrl={userData.photo_url} />
            <StatsPanel memberSince={userData.member_since} />
            <ul className="button-nav">
              {appButton}
              <li>
                <a href={routeToMicroservice('www', '/logout/')}>
                  <StaffjoyButton
                    size="small"
                    buttonType="outline"
                  >
                    Logout
                  </StaffjoyButton>
                </a>
              </li>
            </ul>
          </GridCell>
          <GridCell
            span={4}
          >
            <AccountUpdate
              name={userData.name}
              email={userData.email}
              phoneNumber={userData.phonenumber}
              formData={formData.accountUpdate}
            />
            <PasswordUpdate formData={formData.passwordUpdate} />
          </GridCell>
          <GridCell
            span={4}
          >
            <NotificationManager
              enableEmailNotifications
              enableSmsNotifications
              enableReminders
            />
          </GridCell>
          {!_.isEmpty(intercomSettings)
          && (
          <Intercom
            {...intercomSettings}
            appID={intercomSettings.app_id}
          />
          )}
        </GridInner>
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  const userState = state.user;
  const whoAmIState = state.whoami;
  const userData = userState.data;
  const formData = state.forms;
  const { intercomSettings } = state.whoami;

  const admin = _.get(whoAmIState.data, 'admin', {});
  const companies = _.get(admin, 'companies') || [];

  return {
    isInitializing: _.isEmpty(userData) || !userState.lastUpdate
      || _.isEmpty(whoAmIState.data),
    userData,
    formData,
    companies,
    intercomSettings,
  };
}

App.propTypes = {
  isInitializing: PropTypes.bool.isRequired,
  userData: PropTypes.object.isRequired,
  formData: PropTypes.object.isRequired,
  dispatch: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired,
  intercomSettings: PropTypes.object.isRequired,
};

export default connect(mapStateToProps)(App);
