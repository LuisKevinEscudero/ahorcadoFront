import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import Hints from './Hints';
import GameOverScreen from './GameOverScreen';

const Game = ({ pokemon }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [correctLetters, setCorrectLetters] = useState(Array(pokemon.name.length).fill('_'));
  const [errorCount, setErrorCount] = useState(0);

  useEffect(() => {
    if(pokemon.name.includes('-')){
      const guion = [...correctLetters];
      correctLetters[pokemon.name.indexOf('-')] = '-';
      setCorrectLetters(guion);
    }
    randomLetter();
  }, [pokemon.name]);

  const randomLetter = () => {
    console.log('pokemon.name:', pokemon.name);
    const initialCorrectLetters = [...correctLetters];
    let randomIndex = 0;
    do {
      randomIndex = Math.floor(Math.random() * pokemon.name.length);
      console.log('randomIndex:', randomIndex);
      initialCorrectLetters[randomIndex] = pokemon.name[randomIndex];
    
    } while (pokemon.name.indexOf('-') === randomIndex)
    setCorrectLetters(initialCorrectLetters);
  };

  const formatPokemonName = (name) => {
    return name.split('').map((letter, index) => (
      <span
        key={index}
        className={`ml-6 cursor-pointer hover:shadow-md hover:filter hover:shadow-gray-700`}
        onClick={() => handleSelectLetter(index)}
        // Agregar la propiedad "pointer-events" para deshabilitar clics en letras ya adivinadas
        style={{ pointerEvents: correctLetters[index] !== '_' ? 'none' : 'auto' }}
      >
        {correctLetters[index]}
      </span>
    ));
  };

  const handleSelectLetter = (index) => {
    setShowPopup(true);
    setSelectedPosition(index);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

  const handleAcceptLetter = (letter) => {
    //console.log('Letra aceptada:', letter);
    if (selectedPosition !== null) {
      //console.log(`Posición seleccionada: ${selectedPosition}`);
      //console.log(`Letra en la posición seleccionada: ${pokemon.name[selectedPosition]}`);
      if (pokemon.name[selectedPosition] === letter) {
        //console.log('Letra correcta!');
        setCorrectLetters((prevCorrectLetters) => {
          const newCorrectLetters = [...prevCorrectLetters];
          newCorrectLetters[selectedPosition] = letter;
          //console.log('CorrectLetters actualizado:', newCorrectLetters);
          return newCorrectLetters;
        });
      } else {
        //console.log('Letra incorrecta. No se actualiza CorrectLetters.');
        setErrorCount((prevErrorCount) => {
          const newErrorCount = prevErrorCount + 1;
          //console.log('Número de errores:', newErrorCount);
          if (newErrorCount >= pokemon.name.length) {
            setShowPopup(false);
          }
          return newErrorCount;
        });
      }
      //console.log(pokemon.name);
      //console.log('************************************');
      setShowPopup(false);
    }
  };

  const handleRestart = () => {
    // Lógica de reinicio del juego
    setShowPopup(false);
    setSelectedPosition(null);
    setCorrectLetters(Array(pokemon.name.length).fill('_'));
    setErrorCount(0);
  };

  if (errorCount >= pokemon.name.length) {
    return <GameOverScreen onRestart={handleRestart} />;
  }

  return (
    <div className="bg-blue-100 h-screen flex items-center justify-center m-auto ">
      <div className="flex flex-col items-center text-5xl font-bold">
        <div>
          <p>{formatPokemonName(pokemon.name)}</p>
        </div>
        <div>
          {showPopup && (
            <Popup
              onClose={handleClosePopup}
              onSelectLetter={handleAcceptLetter}
            />
          )}
        </div>
        <div>
          <Hints errorCount={errorCount} pokemon={pokemon} />
        </div>
      </div>
    </div>
  );
};

export default Game;
