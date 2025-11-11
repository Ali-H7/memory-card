import '../styles/Game.css';
import { useState, useEffect } from 'react';
import fetchMultipleItems from '../fetchData';
import PokemonList from './PokemonList';

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
      <PokemonList list={pokemonList} />
    </div>
  );
}

export default Game;
