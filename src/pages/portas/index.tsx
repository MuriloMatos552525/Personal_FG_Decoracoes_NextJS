import React from 'react';
import HeaderPortas from '../../components/HeaderPortas';
import FooterPortas from '../../components/FooterPortas';
import styles from '../../styles/portas.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import Link from 'next/link';

const whatsappNumber = '5511958258031';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações sobre nossos produtos!`;

const PortasHome: React.FC = () => {
  return (
    <div className={styles.page}>
      <HeaderPortas />

      {/* Hero Section */}
      <section className={styles.hero}>
        <img
          src="/images/portas/hero-background.jpg"
          alt="Portas e Espelhos"
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay} />
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Portas &amp; Espelhos
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Soluções em alumínio, vidro e LED para transformar seus ambientes com elegância e inovação.
          </motion.p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.ctaButton}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Fale Conosco{' '}
            <FontAwesomeIcon icon={faArrowRight} />
          </motion.a>
        </div>
      </section>

      {/* Categorias Section */}
      <section className={styles.categories}>
        <div className={styles.container}>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Nossas Categorias
          </motion.h2>
          <div className={styles.categoryGrid}>
            <Link href="/portas/produtos?categoria=Porta">
              <div className={styles.categoryItem}>
                <img src="/images/portas/categoria-porta.jpg" alt="Portas" />
                <h3>Portas</h3>
              </div>
            </Link>
            <Link href="/portas/produtos?categoria=Espelho">
              <div className={styles.categoryItem}>
                <img src="/images/portas/categoria-espelho.jpg" alt="Espelhos" />
                <h3>Espelhos</h3>
              </div>
            </Link>
            <Link href="/portas/produtos?categoria=TV">
              <div className={styles.categoryItem}>
                <img src="/images/portas/categoria-tv.jpg" alt="Porta com TV" />
                <h3>TV Acoplada</h3>
              </div>
            </Link>
            <Link href="/portas/produtos?categoria=Industrial">
              <div className={styles.categoryItem}>
                <img src="/images/portas/categoria-industrial.jpg" alt="Industrial" />
                <h3>Industrial</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Destaques Section */}
      <section className={styles.highlights}>
        <div className={styles.container}>
          <motion.h2 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}>
            Nossos Diferenciais
          </motion.h2>
          <div className={styles.highlightsGrid}>
            <div className={styles.highlightItem}>
              <h3>Design Exclusivo</h3>
              <p>Projetos modernos com acabamentos sofisticados.</p>
            </div>
            <div className={styles.highlightItem}>
              <h3>Alta Qualidade</h3>
              <p>Materiais premium que garantem durabilidade e elegância.</p>
            </div>
            <div className={styles.highlightItem}>
              <h3>Personalização</h3>
              <p>Soluções sob medida para cada ambiente.</p>
            </div>
          </div>
        </div>
      </section>

      <FooterPortas />
    </div>
  );
};

export default PortasHome;
