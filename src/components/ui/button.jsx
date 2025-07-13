
import React from 'react';

const Button = ({ text, onClick, className = '' }) => {
  return (
    <button onClick={onClick} className={`px-4 py-2 bg-pink-500 text-white rounded ${className}`}>
      {text}
    </button>
  );
};

export default Button;
