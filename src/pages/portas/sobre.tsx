import React from 'react';
import Header from '../../components/HeaderPortas';
import Footer from '../../components/FooterPortas';
import styles from '../../styles/sobrePortas.module.scss';

const SobrePortas: React.FC = () => {
  return (
    <>
      <Header />
      <div className={styles['sobre-page']}>
        <section className={styles['hero-section']}>
          <div className={styles['hero-content']}>
            <h1>Sobre Portas &amp; Espelhos</h1>
            <p>
              Inovação, elegância e funcionalidade em soluções para móveis modernos.
            </p>
          </div>
        </section>

        <section className={styles['about-section']}>
          <div className={styles.container}>
            <h2>Nossa Missão</h2>
            <p>
              Nossa missão é transformar ambientes com produtos que unem design, qualidade e tecnologia. 
              Especializados em portas de alumínio e vidro, espelhos personalizados e soluções inovadoras, 
              ajudamos você a criar espaços sofisticados e funcionais.
            </p>

            <h2>Nossos Valores</h2>
            <p>
              Valorizamos a inovação, a excelência no atendimento e a personalização. Cada produto é desenvolvido com 
              rigor técnico e criatividade para oferecer qualidade superior e exclusividade em cada projeto.
            </p>

            <h2>Por que escolher Portas &amp; Espelhos?</h2>
            <ul>
              <li>Produtos de alta qualidade e design contemporâneo</li>
              <li>Soluções personalizadas para atender seu projeto</li>
              <li>Equipe especializada e comprometida com a inovação</li>
              <li>Atendimento diferenciado e consultoria especializada</li>
            </ul>
          </div>
        </section>

        <section className={styles['team-section']}>
          <div className={styles.container}>
            <h2>Conheça Nossa Equipe</h2>
            <p>
              Nossa equipe é formada por profissionais apaixonados por design e tecnologia, prontos para transformar suas ideias em realidade.
            </p>
            <div className={styles['team-grid']}>
              <div className={styles['team-member']}>
                <h3>Ana Martins</h3>
                <p>Designer de Produtos</p>
              </div>
              <div className={styles['team-member']}>
                <h3>Carlos Silva</h3>
                <p>Consultor de Projetos</p>
              </div>
              <div className={styles['team-member']}>
                <h3>Mariana Costa</h3>
                <p>Gerente de Atendimento</p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default SobrePortas;
