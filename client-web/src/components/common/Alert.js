import React from 'react';

const Alert = ({type, text, onClose}) => {
  if (!text) {
    return null;
  }
  const clickHandler = {
    onClick: onClose,
  };
  return (
    <div className={`alert alert-${type} alert-dismissible`} role="alert">
      {onClose &&
        <button type="button" className="close" aria-label="Close" {...clickHandler} >
          <span aria-hidden="true">&times;</span>
        </button>}
      {text}
    </div>
  );
};

export default Alert;
