import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@rmwc/textfield';
import classNames from 'classnames';

require('./search-field.scss');

function SearchField({
  width,
  onChange = {},
  darkBackground,
  disabled = false,
}) {
  const [searchInput, setSearchInput] = useState('');

  const classes = classNames({
    'search-container': true,
    'dark-container': darkBackground,
  });

  const onChangeHandle = (e) => {
    setSearchInput(e.currentTarget.value);
    onChange(e);
  }

  return (
    <div className={ classes } style={{ width }}>
      <TextField 
        icon="search" 
        trailingIcon={{
          icon: 'close',
          tabIndex: 0,
          onClick: (e) => {
            setSearchInput('');
            onChange(e);
          }
        }}
        placeholder="Search" 
        className="SearchField-mdc-text-field"
        onChange={ onChangeHandle }
        disabled={ disabled }
        value={ searchInput }
      />
    </div>
  );
}

SearchField.propTypes = {
  width: PropTypes.number.isRequired,
  onChange: PropTypes.func,
  darkBackground: PropTypes.bool,
  disabled: PropTypes.bool,
};

export default SearchField;
