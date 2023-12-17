import React from 'react';

const GameWonScreen = ({ onRestart }) => {
  return (
    <div className="flex items-center justify-center h-screen text-5xl font-bold flex-col">
      <p>Felicidades, has ganado el juego</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={onRestart}>
        Volver a Jugar
      </button>
    </div>
  );
};

export default GameWonScreen;
