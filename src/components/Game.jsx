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

function Game({ restartGame }) {
  const [pokemonList, setPokemonList] = useState([]);
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [playedCards, setPlayedCards] = useState([]);

  const shuffledList = shuffle(pokemonList);

  function handleOnClick(playedCard) {
    const checkIfPlayedBefore = playedCards.includes(playedCard);

    if (checkIfPlayedBefore) {
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      restartGame();
    } else {
      setPlayedCards([...playedCards, playedCard]);
      setCurrentScore(currentScore + 1);
    }
  }

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
        <p>Score: {currentScore}</p>
        <p>Best Score: {bestScore}</p>
      </div>
      <PokemonList list={shuffledList} clickEvent={handleOnClick} />
    </div>
  );
}

export default Game;
