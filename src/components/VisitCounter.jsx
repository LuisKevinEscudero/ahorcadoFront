/*import React, { useState, useEffect } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        const response = await fetch('http://localhost:8080/visit');
        const data = await response.json();

        // Actualiza el contador solo si la respuesta fue exitosa
        if (response.ok) {
          console.log('Respuesta del servidor:', data);
          setVisitCount(data);
          setHasFetched(true); // Marca que la solicitud ya se ha realizado
        } else {
          console.error('Error en la respuesta del servidor:', data);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    // Realiza la solicitud solo si aún no se ha realizado
    if (!hasFetched) {
      fetchVisitCount();
    }
  }, []); // Ejecuta el efecto solo una vez al montar el componente

  return (
    <div>
      <p>Contador de visitas: {visitCount}</p>
    </div>
  );
};

export default VisitCounter;*/

import React, { useState, useEffect } from 'react';

const VisitCounter = () => {
  const [visitCount, setVisitCount] = useState(0);
  const [hasFetched, setHasFetched] = useState(false);

  useEffect(() => {
    const fetchVisitCount = async () => {
      try {
        //const response = await fetch('http://localhost:8080/visit');
        const response = await fetch('https://api-ahorcado.onrender.com/visit');
        const data = await response.json();

        // Actualiza el contador solo si la respuesta fue exitosa
        if (response.ok) {
          console.log('Respuesta del servidor:', data);
          setVisitCount(data);
          setHasFetched(true); // Marca que la solicitud ya se ha realizado
        } else {
          console.error('Error en la respuesta del servidor:', data);
        }
      } catch (error) {
        console.error('Error al realizar la solicitud:', error);
      }
    };

    // Realiza la solicitud solo si aún no se ha realizado
    if (!hasFetched) {
      fetchVisitCount();
    }
  }, [hasFetched]); // Ahora, el efecto depende de hasFetched

  return (
    <div>
      <p>Contador de visitas: {visitCount}</p>
    </div>
  );
};

export default VisitCounter;
