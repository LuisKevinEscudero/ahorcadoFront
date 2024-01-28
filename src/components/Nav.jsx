// Nav.js
import React from 'react';
import VisitCounter from './VisitCounter'; // Importa el componente VisitCounter
import '../CSS/nav.css';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/services">Servicios</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
        <li><VisitCounter /></li> {/* Agrega el componente VisitCounter directamente aquí */}
      </ul>
    </nav>
  );
};

export default Nav;
