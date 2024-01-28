// VisitCounter.js
import React, { useState, useEffect } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);

  useEffect(() => {
    // Realiza una llamada al controlador de Spring para obtener el conteo de visitas
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('http://localhost:8080/visit');
        const data = await response.json();
        setVisitCount(data);
      } catch (error) {
        console.error('Error fetching visit count:', error);
      }
    };

    fetchVisitCount();
  }, []); // El segundo parámetro [] indica que este efecto se ejecutará solo una vez al montar el componente.

  return (
    <div>
      <p>Contador de visitas: {visitCount}</p>
    </div>
  );
};

export default VisitCounter;
