// components/Popup.jsx
import React, { useState } from 'react';
import '../CSS/popup.css';

const Popup = ({ onClose, onSelectLetter }) => {
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleLetterClick = (letter) => {
    setSelectedLetter(letter);
    // Llamar a onSelectLetter directamente al hacer clic en la letra
    onSelectLetter(letter);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="letter-overlay"  onClick={handleCancel}>
      <div className="letter-card-container">
        <div className="letter-flex-container">
          {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
            <button
            key={letter}
            className={`letter-button small-text rounded ${
              selectedLetter === letter ? 'selected-letter-button' : 'unselected-letter-button'
            }`}
            onClick={() => handleLetterClick(letter)}
          >
              {letter}
            </button>
          ))}
        </div>
        <div className="cancel-button-container">
          <button className="cancel-button" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
