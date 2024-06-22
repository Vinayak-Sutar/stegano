import { Fragment, useState } from "react";
import { Outlet, Link } from "react-router-dom";

function Navbar(props) {
  return (
    <Fragment>
      <div className="bg-gray-300 h-20 flex justify-end items-center pr-16 text-4xl gap-10 ">
        <div className={props.e?"underline":""}>
          <Link to="/encode">ENCODE</Link>
        </div>
        <div className={props.e?"":"underline"}>
          <Link to="/decode">DECODE</Link>
        </div>
      </div>
    </Fragment>
  );
}

export default Navbar;
