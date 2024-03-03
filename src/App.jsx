// App.jsx
import React, { useState, useEffect } from 'react';
import Start from './components/Start';
import Game from './components/Game';
import Nav from './components/Nav';
import './CSS/animations.css'; 


function App() {
  const [loading, setLoading] = useState(false);
  const [gameStarted, setGameStarted] = useState(false);
  const [pokemon, setPokemon] = useState(null);

  const handleStartGame = async () => {
    try {
      setLoading(true);

      // Llamada a la API comentada 
      const response = await fetch('http://localhost:8080/pokemon/random');
      //const response = await fetch('http://localhost:8080/pokemon/startGame');
      //const response = await fetch('https://api-ahorcado.onrender.com/pokemon/random');

      // Emulación local con un objeto
      const mockPokemon = {
        name: 'AA-AA-AA',
        type: ['Electric', 'Flying'],
        region: 'Kanto',
        description: 'A cute and powerful Electric-type Pokémon.',
        // Otros campos que puedas necesitar
      };

      // Llamada a la API comentada, y se reemplaza con la emulación local
      const data = await response.json();
      data.name = data.name.toUpperCase();
      setPokemon(data);
      setGameStarted(true);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <Nav />
      {loading ? (
        <div className="loading-container">
          <div className="loading-icon-container">
            <div className="loading-icon"></div>
          </div>
          <p className="loading-text">Cargando...</p>
        </div>
      ) : gameStarted ? (
        <Game pokemon={pokemon} />
      ) : (
        <Start onStartGame={handleStartGame} />
      )}
    </div>
  );
}

export default App;
