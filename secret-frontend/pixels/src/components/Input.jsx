import { Fragment, useState, useEffect } from "react";
import DragDropImg from "./DragDropImg";
import DragDropKey from "./DragDropKey";
import DragDropText from "./DragDropText";
import fileDownload from "js-file-download";
import TypeSelect from "./TypeSelect";

function Input() {
  const [img, setImg] = useState(null);
  const [key, setKey] = useState(null);
  const [text, setText] = useState(null);
  const [type, setType] = useState("image");
  const [loading, setLoading] = useState(true);

  const getImg = (data) => {
    setImg(data);
  };

  const getKey = (data) => {
    setKey(data);
  };

  const getText = (data) => {
    setText(data);
  };

  const handleUpload = async () => {
    if (img) {
      console.log("Uploading file...");

      const formData = new FormData();

      formData.append("secret", text);
      formData.append("pubKey", key);
      formData.append("output", "");

      let typeUri;
      if (type == "image") {
        typeUri = "imagehide";
        formData.append("image", img);
      } else {
        typeUri = "audiohide";
        formData.append("audio", img);
      }

      try {
        // You can write the URL of your server or any other endpoint used for file upload
        const result = await fetch(`http://localhost:8000/${typeUri}`, {
          method: "POST",
          body: formData,
        });
        const contentType = result.headers.get("content-type");
        if (contentType && contentType.indexOf("application/json") !== -1) {
          const json = await result.json();
          if (json.done === false) {
            console.log(json.error);
            return;
          }
        }
        const blob = await result.blob();
        const fileName = "secret-" + img.name;
        fileDownload(blob, fileName);
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
    ( !loading &&
      <Fragment>
        <div className="flex flex-col gap-4 p-12 m-10">
          <TypeSelect type={type} setType={setType} setImg={setImg} />
          <DragDropImg sendImg={getImg} type={type} />
          <DragDropKey keyType="Public" sendKey={getKey} />
          <DragDropText sendText={getText} />
          <button
            onClick={handleUpload}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-96 "
          >
            Encode
          </button>
          {/* <textarea
          name="OutputFileName"
          defaultValue="Output File Name"
          className="border-solid border-gray-600 border-2 w-96 h-24"
        /> */}
          {/* {(img?<img src={URL.createObjectURL(img)} />:null)} */}
        </div>
      </Fragment>
    )
  );
}

export default Input;
