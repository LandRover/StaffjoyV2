import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PlusIcon from 'components/SVGs/PlusIcon';
import TableHeader from './TableHeader';
import JobRow from './JobRow';

import { DataTable, DataTableContent, DataTableBody, DataTableRow, DataTableCell } from '@rmwc/data-table';

require('./team-jobs.scss');

export default class TeamJobs extends Component {

  getQueriedJobs() {
    const {
      jobs,
      filters,
    } = this.props;

    const searchQuery = _.get(filters, 'searchQuery', '');

    if (searchQuery === '') {
      return jobs;
    }

    const queriedJobs = {};

    _.forEach(jobs, (job, uuid) => {
      if (job.name.toLowerCase().includes(searchQuery.toLowerCase())) {
        queriedJobs[uuid] = job;
      }
    });

    return queriedJobs;
  }

  render() {
    const {
      colorPicker,
      handleJobColorClick,
      handleColorPickerChange,
      handleJobNameChange,
      handleJobNameBlur,
      handleJobNameKeyPress,
      handleShowModalClick,
      handleNewJobNameChange,
      handleNewJobNameBlur,
      handleNewJobNameKeyPress,
      handleAddNewJobClick,
      handleNewJobDeleteIconClick,
      jobFieldsSaving,
      jobFieldsShowSuccess,
      newJob,
    } = this.props;

    return (
      <DataTable className="staffjoy-table">
        <DataTableContent>
          <TableHeader />
          <DataTableBody>
            {_.map(this.getQueriedJobs(), (job) => {
              if (job.archived) {
                return null;
              }

              return (
                <JobRow
                  key={`job-row-${job.uuid}`}
                  job={job}
                  colorPicker={colorPicker}
                  handleJobNameChange={handleJobNameChange}
                  handleJobNameBlur={handleJobNameBlur}
                  handleJobNameKeyPress={handleJobNameKeyPress}
                  handleJobColorClick={handleJobColorClick}
                  handleColorPickerChange={handleColorPickerChange}
                  handleShowModalClick={handleShowModalClick}
                  jobFieldsSaving={jobFieldsSaving}
                  jobFieldsShowSuccess={jobFieldsShowSuccess}
                />
              );
            })}
            {
              newJob.isVisible
              &&
              <JobRow
                isNewJob
                job={newJob}
                colorPicker={colorPicker}
                handleJobNameChange={handleNewJobNameChange}
                handleJobNameBlur={handleNewJobNameBlur}
                handleJobNameKeyPress={handleNewJobNameKeyPress}
                handleShowModalClick={handleNewJobDeleteIconClick}
                jobFieldsSaving={jobFieldsSaving}
                jobFieldsShowSuccess={jobFieldsShowSuccess}
              />
            }
            <DataTableRow
              className="table-row-new-job"
              onClick={(event) => {
                if (newJob.isVisible) {
                  return;
                }

                handleAddNewJobClick(event);
              }}
            >
              <DataTableCell colSpan="3">
                <PlusIcon
                  fill="#9a9699"
                  width="26px"
                  height="26px"
                />
                Add New Job
              </DataTableCell>
            </DataTableRow>
          </DataTableBody>
        </DataTableContent>
      </DataTable>
    );
  }
}

TeamJobs.propTypes = {
  jobs: PropTypes.object.isRequired,
  newJob: PropTypes.object.isRequired,
  colorPicker: PropTypes.object.isRequired,
  handleJobColorClick: PropTypes.func.isRequired,
  handleColorPickerChange: PropTypes.func.isRequired,
  handleJobNameChange: PropTypes.func.isRequired,
  handleJobNameBlur: PropTypes.func.isRequired,
  handleJobNameKeyPress: PropTypes.func.isRequired,
  handleShowModalClick: PropTypes.func.isRequired,
  handleNewJobNameChange: PropTypes.func.isRequired,
  handleNewJobNameBlur: PropTypes.func.isRequired,
  handleNewJobNameKeyPress: PropTypes.func.isRequired,
  handleAddNewJobClick: PropTypes.func.isRequired,
  handleNewJobDeleteIconClick: PropTypes.func.isRequired,
  filters: PropTypes.object.isRequired,
  jobFieldsSaving: PropTypes.array.isRequired,
  jobFieldsShowSuccess: PropTypes.array.isRequired,
};
