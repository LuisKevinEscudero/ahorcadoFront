// App.jsx
import React, { useState } from 'react';
import Start from './components/Start';
import Game from './components/Game';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const handleStartGame = async () => {
    try {
      const response = await fetch('http://localhost:8080/pokemon/random');
      if (!response.ok) {
        throw new Error('Error al obtener datos del Pokémon');
      }

      const data = await response.json();
      setPokemon(data);
      setGameStarted(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div>
      {gameStarted ? (
        <Game pokemon={pokemon} />
      ) : (
        <Start onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
