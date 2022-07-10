import React, { Component } from 'react';
import Pokecard from './components/Pokecard';
import './App.css'





class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokecard id={6} name="Charazard" type="fire" exp={98} />
      </div>
   ) 
  }
}


export default App;
