import React from 'react';
import Header from '../../components/HeaderPortas';
import Footer from '../../components/Footer';
import styles from '../../styles/portas.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

const whatsappNumber = '5511958258031';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações sobre nossos produtos!`;

const PortasHome: React.FC = () => {
  return (
    <div className={styles.page}>
      <Header />
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
            Soluções em alumínio, vidro e LED para um design sofisticado e minimalista.
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
      {/* Outras seções do mini site podem ser adicionadas aqui */}
      <Footer />
    </div>
  );
};

export default PortasHome;
