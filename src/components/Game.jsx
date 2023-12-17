import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import Hints from './Hints';
import GameOverScreen from './GameOverScreen';
import GameWonScreen from './GameWonScreen';

const initializeCorrectLetters = (pokemon) => {
  return Array(pokemon.name.length).fill('_');
};

const Game = ({ pokemon }) => {
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [correctLetters, setCorrectLetters] = useState(initializeCorrectLetters(pokemon));
  const [errorCount, setErrorCount] = useState(0);
  const [gameWon, setGameWon] = useState(false); // Nuevo estado para controlar la victoria


  useEffect(() => {
    if(pokemon.name.includes('-')){
      for(let i = 0; i < pokemon.name.length; i++){
        const guion = [...correctLetters];
        if(pokemon.name[i] === '-'){
          correctLetters[i] = '-';
          setCorrectLetters(guion);
        }
      }
    }
    randomLetter();
  }, [pokemon.name]);

  const randomLetter = () => {
    console.log('randomLetter');
    
    if(!gameWon){
      console.log('juego no ganado' );
      console.log('pokemon.name:', pokemon.name);
      const initialCorrectLetters = [...correctLetters];
      let randomIndex = 0;
      do {
        randomIndex = Math.floor(Math.random() * pokemon.name.length);
        //console.log('randomIndex:', randomIndex);
      } while (pokemon.name[randomIndex] === '-');
      initialCorrectLetters[randomIndex] = pokemon.name[randomIndex];
      setCorrectLetters(initialCorrectLetters);
    }
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
    if (selectedPosition !== null) {
      if (pokemon.name[selectedPosition] === letter) {
        setCorrectLetters((prevCorrectLetters) => {
          const newCorrectLetters = [...prevCorrectLetters];
          newCorrectLetters[selectedPosition] = letter;
          return newCorrectLetters;
        });
      } else {
        setErrorCount((prevErrorCount) => {
          const newErrorCount = prevErrorCount + 1;
          if (newErrorCount >= pokemon.name.length) {
            setShowPopup(false);
          }
          return newErrorCount;
        });
      }
      setShowPopup(false);
    }
  };

  const handleRestart = () => {
    // Lógica de reinicio del juego
    console.log('Reiniciando el juego...');
    setShowPopup(false);
    setSelectedPosition(null);
    setCorrectLetters(initializeCorrectLetters(pokemon));
    setErrorCount(0);
    setGameWon(false);
  };
  
  useEffect(() => {
    // Esta parte se ejecutará después de que el componente se haya renderizado y el estado se haya actualizado
    console.log('gameWon después de reiniciar:', gameWon);
    // Puedes agregar más lógica aquí si es necesario
    randomLetter(); // Obtener una nueva letra aleatoria inicial
  }, [gameWon]);
  

  // Lógica para verificar si todas las letras han sido adivinadas
  useEffect(() => {
    if (!correctLetters.includes('_')) {
      setGameWon(true);
    }
  }, [correctLetters]);

  if (errorCount >= pokemon.name.length) {
    return <GameOverScreen onRestart={handleRestart} />;
  }

  if (gameWon) {
    console.log('Game won. Redirecting to GameWonScreen...');
    return <GameWonScreen onRestart={handleRestart} pokemon={pokemon} />;
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
