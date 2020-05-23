import PropTypes from 'prop-types';
import React from 'react';

require('./checkbox-field.scss');

function CheckboxField({
  id, description, attribute, checked, onChange,
}) {
  return (
    <div className="checkbox-field">
      <input
        name={id}
        id={id}
        type="checkbox"
        data-model-attribute={attribute}
        checked={checked}
        onChange={onChange}
      />
      <span>{description}</span>
    </div>
  );
}

CheckboxField.propTypes = {
  attribute: PropTypes.string,
  checked: PropTypes.bool,
  description: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onChange: PropTypes.func,
};

CheckboxField.defaultProps = {
  attribute: '',
  checked: false,
  onChange: () => {},
};

export default CheckboxField;
