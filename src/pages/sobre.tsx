// src/pages/sobre.tsx

import React from 'react';
import styles from '../styles/sobre.module.scss';

const SobrePage: React.FC = () => {
  return (
    <div className={styles['sobre-page']}>
      <h1>Sobre o Grupo FG Decorações</h1>
      <p>
        O Grupo FG Decorações é referência em pedras naturais de alta qualidade, oferecendo uma ampla
        variedade de quartzitos, mármores e granitos para transformar seus projetos em realidade.
        Nosso compromisso é com a excelência e a satisfação de nossos clientes.
      </p>
      <p>
        Com anos de experiência no mercado, contamos com uma equipe especializada pronta para
        oferecer consultoria personalizada, ajudando você a escolher o material ideal para o seu
        projeto, seja ele residencial, comercial ou corporativo.
      </p>
    </div>
  );
};

export default SobrePage;
