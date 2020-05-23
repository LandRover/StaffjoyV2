import React from 'react';

import { DataTableHead, DataTableRow, DataTableHeadCell } from '@rmwc/data-table';

require('./table-header.scss');

function TableHeader() {
  return (
    <DataTableHead>
      <DataTableRow className="job-settings-header">
        <DataTableHeadCell>Jobs</DataTableHeadCell>
        <DataTableHeadCell className="job-color-header">Color</DataTableHeadCell>
        <DataTableHeadCell/>
      </DataTableRow>
    </DataTableHead>
  );
}

export default TableHeader;
