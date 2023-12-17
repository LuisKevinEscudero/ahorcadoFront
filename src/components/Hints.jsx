import React, {useEffect, useState} from 'react';
import HintDisplay from './HintDisplay';

const Hints = ({ pokemon, errorCount }) => {
  const pokemonNameLength = pokemon.name.length;
  const [percentage, setPercentage] = useState(0);
  useEffect(() => { 
    calculateErrorPercentage();
  }, [errorCount]); 
  // Calcular el porcentaje de errores
  const calculateErrorPercentage = () => {
    if (pokemonNameLength === 0) {
      setPercentage(0); // Evitar división por cero
    }
    setPercentage((errorCount / pokemonNameLength) * 100);
   //console.log('percentage:', percentage);
  };

  return (
    <div className={`mt-8 `}>
      <h2 className={`text-lg font-bold mb-2 ${percentage >= 25 ? 'visible' : 'hidden'}`}>Pistas:</h2>

      <HintDisplay title="Type" content={pokemon.type.join(', ')} threshold={25} percentage={percentage} />
      <HintDisplay title="Region" content={pokemon.region} threshold={50} percentage={percentage}/>
      <HintDisplay title="Description" content={pokemon.description} threshold={75} percentage={percentage}/>

      {/* Agregar más pistas según sea necesario */}
    </div>
  );
};

export default Hints;
