import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import TableHeader from './Header';
import TableRow from './Row';
import { DataTable, DataTableContent, DataTableBody } from '@rmwc/data-table';

require('./table.scss');

function Table({ columns, onRowClick, rows, uuidKeyName }) {
  // iterate through rows and create a row object
  return (
    <DataTable className="staffjoy-table">
      <DataTableContent>
        <TableHeader columns={columns} />
        <DataTableBody>
          {
            _.map(rows, (row) => {
              const rowKey = `table-row-${row[uuidKeyName]}`;
              return (
                <TableRow
                  key={rowKey}
                  rowData={row}
                  rowId={row[uuidKeyName]}
                  columns={columns}
                  onClick={onRowClick}
                />
              );
            })
          }
        </DataTableBody>
      </DataTableContent>
    </DataTable>
  );
}

Table.propTypes = {
  columns: PropTypes.arrayOf(PropTypes.object).isRequired,
  rows: PropTypes.arrayOf(PropTypes.object).isRequired,
  uuidKeyName: PropTypes.string.isRequired,
  onRowClick: PropTypes.func,
};

export default Table;
