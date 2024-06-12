import React from 'react';
const Button = ({ text, onClick, isActive }) => {
  return (
    <button 
    style={{color:"white", fontSize:"18px"}}
      onClick={onClick} 
      disabled={!isActive} 
       
    >
      {text}
    </button>
  );
};
export default Button;
