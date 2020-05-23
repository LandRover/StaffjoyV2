import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { TwitterPicker } from 'react-color';
import { CircularProgress } from '@rmwc/circular-progress';
import DeleteIcon from 'components/SVGs/DeleteIcon';
import * as constants from 'constants/constants';

import { DataTableRow, DataTableCell } from '@rmwc/data-table';

require('./job-row.scss');

export default class JobRow extends Component {

  componentDidMount() {
    if (this.props.isNewJob) {
      this.input.focus();
    }
  }

  render() {
    const {
      job,
      colorPicker,
      handleJobNameChange,
      handleJobNameBlur,
      handleJobNameKeyPress,
      handleJobColorClick,
      handleColorPickerChange,
      handleShowModalClick,
      jobFieldsSaving,
      jobFieldsShowSuccess,
    } = this.props;

    return (
      <DataTableRow
        key={`table-row-${job.uuid}`}
        className="table-row-job"
      >
        <DataTableCell
          className="job-name-cell"
        >
          <input
            className="job-name-input"
            ref={(input) => { this.input = input; }}
            value={job.name}
            onChange={(event) => { handleJobNameChange(event, job.uuid); }}
            onBlur={(event) => { handleJobNameBlur(event, job.uuid); }}
            onKeyPress={(event) => { handleJobNameKeyPress(event, job.uuid); }}
          />
          {
            jobFieldsSaving.includes(job.uuid)
            &&
            <CircularProgress size="xsmall" />
          }
          {
            jobFieldsShowSuccess.includes(job.uuid)
            &&
            !jobFieldsSaving.includes(job.uuid)
            &&
            <div className="job-form-field-success">
              <i className="material-icons">check_circle</i>
              <span>Saved!</span>
            </div>
          }
        </DataTableCell>
        <DataTableCell
          className="job-color-cell"
        >
          <div
            style={{
              backgroundColor: `#${job.color}`,
            }}
            className="job-color-circle"
            onClick={event => handleJobColorClick(event, job.uuid)}
          />
          <div className="color-picker-container">
            {
              colorPicker.jobUuidVisible === job.uuid
              &&
              <div>
                <div
                  className="color-picker-overlay"
                  onClick={event => handleJobColorClick(event, null)}
                />
                <TwitterPicker
                  triangle="top-right"
                  colors={constants.COLOR_PICKER_COLORS}
                  onChange={({ hex, source }, event) => {
                    handleColorPickerChange({ hex, source }, job.uuid, event);
                  }}
                />
              </div>
            }
          </div>
        </DataTableCell>
        <DataTableCell className="job-delete-cell">
          <DeleteIcon
            fill="#666666"
            width="25"
            height="25"
            onClick={() => { handleShowModalClick(job.uuid); }}
          />
        </DataTableCell>
      </DataTableRow>
    );
  }
}

JobRow.propTypes = {
  isNewJob: PropTypes.bool,
  job: PropTypes.object,
  colorPicker: PropTypes.object.isRequired,
  handleJobColorClick: PropTypes.func,
  handleColorPickerChange: PropTypes.func,
  handleJobNameChange: PropTypes.func.isRequired,
  handleJobNameBlur: PropTypes.func.isRequired,
  handleJobNameKeyPress: PropTypes.func.isRequired,
  handleShowModalClick: PropTypes.func.isRequired,
  jobFieldsSaving: PropTypes.array.isRequired,
  jobFieldsShowSuccess: PropTypes.array.isRequired,
};

JobRow.defaultProps = {
  job: {},
  isNewJob: false,
  handleJobColorClick: () => {},
  handleColorPickerChange: () => {},
};
