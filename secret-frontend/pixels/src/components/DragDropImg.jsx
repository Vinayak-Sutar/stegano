import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";

const imgFileTypes = ["PNG", "TIFF", "BMP", "TGA"];
const audFileTypes = ["WAV"];

function DragDropImg({ sendImg, type }) {
  // const [file, setFile] = useState(null);
  //   function handleChange(e) {
  //     console.log(e.target.files);
  //     setFile(URL.createObjectURL(e.target.files[0]));
  //   }

  const handleChange = (file) => {
    sendImg(file);
  };

  return (
    <div className="flex gap-10">
      <FileUploader
        handleChange={handleChange}
        name="file"
        types={type === "image" ? imgFileTypes : audFileTypes}
        label={"Upload " + type}
      />
      {/* <div>
        {file ? (
          <div className="w-64 h-12">
            <h2>preview:</h2>
            <img src={URL.createObjectURL(file)} />
          </div>
        ) : null}
      </div> */}
    </div>
  );
}

export default DragDropImg;
