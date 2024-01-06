// components/GameOverScreen.jsx
import React from 'react';
import '../CSS/animations.css'; 
import '../CSS/gameOverScreen.css'; 

const GameOverScreen = ({ onRestart, pokemon, isLoading }) => {
  return (
    <div className="game-over-screen">
      <p className="game-over-text">Game Over</p>
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-icon-container">
            <div className="loading-icon"></div>
          </div>
          <p className="loading-text">Cargando...</p>
        </div>
      ) : (
        <>
          {pokemon && (
            <>
              <p className="game-over-info">El Pokémon era:</p>
              <h1 className="game-over-pokemon">{pokemon.name}</h1>
              <img
                src={pokemon.imageUrl}
                alt={pokemon.name}
                className="game-over-image"
              />
            </>
          )}
          <button
            className="game-over-button"
            onClick={onRestart}
            disabled={isLoading}
          >
            {isLoading ? 'Cargando...' : 'Volver a Jugar'}
          </button>
        </>
      )}
    </div>
  );
};

export default GameOverScreen;
