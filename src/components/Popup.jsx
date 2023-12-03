// components/Popup.jsx
import React, { useState } from 'react';
import ScrollWheel from 'react-scroll-wheel-datepicker';

const Popup = ({ onClose, onSelectLetter }) => {
  const [selectedLetter, setSelectedLetter] = useState('');

  const handleAccept = () => {
    onSelectLetter(selectedLetter);
    onClose();
  };

  const handleCancel = () => {
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded shadow-md">
        <ScrollWheel
          visibleItemCount={3}
          onChange={(item) => setSelectedLetter(item)}
          items={['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']}
        />
        <div className="mt-4 flex justify-end">
          <button className="bg-green-500 text-white py-2 px-4 rounded mr-2" onClick={handleAccept}>
            Aceptar
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded" onClick={handleCancel}>
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;
