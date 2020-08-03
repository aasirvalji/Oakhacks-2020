import React from 'react';
import unsupportedDevice from '../assets/unsupportedDeviceBanner.png';

const UnsupportedDevice = () => {
  return (
    <div className="unsupported-container">
      <img src={unsupportedDevice}></img>
    </div>
  );
};

export default UnsupportedDevice;
