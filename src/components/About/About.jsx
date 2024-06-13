import React from 'react';
import './About.css';


const About = () => {
  return (
    <div>
      <div className="profile-picture">
          <img src="./assets/images/Perfil.png"/>
          </div>
      <section id="about" className="about">
        <h2>Sobre Mim</h2>
        <p>Sou um desenvolvedor web com experiência em React e CSS.</p>
      </section>
    </div>
  );
}

export default About;
