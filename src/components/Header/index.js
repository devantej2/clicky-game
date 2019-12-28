//Setting up header elements including the heading, message and score information

import React from "react";
import "./style.css";

function Header(props) {
  return (
    <div className="row">
      <div className="col">
        <h1>Clicky Game</h1>
      </div>
      <div className="col-6 message">
        <h3>{props.message}</h3>
      </div>
      <div className="col score-info">
        <h3 className="score">Score: {props.score}</h3>
        <hr></hr>
        <h3 className="high-score">High Score: {props.highScore}</h3>
      </div>
    </div>
  );
}

export default Header;
