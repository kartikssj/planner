import React from 'react';

const Loader = ({isLoading}) => isLoading
  ? (
    <div className="loader">
      <div className="content">
        <img src="/loading.gif" alt="Loading" />
      </div>
    </div>
  )
  : null;

export default Loader;
