const ButtonComponent = ({ label, onClick, disabled }) => {
  return (
    <button style={{width:"60px",height:"40px"}} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
  
};

export default ButtonComponent;
