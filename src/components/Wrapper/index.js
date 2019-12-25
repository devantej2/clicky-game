import React from "react";
import "./style.css";

function Wrapper(props) {
  return (
    <div className="wrapper d-flex flex-row flex-wrap">{props.children}</div>
  );
}

export default Wrapper;
