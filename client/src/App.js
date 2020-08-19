import React, { Component } from 'react';
import Header from './components/header/header'
import CharacterCard from './components/charCard'
import './index.css'
import characters from './Characters.json'
import './App.css';

class App extends Component {

  state = {
    characters, 
    score: 0,
    topScore: 0  
  };
  compenentDidMount(){
    this.setState({
      characters: this.shuffleCharacters(this.state.characters)
    })
  }

      shuffleCharacters = (data) => {
        const datacopy = [...data]
          for (let i = datacopy.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i +1));
            [datacopy[i], datacopy[j]] = [datacopy[j], datacopy[i]];
          }
          return datacopy;
      };

      counterCheck = (name) => {
        let correctGuess = false;
        const {characters} = this.state;
        const updatedCharacters = characters.map(character => {
          const updatedCharacter = {...character}
            if (updatedCharacter.name === name) {
              if (updatedCharacter.selected === false) {
                updatedCharacter.selected = true;
                correctGuess = true;
              }
            }
            return updatedCharacter;
        })
        console.log(updatedCharacters);

        correctGuess ? this.handleCorrect(updatedCharacters): this.handleIncorrect(updatedCharacters)

      }

      handleCorrect = (characters) =>{
        const {score, topScore} = this.state;
        console.log({score, topScore});

        const newScore= score + 1;
        console.log({newScore})

        const newTopScore = Math.max(newScore, topScore);
        console.log({newTopScore});

        this.setState({
          score: newScore,
          topScore: newTopScore,
          characters: this.shuffleCharacters(characters)
        })
      }


      handleIncorrect = (characters) => {
        alert("Game over!")
        console.log("handleIncorrect");

        this.setState({
          characters: this.resetCharacters(characters),
          score: 0
        })
      }

      resetCharacters = (characters) => {
        const resetCharacters = characters.map(character => ({...character, selected: false}))
      }

      render(){

        return(
          <div>
                <Header score={this.state.score} topScore={this.state.topScore} />
                <div className="container">
                  <div className="row">
                    {this.state.characters.map((character) =>
                    <CharacterCard
                    key ={character.id}
                    id  ={character.id}
                    character={character.name}
                    selected= {character.selected}
                    imageURL = {character.imageURL}
                    counterCheck = {this.counterCheck}
                    />)}
                  </div>
                </div>
          </div>
      )
      };
}

  export default App;
  