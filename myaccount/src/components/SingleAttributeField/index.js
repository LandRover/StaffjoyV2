import PropTypes from 'prop-types';
import React from 'react';

require('./single-attribute-field.scss');

function SingleAttributeField({
  id,
  title,
  fieldValue,
  attribute,
  type,
  onBlur,
  onChange,
}) {
  return (
    <div className="single-attribute-field">
      <label htmlFor={id}>
        {title}
        <input
          id={id}
          type={type}
          data-model-attribute={attribute}
          value={fieldValue}
          onBlur={onBlur}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
SingleAttributeField.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  fieldValue: PropTypes.string.isRequired,
  attribute: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  type: PropTypes.string,
};

SingleAttributeField.defaultProps = {
  attribute: '',
  type: 'text',
  onBlur: () => {},
  onChange: () => {},
};

export default SingleAttributeField;
