// src/components/Header.tsx

import React from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  return (
    <header className={styles['header']}>
      <div className={styles['navbar-container']}>
        <div className={styles['logo']}>
          <Link href="/">
            <img src="/images/logo.png" alt="FG Decorações Logo" />
          </Link>
        </div>
        <nav className={styles['nav']}>
          <ul className={styles['nav-links']}>
            <li><Link href="#home">Início</Link></li>
            <li><Link href="#services">Serviços</Link></li>
            <li><Link href="#products">Produtos</Link></li>
            <li><Link href="#projects">Projetos</Link></li>
            <li><Link href="#contact">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
