import React, { useState } from 'react';

function CardGame({ onBack }) {
  const [card, setCard] = useState(null);

  const drawCard = () => {
    const newCard = Math.floor(Math.random() * 13) + 1; // Cartas del 1 al 13
    setCard(newCard);
    if (newCard === 8) {
      if (navigator.vibrate) {
        navigator.vibrate(200); // Hace vibrar el dispositivo durante 200ms
      }
      alert('¡Sacaste un 8! Toma un trago.');
    }
  };

  const getCardColor = () => {
    return card === 8 ? '#F21905' : '#F27052';
  };

  return (
    <div className="container" style={{ backgroundColor: '#F2F2F2', borderRadius: '10px', width: '100%', maxWidth: '400px', margin: 'auto' }}>
      <div style={{ textAlign: 'right', margin: '20px 0' }}>
              <button className="btn" onClick={onBack} style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: '#F23E16', color: '#F2F2F2' }}>
        Volver al Menú
      </button>
      </div>
      <h1 style={{ color: '#F23E16', marginTop: '60px' }}>Juego de Cartas</h1>
      <p className="lead" style={{ color: '#F27052' }}>Saca una carta y si es un 8, ¡toma un trago!</p>
      <div className="card-display" style={{ margin: '20px 0', width: '100%', textAlign: 'center' }}>
        {card !== null ? (
          <div className="alert" style={{ backgroundColor: getCardColor(), color: '#F2F2F2', padding: '50px', borderRadius: '10px', fontSize: '3em' }}>
            {card}
          </div>
        ) : (
          <p style={{ fontSize: '1.2em' }}>Todavía no has sacado ninguna carta.</p>
        )}
      </div>
      <button className="btn" onClick={drawCard} style={{ backgroundColor: '#F23E16', color: '#F2F2F2' }}>
        Sacar carta
      </button>
    </div>
  );
}

export default CardGame;
