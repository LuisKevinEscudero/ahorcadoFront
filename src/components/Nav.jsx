import React from 'react';
import '../CSS/nav.css';
import VisitCounter from './VisitCounter';

const Nav = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/about">Acerca de</a></li>
        <li><a href="/services">Servicios</a></li>
        <li><a href="/contact">Contacto</a></li>
        <li><a href="/twitter" target="_blank" rel="noopener noreferrer">Twitter</a></li>
      </ul>
      <VisitCounter />
    </nav>
  );
};

export default Nav;
