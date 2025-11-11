import './App.css';
import Navbar from './components/Navbar';
import Instructions from './components/Instructions';
import Game from './components/Game';
import { useState } from 'react';

function App() {
  const [gameKey, setGameKey] = useState(crypto.randomUUID()); // used to Restart the game
  const [bestScore, setBestScore] = useState(0);

  function resetGame() {
    setGameKey(crypto.randomUUID());
  }

  return (
    <div>
      <Navbar />
      <Instructions />
      <Game restartGame={resetGame} key={gameKey} bestScore={bestScore} setBestScore={setBestScore} />
    </div>
  );
}

export default App;
