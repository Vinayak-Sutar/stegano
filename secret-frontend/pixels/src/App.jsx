// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
// import Navbar from "./components/Navbar";
// import Input from "./components/Input";
import { Fragment } from "react";
import Encode from "./pages/Encode";
import Decode from "./pages/Decode";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* <Route path="/" element={<Layout />}> */}
        <Route index path="encode" element={<Encode />} />
        <Route path="decode" element={<Decode />} />
        {/* </Route> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
