// src/components/Juego.js
import React from 'react';

const Juego = ({ pokemon }) => {
  // ...lógica del juego

  return (
    <div>
      <h2>¡Adivina el Pokémon!</h2>
      <img src={`assets/images/${pokemon.imageUrl}`} alt={pokemon.name} />
      <p>{pokemon.description}</p>
      {/* ...otras partes del juego */}
    </div>
  );
}

export default Juego;
