import React from "react";

import "./style.css";

function Character(props) {
  return (
    <div className="card">
      <img
        className="card-img-top"
        src={props.image}
        alt={props.name}
        id={props.id}
        key={props.id}
        onClick={() => props.imagesClicked(props.id)}
      />
    </div>
  );
}

export default Character;
