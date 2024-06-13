// src/components/header/Header.jsx
import React from 'react';
import './header.css'

function Header()  {
  return (
    <header className="header">
      <h1>Portfólio- Welleovan </h1>
      <nav>
        <ul>
          <li><a href="#about">Sobre</a></li>
          <li><a href="#projects">Projetos</a></li>
          <li><a href="/Curriculo">Curriculum</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
