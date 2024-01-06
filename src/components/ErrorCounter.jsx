// ErrorCounter.jsx
import React, { useEffect, useState } from 'react';
import '../CSS/errorCounter.css';

const ErrorCounter = ({ count, totalErrors }) => {
  const [vidaActual, setVidaActual] = useState(totalErrors - count);

  // Función para actualizar la barra de vida
  const actualizarBarraDeVida = () => {
    const porcentajeVida = (vidaActual / totalErrors) * 100;
    return {
      width: `${porcentajeVida}%`,
      backgroundColor: porcentajeVida <= 25 ? 'red' : porcentajeVida <= 50 ? 'orange' : 'green',
    };
  };

  // Efecto para actualizar la barra de vida cuando cambie vidaActual
  useEffect(() => {
    setVidaActual(totalErrors - count);
  }, [count]);

  return (
    <div className="error-counter">
      <p className="error-counter-text">Fallos: {count}/{totalErrors}</p>
      <div className="barra-vida">
        <div id="vida" className="vida" style={actualizarBarraDeVida()}></div>
      </div>
    </div>
  );
};

export default ErrorCounter;

