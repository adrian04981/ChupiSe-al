import React from 'react';

function Menu({ onSelectGame }) {
  return (
    <div className="container text-center mt-5" style={{ backgroundColor: '#F2F2F2', padding: '20px', borderRadius: '10px', maxWidth: '500px', margin: 'auto' }}>
      <h1 style={{ color: '#F23E16' }}>Bienvenido al Juego de Fiesta</h1>
      <p className="lead" style={{ color: '#F27052' }}>Elige tu juego:</p>
      <button className="btn m-2" onClick={() => onSelectGame('yoNunca')} style={{ backgroundColor: '#F23E16', color: '#F2F2F2', borderRadius: '5px', padding: '10px 20px' }}>
        Yo Nunca...
      </button>
      <button className="btn m-2" onClick={() => onSelectGame('juegoDeCartas')} style={{ backgroundColor: '#F27052', color: '#F2F2F2', borderRadius: '5px', padding: '10px 20px' }}>
        Juego de Cartas
      </button>
      <div style={{ marginTop: '20px' }}>
        <a href="https://github.com/adrian04981/ChupiSe-al" target="_blank" rel="noopener noreferrer" style={{ color: '#F23E16', fontSize: '1.5em' }}>
          <i className="fab fa-github"></i> Visita mi repositorio
        </a>
      </div>
    </div>
  );
}

export default Menu;
