import React, { useState, useEffect } from 'react';
import Popup from './Popup';
import Hints from './Hints';
import GameOverScreen from './GameOverScreen';
import GameWonScreen from './GameWonScreen';
import ErrorCounter from './ErrorCounter';
import '../CSS/game.css'; 

const initializeCorrectLetters = (pokemon) => {
  return Array(pokemon.name.length).fill('_');
};

const Game = ({ pokemon: initialPokemon }) => {
  const [pokemon, setPokemon] = useState(initialPokemon);
  const [showPopup, setShowPopup] = useState(false);
  const [selectedPosition, setSelectedPosition] = useState(null);
  const [correctLetters, setCorrectLetters] = useState(initializeCorrectLetters(pokemon));
  const [errorCount, setErrorCount] = useState(0);
  const [gameWon, setGameWon] = useState(false); // Nuevo estado para controlar la victoria
  const [changePokemon, setChangePokemon] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedLetters, setSelectedLetters] = useState({});

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
  }, [pokemon.name, gameWon]);

  const randomLetter = () => {    
    if(!gameWon){
      console.log('pokemon.name:', pokemon.name);
      const initialCorrectLetters = [...correctLetters];
      let randomIndex = 0;
      do {
        randomIndex = Math.floor(Math.random() * pokemon.name.length);
      } while (pokemon.name[randomIndex] === '-');
      initialCorrectLetters[randomIndex] = pokemon.name[randomIndex];
      setCorrectLetters(initialCorrectLetters);
    }
  };
  
  const formatPokemonName = (name) => {
    return name.split('').map((letter, index) => (
      <span
        key={index}
        className={`formatPokemonNameSpan`}
        onClick={() => handleSelectLetter(index)}
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
    console.log('initialCorrectLetters:', correctLetters);
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
        
        setSelectedLetters((prevSelectedLetters) => {
          const positionKey = selectedPosition.toString();
          return {
            ...prevSelectedLetters,
            [positionKey]: prevSelectedLetters[positionKey]
              ? `${prevSelectedLetters[positionKey]}, ${letter}`
              : letter,
          };
        });
        console.log('selectedLetters:', selectedLetters);
      }

      setShowPopup(false);
    }
  };

  const apiCall = async () => {
    try {
      // Llamada a la API comentada
      const response = await fetch('http://localhost:8080/pokemon/random');
      //const response = await fetch('http://localhost:8080/pokemon/startGame');
      //const response = await fetch('https://api-ahorcado.onrender.com/pokemon/random');
      // Emulación local con un objeto
      const mockPokemon = {
        name: 'AA-AA-AA',
        type: ['Electric', 'Flying'],
        region: 'Kanto',
        description: 'A cute and powerful Electric-type Pokémon.',
        // Otros campos que puedas necesitar
      };

      // Llamada a la API comentada, y se reemplaza con la emulación local
      const data = await response.json();
      data.name = data.name.toUpperCase();
      setPokemon(data);
      console.log('pokemon:', pokemon);
      console.log('data:', data);
      setChangePokemon(!changePokemon);
      setCorrectLetters(initializeCorrectLetters(data));
    } catch (error) {
      console.error(error.message);
    }
  };

  // En el componente Game
  const handleRestart = async () => {
    setIsLoading(true);

    try {
      // Llamada a la API
      await apiCall();
    } catch (error) {
      console.error(error.message);
    } finally {
      setIsLoading(false);
    }

    setShowPopup(false);
    setSelectedPosition(null);
    setErrorCount(0);
    setGameWon(false);
    setSelectedLetters({});
  };
  
  useEffect(() => {
    randomLetter(); 
  }, [gameWon, changePokemon]);

  // Lógica para verificar si todas las letras han sido adivinadas
  useEffect(() => {
    if (!correctLetters.includes('_')) {
      setGameWon(true);
    }
  }, [correctLetters]);

  if (errorCount >= pokemon.name.length) {
    return <GameOverScreen onRestart={handleRestart} pokemon={pokemon} isLoading={isLoading} />;
  }

  if (gameWon) {
    console.log('Game won. Redirecting to GameWonScreen...');
    return <GameWonScreen onRestart={handleRestart} pokemon={pokemon} isLoading={isLoading}/>;
  }

  return (
<div className="firstDiv">
  <div className="secondDiv">

  <div className="selectedLettersDiv">
      <p>Selected Letters:</p>
      <ul className="selectedLettersList">
        {Object.entries(selectedLetters).map(([position, letter]) => (
            <li key={position}>{`Posicion ${parseInt(position) + 1}: ${letter}`}</li>
        ))}
      </ul>
    </div>


    <div className="errorCounterDiv">
      <ErrorCounter count={errorCount} totalErrors={pokemon.name.length} />
    </div>
    <div className="thirdDiv">
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
