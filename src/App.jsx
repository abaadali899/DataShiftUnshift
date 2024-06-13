import React, { useState, useEffect } from 'react';
import DualDivContainer from './components/DualDivContainer';
import Button from './components/Button';
import './App.css';

const App = () => {
  const initialCheckboxes = [
    { id: 1, label: '1', checked: false },
    { id: 2, label: '2', checked: false },
    { id: 3, label: '3', checked: false },
    { id: 4, label: '4', checked: false },
    { id: 5, label: '5', checked: false },
  ];

  const [leftCheckboxes, setLeftCheckboxes] = useState(initialCheckboxes);
  const [rightCheckboxes, setRightCheckboxes] = useState([]);
  const [isShiftActive, setIsShiftActive] = useState(false);
  const [isUnshiftActive, setIsUnshiftActive] = useState(false);

  /////// use effect is being used here
  useEffect(() => {
    setIsShiftActive(leftCheckboxes.some(checkbox => checkbox.checked));
  }, [leftCheckboxes]);
   

  useEffect(() => {
    setIsUnshiftActive(rightCheckboxes.length > 0);
  }, [rightCheckboxes]);

  const handleCheckboxChange = (id, checked, side) => {
    if (side === 'left') {
      const updatedCheckboxes = leftCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked } : checkbox
      );
      setLeftCheckboxes(updatedCheckboxes);
    } else {
      const updatedCheckboxes = rightCheckboxes.map((checkbox) =>
        checkbox.id === id ? { ...checkbox, checked } : checkbox
      );
      setRightCheckboxes(updatedCheckboxes);
    }
  };

  const handleShift = () => {
    const selectedCheckboxes = leftCheckboxes.filter(checkbox => checkbox.checked);
    const remainingCheckboxes = leftCheckboxes.filter(checkbox => !checkbox.checked);
    setLeftCheckboxes(remainingCheckboxes);
    setRightCheckboxes([...rightCheckboxes, ...selectedCheckboxes.map(checkbox => ({ ...checkbox, checked: true }))]);
  };

  const handleUnshift = () => {
    setLeftCheckboxes([...leftCheckboxes, ...rightCheckboxes.map(checkbox => ({ ...checkbox, checked: true }))]);
    setRightCheckboxes([]);
  };

  return (
    <div className="App">
      <DualDivContainer
        leftCheckboxes={leftCheckboxes}
        rightCheckboxes={rightCheckboxes}
        onCheckboxChange={handleCheckboxChange}
      />
      <div className="buttons">
        <Button
          text=">"
          onClick={handleShift}
          isActive={isShiftActive}
        />
        <Button
          text="<"
          onClick={handleUnshift}
          isActive={isUnshiftActive}
        />
      </div>
    </div>
  );
};

export default App;
