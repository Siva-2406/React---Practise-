import React, { useState } from "react";

const NumberAppend= () => {
  const [numbers, setNumbers] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const handleAddNumber = () => {
    const num = parseInt(inputValue, 10);
    if (num < 0 || num > 50 || isNaN(num)) {
      alert("Input needs to be between 0 and 50");
    } else {
      setNumbers([...numbers, num]); 
    }
    setInputValue(""); 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" , width: "900px" }}>
      <input
        type="number"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Enter number between 0 and 50"
      />
      <button onClick={handleAddNumber}>Add</button>
      <p>You have just entered the number: {numbers.join(", ")}</p>
    </div>
  );
};

export default NumberAppend;
