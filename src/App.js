import React, { Component } from "react";
import Wrapper from "./components/Wrapper";
import Shape from "./components/Shape";
import shapes from "./shapes.json";

class App extends Component {
  state = {
    shapes,
    chosen: []
  };

  imagesClicked = id => {
    const chosen = this.state.chosen.concat(id);
    this.setState({ chosen });
    console.log(chosen);
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
              alt={shape.name}
              id={shape.id}
              key={shape.id}
              imagesClicked={this.imagesClicked}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}
export default App;
