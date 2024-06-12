 
import React from 'react';

const CheckBox = ({ label, checked, onChange }) => {
  return (
    <div style={{marginBottom:"10px", justifyContent:"center", alignItems:"self-start", }}>
      <input style={{cursor:"pointer",width:"10%"}} type="checkbox" checked={checked} onChange={onChange}  />
      <label   style={{cursor:"pointer", marginLeft:"10px"}} >{label}</label>
    </div>
  );
};

export default CheckBox;
