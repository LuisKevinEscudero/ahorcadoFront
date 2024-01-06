import React from 'react';
import '../CSS/gameWonScreen.css';

const GameWonScreen = ({ onRestart, pokemon, isLoading }) => {
  return (
    <div className="firstContainer">
      <p>Felicidades, has ganado el juego</p>
      <h1 className="name">{pokemon.name}</h1>
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        className="pokeImage"
      />
      {isLoading ? (
        <div className="loading-container">
          <div className="loading-icon-container">
            <div className="loading-icon"></div>
          </div>
          <p className="loading-text">Cargando...</p>
        </div>
      ) : (
        <button
          className={`playAgainButton ${
            isLoading ? 'loading' : ''
          }`}
          onClick={onRestart}
          disabled={isLoading}
        >
          {isLoading ? 'Cargando...' : 'Volver a Jugar'}
        </button>
      )}
    </div>
  );
};

export default GameWonScreen;
