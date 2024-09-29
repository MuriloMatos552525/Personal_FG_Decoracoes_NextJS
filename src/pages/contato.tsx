// src/pages/contato.tsx

import React from 'react';
import styles from '../styles/contato.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';

const ContatoPage: React.FC = () => {
  const whatsappNumber = '5511999999999';
  const whatsappMessage = 'Olá, gostaria de mais informações sobre seus produtos.';

  return (
    <div className={styles['contato-page']}>
      <h1>Fale Conosco</h1>
      <p>Entre em contato conosco para saber mais sobre nossos produtos e serviços.</p>
      <div className={styles['contato-opcoes']}>
        <a
          href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className={styles['contato-button']}
        >
          <FontAwesomeIcon icon={faWhatsapp} /> Falar pelo WhatsApp
        </a>
        <a href="mailto:contato@fgdecoracoes.com.br" className={styles['contato-button']}>
          <FontAwesomeIcon icon={faEnvelope} /> Enviar um E-mail
        </a>
        <p className={styles['contato-telefone']}>
          <FontAwesomeIcon icon={faPhone} /> (11) 99999-9999
        </p>
      </div>
    </div>
  );
};

export default ContatoPage;
