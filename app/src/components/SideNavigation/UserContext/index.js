import _ from 'lodash';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@rmwc/button';
import { Menu, MenuSurfaceAnchor, MenuItem } from '@rmwc/menu';
import { ListDivider } from '@rmwc/list';
import {
  COMPANY_BASE,
  getRoute,
  routeToMicroservice,
} from 'constants/paths';

require('./side-navigation-user-context.scss');

function SideNavigationUserContext({
  companyUuid,
  companyName,
  companyPermissions,
  userName,
  userPhotoUrl,
}) {
  const [isMenuOpen, setMenuState] = useState(false);
  const toggleState = () => {
    setMenuState(!isMenuOpen);
  }

  // Must set open to false to keep menu in the correct state.
  // This does not follow the controlled component pattern
  // (see https://reactjs.org/docs/forms.html#controlled-components).
  // Follow https://github.com/material-components/material-components-web-react/issues/785
  // to get any updates.
  const onClose = () => {
    setMenuState(false);
  }

  return (
    <div id="user-context-menu" className="user-context">
      <Button onClick={() => toggleState()} label={userName} icon={<img
          className="profile-icon"
          role="presentation"
          src={userPhotoUrl}
        />} />
   
      {/* <Menu target="user-context-menu" valign="top" align="right"> */}

      <MenuSurfaceAnchor>
        <Menu
          open={isMenuOpen}
          onClose={onClose}
          onSelect={e => {
            location.href = e.target.item.dataset.url;
          }}
        >
          {
            _.map(companyPermissions, (company) => {
              const companyPath = getRoute(
                COMPANY_BASE, { companyUuid: company.uuid }
              );

              const route = `/?uuid=${company.uuid}/#${companyPath}`;
              const activated = (company.uuid === companyUuid) ? true : false;
              const menuKey = `menu-${company.uuid}`;
              const linkKey = `link-${company.uuid}`;

              return (
                <MenuItem key={menuKey} data-url={route}>
                  {company.name}
                </MenuItem>
              );
            })
          }

          <MenuItem data-url={routeToMicroservice('myaccount')}>
            My Account
          </MenuItem>

          <ListDivider />

          <MenuItem data-url={routeToMicroservice('www', '/logout/')}>
            Logout
          </MenuItem>
        </Menu>
      </MenuSurfaceAnchor>
    </div>
  );
}

SideNavigationUserContext.propTypes = {
  userName: PropTypes.string.isRequired,
  userPhotoUrl: PropTypes.string.isRequired,
  companyName: PropTypes.string.isRequired,
  companyPermissions: PropTypes.array.isRequired,
  companyUuid: PropTypes.string.isRequired,
};

export default SideNavigationUserContext;
