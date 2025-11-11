import '../styles/Game.css';
import { useState } from 'react';
import PokemonList from './PokemonList';
import shuffle from 'lodash/shuffle';

function Game({ pokemonList, restartGame, bestScore, setBestScore }) {
  const [currentScore, setCurrentScore] = useState(0);
  const [playedCards, setPlayedCards] = useState([]);

  const shuffledList = shuffle(pokemonList);

  function handleOnClick(playedCard) {
    const hasBeenPlayed = playedCards.includes(playedCard);

    if (hasBeenPlayed) {
      if (currentScore > bestScore) setBestScore(currentScore);
      setCurrentScore(0);
      restartGame();
    } else {
      setPlayedCards([...playedCards, playedCard]);
      setCurrentScore(currentScore + 1);
    }
  }

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
