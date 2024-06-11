const ButtonComponent = ({ label, onClick, disabled }) => {
  return (
    <button style={{width:"70px",height:"50px", fontSize:"20px",borderRadius:"8px", color:"white", backgroundColor:"rgb(148,163,184)"}} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
  
};

export default ButtonComponent;
