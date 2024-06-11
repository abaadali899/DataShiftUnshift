const DivComponent = ({ items, selectedItems, setSelectedItems }) => {
    const handleCheckboxChange = (item) => {
      setSelectedItems(selectedItems.includes(item)
        ? selectedItems.filter((i) => i.id !== item.id)
        : [...selectedItems, item]);
    };

  return (
    <div style={{ border: '1px solid black',borderRadius:"8px", padding: '20px', width: '200px' , marginTop:"120px" }}>
      {items.map((item, id) => (
        <div key={id}>
          <input
            type="checkbox"
            checked={selectedItems.includes(item)}
            onChange={() => handleCheckboxChange(item)}
          />
          <label>{item.label}</label>
        </div>
      ))}
    </div>
  );
};

export default DivComponent;
