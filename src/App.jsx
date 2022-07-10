import React, { Component } from "react";
// import Pokedex from "./components/Pokedex";
import Pokegame from "./components/Pokegame";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Pokegame />
      </div>
    );
  }
}

export default App;
