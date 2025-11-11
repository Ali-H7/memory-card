import '../styles/Game.css';
import fetchMultipleItems from '../fetchData';
import { useState, useEffect } from 'react';

const pokemons = [
  'bulbasaur',
  'charmander',
  'squirtle',
  'pikachu',
  'jigglypuff',
  'eevee',
  'snorlax',
  'meowth',
  'pichu',
  'treecko',
  'torchic',
  'mudkip',
];

function Game() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    async function fetchThenSetList() {
      const list = await fetchMultipleItems(pokemons);
      setPokemonList(list);
    }
    fetchThenSetList();
  }, []);

  return (
    <div>
      <ul>
        {pokemonList.map((pokemon) => {
          return (
            <li key={pokemon.name}>
              <img src={pokemon.sprites.front_default} alt={pokemon} />
              <p>{pokemon.name}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Game;
