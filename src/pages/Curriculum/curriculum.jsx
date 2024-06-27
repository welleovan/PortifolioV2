import React from 'react';
import '../Curriculum/curriculum.css'
import Header from '../../components/Header/header.jsx';
import About from '../../components/About/About.jsx';

function Curriculum() {
  return (
 
  
    <div>
<Header showCurriculumLink={false} centered={true} /> 
<About/>    {/* chamando About */}

      <section id="curriculum" className="curriculum">
        <h2>Currículo</h2>
        <p className="apresentacao__texto__descricao">Apresentação e informações principais</p>
      
        <h2 className="apresentacao__texto__subtitulo">Experiências</h2>
        <ul className="apresentacao__texto__lista">
          <li>Empresa Microsum (2016 - 2018) - Analista de implantação</li>
          <li>Empresa Wiki Sistemas (2018 - 2019) - Analista de implantação</li>
        </ul>
        <h2 className="apresentacao__texto__subtitulo">Estudos</h2>
        <ul className="apresentacao__texto__lista">
          <li>Curso Tal - Instituição Tal <a href="linkcertificado">com certificado</a></li>
          <li>Curso Tal - Instituição Tal <a href="linkcertificado">com certificado</a></li>
          <li>Curso Tal - Instituição Tal <a href="linkcertificado">com certificado</a></li>
        </ul>
      </section>
    </div>
  );
}

export default Curriculum;
