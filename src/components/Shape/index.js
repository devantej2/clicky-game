import React from "react";
import "./style.css";

function Shape(props) {
  return (
    <img
      src={props.image}
      className="rounded"
      alt={props.name}
      id={props.id}
      key={props.id}
      onClick={() => props.imagesClicked(props.id)}
    />
  );
}

export default Shape;
