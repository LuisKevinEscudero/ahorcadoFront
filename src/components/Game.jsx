// components/Juego.jsx
import React, { useState } from 'react';
import Popup from './Popup';

const Game = ({ pokemon }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedLetter, setSelectedLetter] = useState('');

  const formatPokemonName = (name) => {
    // Reemplazar cada letra con una barra baja (_)
    return name.split('').map((letter, index) => (index < selectedLetter.length ? letter : '_')).join(' ');
  };

  const handleSelectLetter = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAcceptLetter = (letter) => {
    setSelectedLetter(letter);
  };

  return (
    <div className="flex items-center justify-center h-screen text-5xl font-bold">
      <p onClick={handleSelectLetter}>{formatPokemonName(pokemon.name)}</p>
      {showPopup && (
        <Popup onClose={handleClosePopup} onSelectLetter={handleAcceptLetter} />
      )}
    </div>
  );
};

export default Game;

