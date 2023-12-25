// components/GameOverScreen.jsx
import React from 'react';

const GameOverScreen = ({ onRestart, pokemon }) => {
  return (
    <div className="flex items-center justify-center h-screen text-5xl font-bold flex-col">
      <p>Game Over</p>
      {pokemon && (
        <>
          <p className="mt-2">El Pokémon era:</p>
          <h1 className="text-6xl font-bold mt-2">{pokemon.name}</h1>
          <img
            src={pokemon.imageUrl}
            alt={pokemon.name}
            className="mt-4 max-w-full max-h-60"
          />
        </>
      )}
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={onRestart}>
        Volver a Jugar
      </button>
    </div>
  );
};

export default GameOverScreen;
