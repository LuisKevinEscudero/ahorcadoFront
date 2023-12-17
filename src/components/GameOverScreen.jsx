// components/GameOverScreen.jsx
import React from 'react';

const GameOverScreen = ({ onRestart }) => {
  return (
    <div className="flex items-center justify-center h-screen text-5xl font-bold flex-col">
      <p>Game Over</p>
      <button className="bg-blue-500 text-white py-2 px-4 rounded mt-4" onClick={onRestart}>
        Volver a Jugar
      </button>
    </div>
  );
};

export default GameOverScreen;
