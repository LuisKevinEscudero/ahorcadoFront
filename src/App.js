// src/App.js
import React, { useState } from 'react';
import Inicio from './components/Inicio';
import Juego from './components/Juego';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  // Información de Pokémon
  const pokemon = {
    name: "bulbasaur",
    description: "A strange seed was planted on its back at birth. The plant sprouts and grows with this Pokémon.",
    type: "grass",
    region: "Kanto",
    imageUrl: "bulbasaur.png",
  };

  const handleStartGame = () => {
    setGameStarted(true);
  };

  return (
    <div>
      {!gameStarted ? (
        <Inicio onStartGame={handleStartGame} />
      ) : (
        <Juego pokemon={pokemon} />
      )}
    </div>
  );
}

export default App;
