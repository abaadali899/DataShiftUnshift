import React from 'react'; 
import CheckBox from './CheckBox ';

const LeftDiv = ({ items, onCheckBoxChange }) => {
    return (
      <div className="left-div" style={{  border: '1px solid black', borderRadius:"8px",height:"150px", padding: '20px', width: '15%' , marginTop:"120px" }}>
        {items.map((item) => (
          <CheckBox
            key={item.label}
            label={item.label}
            checked={item.checked}
            onChange={() => onCheckBoxChange(item.label, true)}
          />
        ))}
      </div>
    );
  };
  

export default LeftDiv;
