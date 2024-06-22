import React from "react";

function TypeSelect({ type, setType, setImg }) {

  const handleTypeChange = (type) => {
    setImg(null);
    setType(type);
    localStorage.setItem("fileType", type);
  };
  
  return (
    (
      <select
        onChange={(e) => handleTypeChange(e.target.value)}
        className="w-96 h-18 p-4"
        defaultValue={type}
      >
        <option value="image">Image</option>
        <option value="audio">Audio</option>
      </select>
    )
  );
}

export default TypeSelect;
