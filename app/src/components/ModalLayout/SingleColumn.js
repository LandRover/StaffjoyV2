import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';

require('./modal-layout.scss');

function ModalLayoutSingleColumn({ children, buttons }) {
  let buttonContent = null;

  if (!_.isEmpty(buttons)) {
    buttonContent = (
      <div className="modal-button-panel">
        {
          _.map(buttons, button =>
            button
          )
        }
      </div>
    );
  }

  return (
    <div className="staffjoy-modal-layout single-column">
      <div className="modal-content">
        {children}
      </div>
      {buttonContent}
    </div>
  );
}

ModalLayoutSingleColumn.propTypes = {
  buttons: PropTypes.array,
  children: PropTypes.node,
};

export default ModalLayoutSingleColumn;
