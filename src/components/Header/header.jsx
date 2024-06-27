// src/components/header/Header.jsx
import React from 'react';
import './header.css';

function Header({ showCurriculumLink, centered }) {
  return (
    <header className={`header ${centered ? 'header--centered' : ''}`}>
      <h1 style={{ color: 'white' }}>Portfólio - Welleovan</h1>
      <nav>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#about">Sobre</a></li>
          {showCurriculumLink && <li><a href="/Curriculo">Curriculum</a></li>}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
