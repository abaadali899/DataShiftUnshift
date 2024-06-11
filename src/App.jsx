import   { useState } from 'react';
import DivComponent from './components/DivComponent';
import ButtonComponent from './components/ButtonComponent';

const App = () => {
  const [leftItems, setLeftItems] = useState([
    { id: 1, label: '1' },
    { id: 2, label: '2' },
    { id: 3, label: '3' },
    { id: 4, label: '4' },
    { id: 5, label: '5' },
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
      <div style={{ paddingTop: "50px", marginLeft:"20px", marginRight:"20px" }}>
        <ButtonComponent 
          label=">" 
          onClick={handleShift} 
          disabled={selectedLeft.length === 0} 
        />
        <br/>
        <br/>
        
        <ButtonComponent 
          label="<" 
          onClick={handleUnshift} 
          disabled={selectedRight.length === 0} 
        />
      </div>
      <DivComponent items={rightItems} selectedItems={selectedRight} setSelectedItems={setSelectedRight} />
    </div>
  );
};

export default App;
