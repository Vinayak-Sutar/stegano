import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const fileTypes = ["PEM"];

function DragDropKey({sendKey,keyType}) {
  const handleChange = (file) => {
    sendKey(file);
  };

  const label = "Upload " + keyType + " Key File";

  return (
    <div className="flex text-xl">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        label={label}
        className="h-24"
      />
    </div>
  );
}

export default DragDropKey;
