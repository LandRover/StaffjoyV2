import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DataTableCell } from '@rmwc/data-table';

require('./table-boolean-label.scss');

function TableBooleanLabel({ booleanField, callback }) {
  const labelClasses = classNames({
    'table-boolean-label': true,
    invalid: !booleanField,
  });

  return (
    <DataTableCell className={labelClasses} >
      {callback(booleanField)}
    </DataTableCell>
  );
}

TableBooleanLabel.propTypes = {
  booleanField: PropTypes.bool.isRequired,
  callback: PropTypes.func.isRequired,
};

export default TableBooleanLabel;
