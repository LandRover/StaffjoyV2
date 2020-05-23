import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

require('./staffjoy-button.scss');

function StaffjoyButton({
  children,
  onClick,
  active,
  className,
  size,
  buttonType,
  ...otherProps
}) {
  const classes = classNames({
    'staffjoy-button': true,
    [size]: true,
    [buttonType]: true,
    [className]: true,
    active,
  });

  return (
    <button
      type="button"
      className={classes}
      onClick={onClick}
      {...otherProps}
    >
      {children}
    </button>
  );
}

StaffjoyButton.propTypes = {
  children: PropTypes.string.isRequired,
  className: PropTypes.string,
  size: PropTypes.string,
  buttonType: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
};

StaffjoyButton.defaultProps = {
  active: false,
  size: 'small',
  className: '',
  buttonType: 'primary',
  onClick: () => {},
};

export default StaffjoyButton;
