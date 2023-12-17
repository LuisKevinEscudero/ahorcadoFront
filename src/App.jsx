// App.jsx
import React, { useState } from 'react';
import Start from './components/Start';
import Game from './components/Game';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const handleStartGame = async () => {
    try {
      // Llamada a la API comentada
      //const response = await fetch('http://localhost:8080/pokemon/random');
      
      // Emulación local con un objeto
      const mockPokemon = {
        name: 'AA-AA-AA',
        type: ['Electric', 'Flying'],
        region: 'Kanto',
        description: 'A cute and powerful Electric-type Pokémon.',
        // Otros campos que puedas necesitar
      };

      // Llamada a la API comentada, y se reemplaza con la emulación local
      //const data = await response.json();
      //data.name = data.name.toUpperCase();
      setPokemon(mockPokemon);
      setGameStarted(true);
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center">
      {gameStarted ? (
        <Game pokemon={pokemon} />
      ) : (
        <Start onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
