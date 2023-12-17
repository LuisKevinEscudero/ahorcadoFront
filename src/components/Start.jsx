// components/Start.jsx
import React from 'react';

const Start = ({ onStartGame }) => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl mb-4 font-bold text-center">Bienvenido al Ahorcado Pokémon</h1>
      <button
        className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline"
        onClick={onStartGame}
      >
        Comenzar Juego
      </button>
    </div>
  );
}

export default Start;
