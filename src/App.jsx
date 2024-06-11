import   { useState } from 'react';
import DivComponent from './components/DivComponent';
import ButtonComponent from './components/ButtonComponent';

const App = () => {
  const [leftItems, setLeftItems] = useState([
    { id: 1, label: 'Item 1' },
    { id: 2, label: 'Item 2' },
    { id: 3, label: 'Item 3' },
    { id: 4, label: 'Item 4' },
    { id: 5, label: 'Item 5' },
  ]);

  const [rightItems, setRightItems] = useState([]);
  const [selectedLeft, setSelectedLeft] = useState([]);
  const [selectedRight, setSelectedRight] = useState([]);

  const handleShift = () => {
    const newLeftItems = leftItems.filter(item => !selectedLeft.includes(item));
    const newRightItems = rightItems.concat(selectedLeft);
    setLeftItems(newLeftItems);
    setRightItems(newRightItems);
    setSelectedLeft([]);
  };

  const handleUnshift = () => {
    const newRightItems = rightItems.filter(item => !selectedRight.includes(item));
    const newLeftItems = leftItems.concat(selectedRight);
    setRightItems(newRightItems);
    setLeftItems(newLeftItems);
    setSelectedRight([]);
  };

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent:"center" }}>
      <DivComponent items={leftItems} selectedItems={selectedLeft} setSelectedItems={setSelectedLeft} />
      <div style={{ paddingTop: "150px", marginLeft:"40px", marginRight:"40px" }}>
        <ButtonComponent 
          label="Shift" 
          onClick={handleShift} 
          disabled={selectedLeft.length === 0} 
        />
        <br/>
        <br/>
        <br/>
        <ButtonComponent 
          label="Unshift" 
          onClick={handleUnshift} 
          disabled={selectedRight.length === 0} 
        />
      </div>
      <DivComponent items={rightItems} selectedItems={selectedRight} setSelectedItems={setSelectedRight} />
    </div>
  );
};

export default App;
