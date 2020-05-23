import _ from 'lodash';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { LinearProgress } from '@rmwc/linear-progress';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { ScaleModal } from 'boron-15';

import * as actions from '../../../actions';
import createEmployee from '../../../validators/create-employee';
import { ModalLayoutRightSideColumn } from '../../ModalLayout';
import SelectableModalList from '../../ModalLayout/SelectableList';
import StaffjoyButton from '../../StaffjoyButton';
import StaffjoyTextField from '../../StaffjoyTextField';

require('./create-employee-modal.scss');

const EMPTY_OBJECT = Object.freeze({});

// Adapter for redux-form. Add your prop - do not use spread operator.
function TextField({ disabled, input, label, meta, name, width, fullwidth, required }) {
  // helpText={meta.error}
  return (
    <StaffjoyTextField
      disabled={disabled}
      required={required}
      label={label}
      name={name}
      fullwidth={fullwidth}
      width={width}
      onChange={input.onChange}
      onBlur={input.onBlur}
    />
  );
}

TextField.propTypes = {
  disabled: PropTypes.bool,
  required: PropTypes.bool,
  input: PropTypes.object,
  label: PropTypes.string,
  meta: PropTypes.object,
  name: PropTypes.string,
  width: PropTypes.string,
  fullwidth: PropTypes.bool,
};

// Adapter for redux-form.
function SelectableList({
  displayByProperty,
  formField,
  input,
  meta,
  name,
  records,
  selectedUuid,
  uuidKey,
}) {
  return (
    <SelectableModalList
      displayByProperty={displayByProperty}
      error={meta.error}
      formCallback={({ teams }) => {
        // Adapt shape of argument to expected shape for redux-form.
        input.onChange({ ...teams });
      }}
      formField={formField}
      name={name}
      records={records}
      selectedUuid={selectedUuid}
      uuidKey={uuidKey}
    />
  );
}


SelectableList.propTypes = {
  displayByProperty: PropTypes.string,
  formField: PropTypes.string,
  input: PropTypes.object,
  meta: PropTypes.object,
  name: PropTypes.string,
  records: PropTypes.array,
  selectedUuid: PropTypes.string,
  uuidKey: PropTypes.string,
};

class CreateEmployeeModal extends Component {
  state = {
    submitting: false
  };


  static getDerivedStateFromProps(props, state) {
    if (props.submitSucceeded && state.submitting) {
      return {
        submitting: false
      };
    }

    return null;
  }


  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
    this.openModal = this.openModal.bind(this);

    this.submit = props.handleSubmit(() => {
      this.setState({ submitting: true });

      const { createEmployeeFromForm, companyUuid, dispatch } = this.props;
      dispatch(createEmployeeFromForm(companyUuid));
    });
  }


  componentDidUpdate(prevProps) {
    if (this.props.submitSucceeded && !prevProps.submitSucceeded) {
      this.closeModal();
      // TODO: add success modal?
    }
  }


  closeModal() {
    this.props.reset();
    this.modal.hide();
  }


  openModal() {
    this.modal.show();
  }


  render() {
    const { teams } = this.props;
    const { submitting } = this.state;

    let selectedUuid;
    if (teams.length === 1) {
      selectedUuid = teams[0].uuid;
    }

    const panelContent = (
      <Field
        component={SelectableList}
        displayByProperty="name"
        formField="teams"
        name="teams"
        records={teams}
        selectedUuid={selectedUuid}
        uuidKey="uuid"
      />
    );

    const cancelButton = (
      <StaffjoyButton
        key="cancel"
        buttonType="neutral"
        disabled={submitting}
        onClick={this.closeModal}
      >
        Cancel
      </StaffjoyButton>
    );

    let progressBar;
    if (submitting) {
      progressBar = <LinearProgress />;
    }

    const createButton = (
      <StaffjoyButton
        key="create"
        disabled={submitting}
        onClick={this.submit}
      >
        Create
      </StaffjoyButton>
    );

    const content = (
      <form className="create-employee-modal-content">
        <Field
          component={TextField}
          disabled={submitting}
          label="Full Name"
          name="full_name"
          width="100%"
          required={true}
        />
        <Field
          component={TextField}
          disabled={submitting}
          label="Email"
          name="email"
          width="100%"
        />
        <Field
          component={TextField}
          disabled={submitting}
          label="Phone"
          name="phonenumber"
          width="100%"
        />
      </form>
    );

    return (
      <div>
        <ScaleModal
          contentStyle={{
            /* due to chrome css bug */
            animation: 'none',
            borderRadius: '3px',
          }}
          modalStyle={{ width: '640px' }}
          ref={(modal) => { this.modal = modal; }}
          onHide={this.handleModalClose}
        >
          <div>
            {progressBar}
            <ModalLayoutRightSideColumn
              title="Create New Employee"
              panelTitle="Select Team(s)"
              panelContent={panelContent}
              buttons={[cancelButton, createButton]}
            >
              {content}
            </ModalLayoutRightSideColumn>
          </div>
        </ScaleModal>
        <StaffjoyButton
          buttonType="primary"
          size="small"
          onClick={this.openModal}
        >
          Create Employee
        </StaffjoyButton>
      </div>
    );
  }
}


CreateEmployeeModal.propTypes = {
  companyUuid: PropTypes.string.isRequired,
  createEmployeeFromForm: PropTypes.func.isRequired,
  dispatch: PropTypes.func.isRequired,
  teams: PropTypes.array.isRequired,
  /**
   * Submit handle factory exposed by redux-form.
   */
  handleSubmit: PropTypes.func.isRequired,
  reset: PropTypes.func.isRequired,
  submitSucceeded: PropTypes.bool.isRequired,
};


CreateEmployeeModal.defaultProps = {
  createEmployeeFromForm: () => {}
};


function mapStateToProps(state) {
  const createEmployeeForm = _.get(state.form, 'create-employee', EMPTY_OBJECT);

  return {
    submitSucceeded: createEmployeeForm.submitSucceeded,
  };
}


function mapDisatchToProps(dispatch) {
  return {
    createEmployeeFromForm: actions.createEmployeeFromForm,
    dispatch,
  };
}


const Form = reduxForm({
  form: 'create-employee',
  validate: createEmployee,
})(CreateEmployeeModal);

const Container = connect(mapStateToProps, mapDisatchToProps)(Form);

export default Container;
