import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`${styles['header']} ${scrolled ? styles['scrolled'] : ''}`}>
      <div className={styles['navbar-container']}>
        <div className={styles['logo']}>
          <Link href="/">
            <img src="/images/logo.png" alt="Logo FG Decorações" />
          </Link>
        </div>
        <nav className={styles['nav']}>
          <ul className={styles['nav-links']}>
            <li><Link href="/">Início</Link></li>
            <li><Link href="/produtos">Produtos</Link></li>
            <li><Link href="/sobre">Sobre Nós</Link></li>
            <li><Link href="/contato">Contato</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
