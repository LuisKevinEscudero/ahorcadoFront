// src/components/Inicio.js
import React from 'react';

const Inicio = ({ onStartGame }) => {
  return (
    <div>
      <h1>¡Ahorcado de Pokémon!</h1>
      <button onClick={onStartGame}>Comenzar Juego</button>
    </div>
  );
}

export default Inicio;
