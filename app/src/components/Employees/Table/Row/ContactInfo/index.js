import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { formatPhoneNumber } from 'utility';

import { DataTableCell } from '@rmwc/data-table';

require('./contact-info.scss');

function TableContactInfo({ email, phoneNumber }) {
  const nullValue = String.fromCharCode('8212');
  const value = formatPhoneNumber(phoneNumber) || email || nullValue;

  const labelClasses = classNames({
    'table-contact-info-label': true,
    empty: value === nullValue,
  });

  return (
    <DataTableCell
      className={labelClasses}
    >
      {value}
    </DataTableCell>
  );
}

TableContactInfo.propTypes = {
  email: PropTypes.string,
  phoneNumber: PropTypes.string,
};

export default TableContactInfo;
