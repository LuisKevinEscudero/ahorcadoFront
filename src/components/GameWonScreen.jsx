import React from 'react';

const GameWonScreen = ({ onRestart, pokemon }) => {
  return (
    <div className="flex items-center justify-center h-screen text-5xl font-bold flex-col">
      <p>Felicidades, has ganado el juego</p>
      <h1 className="text-6xl font-bold mt-4">{pokemon.name}</h1>
      <img
        src={pokemon.imageUrl}
        alt={pokemon.name}
        className="mt-4 max-w-full max-h-60"
      />
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded mt-4"
        onClick={onRestart}
      >
        Volver a Jugar
      </button>
    </div>
  );
};

export default GameWonScreen;
