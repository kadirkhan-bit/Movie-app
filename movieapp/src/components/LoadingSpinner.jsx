import React from "react";
import "./LoadingSpinner.scss";

const LoadingSpinner = () => {
  return (
    <div className="container">
      <div className="lds-dual-ring"></div>
    </div>
  );
};

export default LoadingSpinner;
