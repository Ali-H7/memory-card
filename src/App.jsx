import './App.css';
import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import Game from './components/Game';
import fetchMultipleItems from './fetchData';

function App() {
  const [gameKey, setGameKey] = useState(crypto.randomUUID()); // used to Restart the game
  const [bestScore, setBestScore] = useState(0);
  const [pokemonList, setPokemonList] = useState([]);

  function resetGame() {
    setGameKey(crypto.randomUUID());
  }

  useEffect(() => {
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

    async function fetchThenSetList() {
      const list = await fetchMultipleItems(pokemons);
      setPokemonList(list);
    }
    fetchThenSetList();
  }, []);

  return (
    <div>
      <Navbar />
      <Instructions />
      <Game
        pokemonList={pokemonList}
        restartGame={resetGame}
        key={gameKey}
        bestScore={bestScore}
        setBestScore={setBestScore}
      />
    </div>
  );
}

export default App;
