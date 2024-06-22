import { Fragment, useState } from "react";
import Navbar from "../components/Navbar";
import Output from "../components/Output";

function Decode() {
  const [type, setType] = useState("image");

  return (
    <Fragment>
      <Navbar setType={setType} e={0} />
      <Output type={type} />
    </Fragment>
  );
}

export default Decode;
