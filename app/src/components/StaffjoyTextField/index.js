import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@rmwc/textfield';

require('./staffjoy-text-field.scss');

function StaffjoyTextField({ isFocused, width, ...otherProps }) {
  let fieldWidth = '';

  if (typeof width === 'number') {
    fieldWidth = `${width}px`;
  } else
  if (width === '100%') {
    fieldWidth = '100%';
  } else {
    fieldWidth = '200px';
  }

  return (
    <TextField
      className="staffjoy-text-field"
      style={{ width: fieldWidth }}
      {...otherProps}
    />
  );
}

StaffjoyTextField.propTypes = {
  isFocused: PropTypes.bool,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default StaffjoyTextField;
