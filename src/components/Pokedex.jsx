import React, { Component } from "react";
import Pokecard from "./Pokecard";
import "./Pokedex.css";

class Pokedex extends Component {
  static defaultProps = {
    pokemon: [
      { id: 1, name: "Bulbasaur", type: "grass", exp: 49 },
      { id: 2, name: "Ivysaur", type: "grass", exp: 62 },
      { id: 3, name: "Venusaur", type: "bug", exp: 72 },
      { id: 4, name: "Charmander", type: "fire", exp: 78 },
      { id: 5, name: "Charmelion", type: "fire", exp: 112 },
      { id: 6, name: "Charizard", type: "fire", exp: 195 },
      { id: 7, name: "Squirtle", type: "water", exp: 25 },
      { id: 8, name: "Wartortle", type: "water", exp: 65 }
    ],
  };

  render() {
    return (
      <div className="Pokedex">
        <h1>Pokedex!</h1>
        <div className="Pokedex-cards">
          {this.props.pokemon.map((p) => (
            <Pokecard id={p.id} name={p.name} type={p.type} exp={p.exp} />
          ))}
        </div>
      </div>
    );
  }
}

export default Pokedex;
