import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import YoNunca from './YoNunca';
import CardGame from './CardGame';

function App() {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleBackToMenu = () => {
    setSelectedGame(null);
  };

  const renderGame = () => {
    switch (selectedGame) {
      case 'yoNunca':
        return <YoNunca onBack={handleBackToMenu} />;
      case 'juegoDeCartas':
        return <CardGame onBack={handleBackToMenu} />;
      default:
        return <Menu onSelectGame={setSelectedGame} />;
    }
  };

  return (
    <div>
      {renderGame()}
    </div>
  );
}

export default App;