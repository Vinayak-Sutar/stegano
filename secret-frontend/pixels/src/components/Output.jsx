import { Fragment, useState, useEffect } from "react";

import DragDropImg from "./DragDropImg";
import DragDropKey from "./DragDropKey";
import Addpass from "./AddPass";
import fileDownload from "js-file-download";
import TypeSelect from "./TypeSelect";

function Output() {
  const [img, setImg] = useState(null);
  const [key, setKey] = useState(null);
  const [pass, setPass] = useState("");
  const [type, setType] = useState("image");
  const [loading, setLoading] = useState(true);

  const getImg = (data) => {
    setImg(data);
  };

  const getKey = (data) => {
    setKey(data);
  };

  const handleUpload = async () => {
    if (img) {
      console.log("Uploading file...");

      const formData = new FormData();
      formData.append("priKey", key);
      formData.append("output", "");
      formData.append("passphrase", pass);

      let typeUri;
      if (type == "image") {
        typeUri = "imageextract";
        formData.append("image", img);
      } else {
        typeUri = "audioextract";
        formData.append("audio", img);
      }
      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const rawResult = await fetch(`http://localhost:8000/${typeUri}`, {
          method: "POST",
          body: formData,
        });
        const result = await rawResult.json();
        if (!result.done) {
          console.log(result.error);
          return;
        }
        const text = result.data;
        const filename = result.filename;
        const blob = new Blob([text], { type: "text/plain" });
        fileDownload(blob, filename);
      } catch (error) {
        console.error(error);
      }
    }
  };

  useEffect(() => {
    const fileType = localStorage.getItem("fileType");
    if (fileType) {
      setType(fileType);
    }
    setLoading(false);
  }, []);

  return (
    !loading && (
      <Fragment>
        <div className="flex flex-col gap-4 p-12 m-10">
          <TypeSelect type={type} setType={setType} setImg={setImg} />
          <DragDropImg sendImg={getImg} type={type} />
          <DragDropKey keyType="Private" sendKey={getKey} />
          <Addpass setPass={setPass} />
          <button
            onClick={handleUpload}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-96 "
          >
            Decode
          </button>
        </div>
      </Fragment>
    )
  );
}

export default Output;
