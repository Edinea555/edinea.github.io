import './App.css';
import React from 'react';
import { 
  FaCogs, FaCheckCircle, FaUserAlt, FaGithub, 
  FaListAlt, FaCertificate, FaGlobeAmericas 
} from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <header>
        <h1 className="title">Edinéa Conceição - Portfólio</h1>
        <p>Engenheira de Qualidade de Software | Automação de Testes | QA Pleno</p>
      </header>

      <section className="about">
        <h2><FaUserAlt /> Sobre Mim</h2>
        <p>
          Sou uma Engenheira de Qualidade de Software com mais de 5 anos de experiência
          na área de testes de software. Atuo com foco em automação de testes, melhoria
          contínua de processos de qualidade, testes exploratórios, testes funcionais e
          testes de API. Tenho vivência em ambientes ágeis, colaborativos e de escala internacional.
        </p>
      </section>

      <section className="skills">
        <h2><FaCogs /> Habilidades</h2>
        <ul>
          <li><FaCheckCircle /> Cypress - Testes E2E modernos e eficazes</li>
          <li><FaCheckCircle /> Robot Framework - Testes orientados a palavra-chave</li>
          <li><FaCheckCircle /> Rest Assured - Testes de API REST com Java</li>
          <li><FaCheckCircle /> Postman - Testes manuais e automatizados de API</li>
          <li><FaCheckCircle /> Jira e Azure DevOps - Gestão de defeitos e processos</li>
          <li><FaCheckCircle /> Metodologias Ágeis - Scrum e Kanban</li>
        </ul>
      </section>

      <section className="projects">
        <h2><FaGithub /> Repositórios</h2>
        <ul>
          <li>
            <a href="https://github.com/edinea/cypress-tests" target="_blank" rel="noopener noreferrer">
              Testes Automatizados com Cypress
            </a>
          </li>
          <li>
            <a href="https://github.com/edinea/robot-tests" target="_blank" rel="noopener noreferrer">
              Testes com Robot Framework
            </a>
          </li>
          <li>
            <a href="https://github.com/edinea/rest-assured-tests" target="_blank" rel="noopener noreferrer">
              Testes de API com Rest Assured
            </a>
          </li>
        </ul>
      </section>

      <section className="cases">
        <h2><FaListAlt /> Casos de Teste</h2>
        <ul>
          <li>
            <a href="https://github.com/edinea/test-cases" target="_blank" rel="noopener noreferrer">
              Repositório com Casos de Teste Funcionais e de Regressão
            </a>
          </li>
        </ul>
      </section>

      <section className="certifications">
        <h2><FaCertificate /> Certificações</h2>
        <ul>
          <li><FaCheckCircle /> CTFL - ISTQB Certified Tester Foundation Level</li>
          <li><FaCheckCircle /> Scrum.org - Certified Scrum Professional</li>
          <li><FaCheckCircle /> AISCVIRTUAL.ORG - Certificação em Qualidade de Software</li>
        </ul>
      </section>

      <section className="languages">
        <h2><FaGlobeAmericas /> Idiomas</h2>
        <ul>
          <li><FaCheckCircle /> Português - Fluente</li>
          <li><FaCheckCircle /> Inglês - Intermediário (B1)</li>
          <li><FaCheckCircle /> Espanhol - Básico (A2)</li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2025 - Edinéa Conceição | Engenheira de Qualidade de Software</p>
      </footer>
    </div>
  );
}

export default App;
