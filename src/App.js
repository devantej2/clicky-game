import React, { Component } from "react";
import Header from "./components/Header";
import Jumbotron from "./components/Jumbotron";
import Wrapper from "./components/Wrapper";
import Character from "./components/Character";
import characters from "./characters.json";

// Using Class Component
class App extends Component {
  //Defining state properties
  state = {
    characters,
    clickedCharacter: [],
    score: 0,
    highScore: 0,
    message: ""
  };

  //Function to handle the images clicked, grabs the id to compare if the id is already in the array we created
  imagesClicked = id => {
    let prevState = this.state.clickedCharacter.slice();
    let score = this.state.score;
    let highScore = this.state.highScore;

    if (!this.state.clickedCharacter.includes(id)) {
      if (score === highScore) {
        score++;
        highScore++;
      } else {
        score++;
      }
      prevState.push(id);

      if (prevState.length === 12) {
        this.setState({
          score: 0,
          highScore: score,
          message: "Congratulations, you won! Click to play again!",
          clickedCharacter: []
        });
        return;
      }
    }

    if (this.state.clickedCharacter.includes(id)) {
      this.setState({
        score: 0,
        highScore: highScore,
        clickedCharacter: [],
        message:
          "Game Over! That card was already clicked. Click to play again!"
      });
      return;
    }

    this.setState({
      score: score,
      highScore: highScore,
      clickedCharacter: prevState,
      message: ""
    });

    for (let i = characters.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [characters[i], characters[j]] = [characters[j], characters[i]];
    }
  };

  render() {
    return (
      <>
        <Header
          score={this.state.score}
          highScore={this.state.highScore}
          message={this.state.message}
        />
        <Jumbotron />
        <Wrapper>
          {this.state.characters.map(character => (
            <Character
              image={character.image}
              alt={character.name}
              id={character.id}
              key={character.id}
              imagesClicked={this.imagesClicked}
            />
          ))}
        </Wrapper>
      </>
    );
  }
}
export default App;
