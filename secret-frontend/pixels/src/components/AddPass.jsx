import { useState } from "react";

function AddPass({ setPass }) {
  const handleChange = (pass) => {
    setPass(pass);
  };

  return (
    <div>
      <input
        className="border-solid border-black border p-2 w-96 "
        placeholder="Passphrase"
        type="password"
        onChange={(e) => handleChange(e.target.value)} // ... and update the state variable on any edits!
      />
    </div>
  );
}

export default AddPass;
