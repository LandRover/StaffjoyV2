import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

require('./shift-modal-day-cell.scss');

function ShiftModalDayCell({
  dayLetter,
  cellId,
  displayDate,
  selected,
  onClick,
}) {
  const buttonClasses = classNames({
    'shift-modal-day-cell-button': true,
    selected,
  });

  return (
    <div className="shift-modal-day-cell">
      <button className={buttonClasses} onClick={onClick} data-cellId={cellId}>
        {dayLetter}
      </button>
      <div className="display-date">{displayDate}</div>
    </div>
  );
}

ShiftModalDayCell.propTypes = {
  dayLetter: PropTypes.string.isRequired,
  displayDate: PropTypes.string.isRequired,
  cellId: PropTypes.string.isRequired,
  selected: PropTypes.bool,
  onClick: PropTypes.func,
};

export default ShiftModalDayCell;
