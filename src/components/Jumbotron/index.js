// Jumbotron that contains the instructions

import React from "react";
import "./style.css";

function Jumbotron() {
  return (
    <div className="jumbotron text-center">
      <div className="text">
        <h1 className="display-4">Clicky Game: Rocket Power Edition</h1>
        <h4>
          Click on an image to earn points, but don't click on any more than
          once!
        </h4>
      </div>
    </div>
  );
}

export default Jumbotron;
