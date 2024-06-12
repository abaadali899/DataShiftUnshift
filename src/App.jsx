import React, { useState } from 'react';
import Button from './components/Button';
import RightDiv from './components/RightDiv';
import LeftDiv from './components/LeftDiv';
import './App.css';
 

const App = () => {
  const [leftItems, setLeftItems] = useState([
    { label: '1', checked: false },
    { label: '2', checked: false },
    { label: '3', checked: false },
    { label: '4', checked: false },
    { label: '5', checked: false },
  ]);

  const [rightItems, setRightItems] = useState([]);
  const [shiftEnabled, setShiftEnabled] = useState(false);
  const [unshiftEnabled, setUnshiftEnabled] = useState(false);

  const handleCheckBoxChange = (label, isLeftDiv) => {
    if (isLeftDiv) {
      const updatedLeftItems = leftItems.map((item) =>
        item.label === label ? { ...item, checked: !item.checked } : item
      );
      setLeftItems(updatedLeftItems);
      setShiftEnabled(updatedLeftItems.some((item) => item.checked));
    } else {
      const updatedRightItems = rightItems.map((item) =>
        item.label === label ? { ...item, checked: !item.checked } : item
      );
      setRightItems(updatedRightItems);
      setUnshiftEnabled(updatedRightItems.some((item) => !item.checked));
    }
  };

  const handleShift = () => {
    const itemsToShift = leftItems.filter((item) => item.checked).map((item) => ({ ...item, checked: true }));
    setRightItems(rightItems.concat(itemsToShift));
    setLeftItems(leftItems.filter((item) => !item.checked));
    setShiftEnabled(false);
  };

  const handleUnshift = () => {
    const itemsToUnshift = rightItems.filter((item) => !item.checked).map((item) => ({ ...item, checked: false }));
    setLeftItems(leftItems.concat(itemsToUnshift));
    setRightItems(rightItems.filter((item) => item.checked));
    setUnshiftEnabled(false);
  };

  return (
    <div className="app">
      <LeftDiv items={leftItems} onCheckBoxChange={(label, isLeftDiv) => handleCheckBoxChange(label, isLeftDiv)} />
      <div className="buttons">
        <Button onClick={handleShift} disabled={!shiftEnabled} label=">"/>
        
        <Button onClick={handleUnshift} disabled={!unshiftEnabled} label="<" />
      </div>
      <RightDiv items={rightItems} onCheckBoxChange={(label, isLeftDiv) => handleCheckBoxChange(label, isLeftDiv)} />
    </div>
  );
};
export default App;





 