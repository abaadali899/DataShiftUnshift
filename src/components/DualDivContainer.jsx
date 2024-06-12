import React from 'react';
import CheckboxList from './CheckBoxList';
const DualDivContainer = ({ leftCheckboxes, rightCheckboxes, onCheckboxChange }) => {
    return (
      <div className="dual-div-container">
        <div className="left-div">
          <CheckboxList checkboxes={leftCheckboxes} onCheckboxChange={(id, checked) => onCheckboxChange(id, checked, 'left')} />
        </div>
        <div className="right-div">
          <CheckboxList checkboxes={rightCheckboxes} onCheckboxChange={(id, checked) => onCheckboxChange(id, checked, 'right')} />
        </div>
      </div>
    );
  };
  
export default DualDivContainer;
