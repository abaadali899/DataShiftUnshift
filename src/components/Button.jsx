import React from 'react';
const Button = ({ text, onClick, isActive }) => {
  return (
    <button
      style={{ color: "white", fontSize: "18px", width: "70px", height: "60px" }}
      onClick={onClick}
      disabled={!isActive}
    >
      {text}
    </button>
  );
};
export default Button;
