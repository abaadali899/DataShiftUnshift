import React from 'react';
import CheckBox from './CheckBox ';

const RightDiv = ({ items, onCheckBoxChange }) => {
    return (
      <div className="right-div" style={{  border: '1px solid black', borderRadius:"8px",height:"150px", padding: '20px', width: '15%' , marginTop:"120px" }}>
        {items.map((item) => (
          <CheckBox
            style={{width:"20%",cursor:"pointer"}} 
            key={item.label}
            label={item.label}
            checked={item.checked}
            onChange={() => onCheckBoxChange(item.label, false)}
          />
        ))}
      </div>
    );
  };
export default RightDiv;
