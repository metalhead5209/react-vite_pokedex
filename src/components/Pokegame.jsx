import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
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

      render(){
        let hand1 = []
        let hand2 = [ ...this.props.pokemon ]
        while (hand1.length < hand2.length) {
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }
        let exp1 = hand1.reduce((exp, pokemon) => exp + pokemon.exp, 0)
        let exp2 = hand2.reduce((exp, pokemon) => exp + pokemon.exp, 0)
        return (
            <div>
                <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
                <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
            </div>
        )
      }
}

export default Pokegame;