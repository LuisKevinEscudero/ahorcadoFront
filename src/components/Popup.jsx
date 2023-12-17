// components/Popup.jsx
import React, { useState } from 'react';

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
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50"  onClick={handleCancel}>
      <div className="bg-white px-12 p-8 rounded-lg shadow-md overflow-y-auto max-h-96">
        <div className="flex flex-col items-center mb-4">
          {/* Renderizar botones para seleccionar letras */}
          {Array.from('ABCDEFGHIJKLMNOPQRSTUVWXYZ').map((letter) => (
            <button
              key={letter}
              className={`my-1 py-2 px-10 text-sm rounded ${selectedLetter === letter ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-700'}`}
              onClick={() => handleLetterClick(letter)}
            >
              {letter}
            </button>
          ))}
        </div>
        <div className="mt-4 flex justify-end">
          <button className="bg-red-500 text-white py-2 px-4 rounded" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
