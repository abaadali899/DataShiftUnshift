 
import React from 'react';

const Button = ({ onClick, disabled, label }) => {
  return (
    <button onClick={onClick} disabled={disabled} style={{width:"70px",height:"50px",
     fontSize:"20px",borderRadius:"8px", marginTop:"12px",color:"white", backgroundColor:"rgb(148,163,184)"}}>
      {label}
    </button>
  );
};

export default Button;
