// src/components/home/Home.jsx
import React from 'react';
import '../Home/home.css'
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/header';
import About from '../../components/About/About';
function Home()  {
  const projectList = [
    { name: 'Projeto 1', description: 'Jogo da velha com Html5 e css e javascript' },
    { name: 'Projeto 2', description: 'Jogo Yellowball Runner' },
  ];

  


  return (
    <div>
    <Header/> 
      <About/>    {/* chamando About */}
      <section className="intro">
        <h1 className="intro__title">
          Eleve seu negócio a outro nível
          <strong className="intro__title--highlight">com um Front-end de qualidade</strong>
        </h1>
        <p className="intro__description">
          Olá! Sou Welleovan dos Santos, desenvolvedor Front-end com especialidade em React, HTML e CSS. 
          Ajudo pequenos negócios e designers a colocarem em prática boas ideias. Vamos conversar?
        </p>
        <div className="intro__links">
          <h2 className="intro__links-title">Acesse minhas redes:</h2>
          <a className="intro__link" href="https://github.com/welleovan" target="_blank" rel="noopener noreferrer">
            <img src="./assets/images/Logo-Github.svg" alt="Logo do GitHub"/>
            GitHub
          </a>
          <a className="intro__link" href="https://www.linkedin.com/in/welleovan-dos-santos-47665a106/" target="_blank" rel="noopener noreferrer">
            <img src="./assets/images/Logo-linkedin.svg" alt="Logo do LinkedIn"/>
            LinkedIn
          </a>
          <a className="intro__link" href="https://www.twitch.tv/welleovan" target="_blank" rel="noopener noreferrer">
            <img src="./assets/images/Logo-Twitch.svg" alt="Logo da Twitch"/>
            Twitch
          </a>
        </div>
      </section>

      <section id="projects" className="projects">
        <h2>Meus Projetos</h2>
        <div className="project-list">
          {projectList.map((project, index) => (
            <div key={index} className="project">
              <h3>{project.name}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="curriculum"  className="curriculum">
        <h2>Currículo</h2>
      
            <p class="apresentacao__texto__descricao">Apresentação e informações principais</p>
            
            <h2 class="apresentacao__texto__subtitulo">Experiências</h2>
            <ul class="apresentacao__texto__lista">
                <li>Empresa Microsum (2016 - 2018) - Analista de implantação</li>
                <li>Empresa Wiki Sistemas (2018 - 2019) - Analista de implantação</li>
            </ul>

            <h2 class="apresentacao__texto__subtitulo">Estudos</h2>
            <ul class="apresentacao__texto__lista">
                <li>Curso Tal - Instituição Tal <a href="linkcertificado">com certificado</a></li>
                <li>Curso Tal - Instituição Tal <a href="linkcertificado">com certificado</a></li>
                <li>Curso Tal - Instituição Tal <a href="linkcertificado">com certificado</a></li>
            </ul>
      </section>
      <Footer></Footer>
      {/* Fim do conteúdo do currículo */}
    </div>
  );
}

export default Home;
