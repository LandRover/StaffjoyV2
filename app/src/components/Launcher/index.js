import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { push } from 'connected-react-router';
import LoadingScreen from 'components/LoadingScreen';
import * as actions from 'actions';
import {
  COMPANY_BASE,
  getRoute,
  routeToMicroservice,
} from 'constants/paths';

require('./launcher.scss');

class Launcher extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(actions.getWhoAmI());
  }

  componentDidUpdate() {
    const { companies, teams, isFetching, dispatch } = this.props;

    if (!isFetching) {
      // redirect if not an admin
      if (companies.length === 0) {
        /* eslint-disable */
        // route to new company sign up if no privledges
        if (teams.length === 0) {
          window.location = routeToMicroservice('www', '/new-company/');
        } else {
          // route to myaccount (if a worker)
          window.location = routeToMicroservice('myaccount');
        }
        /* eslint-enable */
      }
      // if only a member of 1 organization, route them directly
      if (companies.length === 1) {
        const company = companies.pop();
        dispatch(push(
          getRoute(COMPANY_BASE, { companyUuid: company.uuid })
        ));
      }
    }
  }

  render() {
    const { companies, isFetching } = this.props;

    if (isFetching) {
      return (
        <LoadingScreen />
      );
    }

    return (
      <ul className="company-launcher">
        {_.map(companies, (company) => {
          const route = getRoute(COMPANY_BASE, { companyUuid: company.uuid });
          const liKey = `launcher-li-${company.uuid}`;
          const linkKey = `launcher-a-${company.uuid}`;
          return (
            <li className="list__item" key={liKey}>
              <Link
                key={linkKey}
                className="company"
                to={route}
              >
                {company.name}
              </Link>
            </li>
          );
        })}
      </ul>
    );
  }
}

Launcher.propTypes = {
  dispatch: PropTypes.func.isRequired,
  companies: PropTypes.array.isRequired,
  teams: PropTypes.array.isRequired,
  isFetching: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { data, isFetching } = state.whoami;
  const admin = _.get(data, 'admin', {});
  const companies = _.get(admin, 'companies') || [];
  const worker = _.get(data, 'worker', {});
  const teams = _.get(worker, 'teams') || [];

  return {
    isFetching: isFetching || _.isEmpty(data),
    companies,
    teams,
  };
}

export default connect(mapStateToProps)(Launcher);
