const CheckboxList = ({ checkboxes, onCheckboxChange }) => {
    return (
        <div className="checkbox-list" >
            {checkboxes.map((checkbox) => (
                <div key={checkbox.id}>
                    <input
                        style={{ marginBottom: "17px" }}
                        type="checkbox"
                        checked={checkbox.checked}
                        onChange={(e) => onCheckboxChange(checkbox.id, e.target.checked)}
                    />

                    <label style={{ marginLeft: "15px", marginBottom: "17px" }} onClick={() => onCheckboxChange(checkbox.id, !checkbox.checked)}>
                        {checkbox.label}
                    </label>
                </div>
            ))}
        </div>
    );
};


export default CheckboxList;
