import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Shape from "./components/Shape";
import shapes from "./shapes.json";

class App extends Component {
  state = {
    shapes
  };

  firstClick = id => {
    console.log(id);
  };

  render() {
    return (
      <>
        <nav className="navbar navbar-light bg-light justify-content-center">
          <span className="navbar-brand mb-0 h1">Clicky Game</span>
        </nav>
        <Wrapper>
          {this.state.shapes.map(shape => (
            <Shape
              image={shape.image}
              id={shape.id}
              key={shape.id}
              firstClick={this.firstClick}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}
export default App;
