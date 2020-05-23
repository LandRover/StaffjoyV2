import classNames from 'classnames';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { CircularProgress } from '@rmwc/circular-progress';
import * as fieldUpdateStatus from 'constants/fieldUpdateStatus';

require('./employee-form-field.scss');

class EmployeeFormField extends Component {

  state = {
    showSuccess: false
  };


  constructor(props) {
    super(props);
  }


  componentDidUpdate(prevProps) {
    if (
      this.props.updateStatus === fieldUpdateStatus.SUCCESS &&
      prevProps.updateStatus === fieldUpdateStatus.UPDATING
    ) {
      this.setState({ showSuccess: true });

      setTimeout(
        () => { this.setState({ showSuccess: false }); },
        1000,
      );
    }
  }


  render() {
    const { iconKey, input, onBlur, updateStatus } = this.props;
    const inputId = `employee-form-field-${input.name}`;
    const inputElement = (
      <input
        id={inputId}
        className="employee-form-field-input"
        disabled={updateStatus === fieldUpdateStatus.UPDATING}
        name={input.name}
        value={input.value}
        onBlur={(event) => {
          // Redux event
          input.onBlur(event);
          // Component event
          if (onBlur) { onBlur(event); }
        }}
        onChange={input.onChange}
      />
    );

    let icon;
    if (iconKey) {
      const iconHtmlFor = `employee-form-field-${input.name}`;
      icon = (
        <label
          className="employee-form-field-label"
          htmlFor={iconHtmlFor}
        >
          <i className="material-icons">{iconKey}</i>
        </label>
      );
    }

    let progress;
    if (updateStatus === fieldUpdateStatus.UPDATING) {
      progress = <CircularProgress size="xsmall" />;
    }

    let success;
    if (this.state.showSuccess) {
      success = (
        <div className="employee-form-field-success">
          <i className="material-icons">check_circle</i>
          <span>Saved!</span>
        </div>
      );
    }
    const isUpdating = updateStatus === fieldUpdateStatus.UPDATING;
    const className =
      classNames(
        'employee-form-field',
        {
          'employee-form-field-updating': isUpdating,
        }
      );

    return (
      <div className={className}>
        {icon}
        {inputElement}
        {progress}
        {success}
      </div>
    );
  }
}


EmployeeFormField.propTypes = {
  iconKey: PropTypes.string,
  updateStatus: PropTypes.string,
  /* `input` comes from the redux-form API */
  input: PropTypes.shape({
    onBlur: PropTypes.func.isRequired,
  }).isRequired,
  onBlur: PropTypes.func,
};


export default EmployeeFormField;
