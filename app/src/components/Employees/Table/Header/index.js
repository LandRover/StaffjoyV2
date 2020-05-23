import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { DataTableHead, DataTableRow, DataTableHeadCell } from '@rmwc/data-table';

require('./table-header.scss');

function TableHeader({ columns }) {
  return (
    <DataTableHead>
      <DataTableRow>
        {
          _.map(columns, (column) => {
            const classes = classNames({
              [`col-${column.colWidth}`]: true,
            });
            const key = `col-header-${column.columnId}`;

            return (
              <DataTableHeadCell key={key} className={classes}>
                {column.displayName}
              </DataTableHeadCell>
            );
          })
        }
      </DataTableRow>
    </DataTableHead>
  );
}

TableHeader.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TableHeader;
