import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

require('./time-selector-number-button.scss');

function TimeSelectorNumberButton({
  display,
  dataValue,
  currentValue,
  onClick,
  ...otherProps
}) {
  const classes = classNames({
    'time-selector-number-button': true,
    selected: currentValue === dataValue,
  });

  return (
    <button
      className={classes}
      data-time-value={dataValue}
      onClick={onClick}
      {...otherProps}
    >
      {display}
    </button>
  );
}

TimeSelectorNumberButton.propTypes = {
  onClick: PropTypes.func.isRequired,
  display: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  dataValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  currentValue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
};

export default TimeSelectorNumberButton;
