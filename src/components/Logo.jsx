import React from 'react';
import logo from '../assets/wellfed-logo.png';

const Logo = ({ className = "h-8" }) => {
  return (
    <div className={`select-none ${className}`}>
      <img src={logo} alt="WellFed" className="h-full w-auto object-contain rounded-xl" />
    </div>
  );
};

export default Logo;
