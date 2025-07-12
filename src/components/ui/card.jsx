import React from 'react';

const Card = ({ title, children, className = '' }) => {
  return (
    <div className={`p-4 border rounded shadow bg-white ${className}`}>
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default Card;
/ card.jsx
