import React from "react";
import "./style.css";

function Shape(props) {
  return (
    <img
      src={props.image}
      className="rounded"
      alt={props.name}
      onClick={() => props.firstClick(props.id)}
    />
  );
}

export default Shape;
