import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["TXT"];

function DragDropText({ sendText }) {
  const handleChange = (file) => {
    sendText(file);
  };

  return (
    <div className="flex text-xl">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        className="h-24"
        label="Upload Text File"
      />
    </div>
  );
}

export default DragDropText;
