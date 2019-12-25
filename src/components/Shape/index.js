import React from "react";
import "./style.css";

function Shape(props) {
  return <img src={props.image} className="rounded" alt={props.name} />;
}

export default Shape;
