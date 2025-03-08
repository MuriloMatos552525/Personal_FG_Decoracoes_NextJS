// src/components/Footer.tsx

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Footer.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  return (
    <footer className={styles['footer']}>
      <div className={styles['footer-container']}>
        <div className={styles['footer-about']}>
          <div className={styles['logo']}>
            <img src="/images/logo.png" alt="FG Decorações Logo" />
          </div>
          <p>
            Especializada na comercialização de portas para moveis, oferecendo uma ampla variedade de produtos de alta qualidade.
          </p>
        </div>
        <div className={styles['footer-links']}>
          <h4>Links Rápidos</h4>
          <ul>
            <li><Link href="/portas">Início</Link></li>
            <li><Link href="/portas/produtos">Produtos</Link></li>
            <li><Link href="/portas/sobre">Sobre Nós</Link></li>
            <li><Link href="/portas/contato">Contato</Link></li>
          </ul>
        </div>
        <div className={styles['footer-contact']}>
          <h4>Contato</h4>
          <p><FontAwesomeIcon icon={faPhone} /> (11) 95825-8031</p>
          <p><FontAwesomeIcon icon={faWhatsapp} /> (11) 95825-8031</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> contato@fgdecoracoes.com.br</p>
        </div>
      </div>
      <div className={styles['footer-bottom']}>
        <p>&copy; 2024 Grupo FG Representações. Todos os direitos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer;
