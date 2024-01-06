// components/Start.jsx
import React from 'react';
import '../CSS/start.css'; // Importa el nuevo archivo CSS

const Start = ({ onStartGame }) => {
  return (
    <div className="start-container">
      <h1 className="start-title">Bienvenido al Ahorcado Pokémon</h1>
      <button className="start-button" onClick={onStartGame}>
        Comenzar Juego
      </button>
    </div>
  );
};

export default Start;
