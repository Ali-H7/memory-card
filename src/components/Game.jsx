import '../styles/Game.css';
import { useState, useEffect } from 'react';
import fetchMultipleItems from '../fetchData';
import PokemonList from './PokemonList';
import shuffle from 'lodash/shuffle';

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
  const shuffledList = shuffle(pokemonList);

  useEffect(() => {
    async function fetchThenSetList() {
      const list = await fetchMultipleItems(pokemons);
      setPokemonList(list);
    }
    fetchThenSetList();
  }, []);

  return (
    <div className='game'>
      <div>
        <p>Score:</p>
        <p>Best Score:</p>
      </div>
      <PokemonList list={shuffledList} />
    </div>
  );
}

export default Game;
