import React, { useEffect, useState } from 'react';
import HintDisplay from './HintDisplay';

const Hints = ({ pokemon, errorCount }) => {
  const [percentage, setPercentage] = useState(0);
  const [shuffledHints, setShuffledHints] = useState([]);
  const [hasShuffled, setHasShuffled] = useState(false);

  useEffect(() => {
    calculateErrorPercentage();

    // Barajamos las pistas solo una vez al cargar el componente
    if (!hasShuffled) {
      shuffleHints();
      setHasShuffled(true);
    }
  }, [errorCount, hasShuffled]);

  const calculateErrorPercentage = () => {
    const pokemonNameLength = pokemon.name.length;
    if (pokemonNameLength === 0) {
      setPercentage(0);
    }
    setPercentage((errorCount / pokemonNameLength) * 100);
  };

  const shuffleHints = () => {
    // Crear una copia de las pistas originales y barajarlas
    const originalHints = [
      { title: "Type", content: pokemon.type },
      { title: "Region", content: pokemon.region },
      { title: "Description", content: pokemon.description },
      { title: "Habilidades", content: pokemon.ability}
    ];

    const shuffled = [...originalHints]; // Crear una copia superficial antes de barajar
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    console.log('shuffled:', shuffled);

    // Asignar porcentajes específicos según la posición después de barajar
    shuffled.forEach((hint, index) => {
      hint.threshold = (index + 1) * 25;
    });

    shuffled[0].threshold = 1;

    setShuffledHints(shuffled);
  };

  return (
    <div className={`mt-8 `}>
      <h2 className={`text-lg font-bold mb-2`}>Pistas:</h2>

      {shuffledHints.map((hint, index) => (
        <HintDisplay
          key={index}
          title={hint.title}
          content={hint.content}
          threshold={hint.threshold}
          percentage={percentage}
        />
      ))}
    </div>
  );
};

export default Hints;
