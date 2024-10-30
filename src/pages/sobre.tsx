import React from 'react';
import Header from '../components/Header'; // Importando o Header
import Footer from '../components/Footer'; // Importando o Footer
import styles from '../styles/sobre.module.scss';

const SobrePage: React.FC = () => {
  return (
    <>
      <Header /> {/* Header adicionado */}
      <div className={styles['sobre-page']}>
        <section className={styles['hero-section']}>
          <div className={styles['hero-content']}>
            <h1>Sobre o Grupo FG Decorações</h1>
            <p>Transformando espaços com pedras naturais de alta qualidade e elegância incomparável.</p>
          </div>
        </section>

        <section className={styles['about-section']}>
          <div className={styles['container']}>
            <h2>Nossa Missão</h2>
            <p>
              O Grupo FG Decorações tem como missão fornecer as melhores pedras naturais para projetos
              de arquitetura e design de interiores, proporcionando beleza e durabilidade em cada detalhe.
            </p>

            <h2>Nossos Valores</h2>
            <p>
              Qualidade, confiança e excelência no atendimento. Trabalhamos para superar as expectativas
              de nossos clientes, trazendo soluções sofisticadas e personalizadas.
            </p>

            <h2>Por que Escolher o FG Decorações?</h2>
            <ul>
              <li>Equipe especializada em pedras naturais</li>
              <li>Ampla variedade de mármores, quartzitos e granitos</li>
              <li>Consultoria personalizada para cada projeto</li>
              <li>Compromisso com a satisfação total do cliente</li>
            </ul>
          </div>
        </section>

        <section className={styles['team-section']}>
          <div className={styles['container']}>
            <h2>Conheça Nossa Equipe</h2>
            <p>
              Contamos com uma equipe de especialistas que está pronta para transformar suas ideias em realidade. Nosso time está à disposição para ajudá-lo em todas as etapas do projeto.
            </p>
            <div className={styles['team-grid']}>
              <div className={styles['team-member']}>
                <h3>Rogerio Freitas</h3>
                <p>Vendedor</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer /> {/* Footer adicionado */}
    </>
  );
};

export default SobrePage;
