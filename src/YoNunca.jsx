import React, { useState } from 'react';
import challenges from './Challenges';

function YoNunca({ onBack }) {
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [usedChallenges, setUsedChallenges] = useState([]);

  const getRandomChallenge = () => {
    let availableChallenges = challenges.filter((_, index) => !usedChallenges.includes(index));
    if (availableChallenges.length === 0) {
      alert("¡Has completado todas las afirmaciones!");
      setUsedChallenges([]); // Resetea las afirmaciones usadas
      return null;
    }
    const randomIndex = Math.floor(Math.random() * availableChallenges.length);
    const challengeIndex = challenges.indexOf(availableChallenges[randomIndex]);
    return challengeIndex;
  };

  const startGame = () => {
    const challengeIndex = getRandomChallenge();
    if (challengeIndex !== null) {
      setCurrentChallenge(challengeIndex);
      setUsedChallenges([challengeIndex]);
    }
  };

  const nextChallenge = () => {
    const challengeIndex = getRandomChallenge();
    if (challengeIndex !== null) {
      setCurrentChallenge(challengeIndex);
      setUsedChallenges(prevUsed => [...prevUsed, challengeIndex]);
    }
  };

  return (
    <div className="container" style={{ backgroundColor: '#F2F2F2', borderRadius: '10px', width: '100%', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ textAlign: 'right', margin: '20px 0' }}>
              <button className="btn" onClick={onBack} style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#F23E16', color: '#F2F2F2' }}>
        Volver al Menú
      </button>
      </div>
      <h1 style={{ color: '#F23E16', marginTop: '60px' }}>Juego de "Yo nunca..."</h1>
      <p className="lead" style={{ color: '#F27052' }}>¡Prepárate para conocer mejor a tus amigos con estas afirmaciones de 'Yo nunca...'!</p>
      {currentChallenge !== null ? (
        <>
          <div className="alert" style={{ backgroundColor: '#F27052', color: '#F2F2F2', padding: '30px', borderRadius: '10px', fontSize: '1.5em' }}>
            {challenges[currentChallenge]}
          </div>
          <button className="btn" onClick={nextChallenge} style={{ backgroundColor: '#F23E16', color: '#F2F2F2' }}>
            Siguiente afirmación
          </button>
        </>
      ) : (
        <button className="btn" onClick={startGame} style={{ backgroundColor: '#F23E16', color: '#F2F2F2' }}>
          ¡Empezar!
        </button>
      )}
    </div>
  );
}

export default YoNunca;