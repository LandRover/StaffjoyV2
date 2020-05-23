import React from 'react';
import PropTypes from 'prop-types';

import { DataTableCell } from '@rmwc/data-table';

require('./table-photo-name.scss');

function TablePhotoName({ name, photoUrl = '' }) {
  return (
    <DataTableCell className="table-photo-name">
      <img
        className="profile-icon"
        role="presentation"
        src={photoUrl}
      />
      <span className="name-label">{name}</span>
    </DataTableCell>
  );
}

TablePhotoName.propTypes = {
  name: PropTypes.string.isRequired,
  photoUrl: PropTypes.string,
};

export default TablePhotoName;
