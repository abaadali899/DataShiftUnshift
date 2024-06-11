const DivComponent = ({ items, selectedItems, setSelectedItems }) => {
    const handleCheckboxChange = (item) => {
      setSelectedItems(selectedItems.includes(item)
        ? selectedItems.filter((i) => i.id !== item.id)
        : [...selectedItems, item])
        
    };
 
  return (
    <div style={{  border: '1px solid black',borderRadius:"8px",height:"150px", padding: '20px', width: '15%' , marginTop:"120px" }}>
      <div style={{ }}>
      {items.map((item, id) => (
        <div key={id} style={{marginBottom:"10px"
         }}>
          <input 
          style={{width:"10%",cursor:"pointer"}} 
          type="checkbox"
          checked={selectedItems.includes(item)}
          onChange={() => handleCheckboxChange(item)}/>
          <label 
          style={{paddingLeft:"10px", cursor:"pointer"}} 
          onClick={() => handleCheckboxChange(item)} >
          {item.label}
          </label>
           
        </div>
      ))}
      </div>
    </div>
  );
};

export default DivComponent;
