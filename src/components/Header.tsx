// src/components/Header.tsx

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/Header.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (
        navRef.current &&
        !navRef.current.contains(event.target as Node) &&
        menuOpen
      ) {
        setMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [menuOpen]);

  // Função para alternar o menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Função para fechar o menu quando um link é clicado
  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles['navbar-container']}>
        <div className={styles.logo}>
          <Link href="/">
            <img src="/images/logo.png" alt="Logo FG Decorações" />
          </Link>
        </div>
        <nav
          ref={navRef}
          className={`${styles.nav} ${menuOpen ? styles.active : ''}`}
        >
          <ul className={styles['nav-links']}>
            <li>
              <Link href="/" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/produtos" onClick={closeMenu}>
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/sobre" onClick={closeMenu}>
                Sobre Nós
              </Link>
            </li>
            <li>
              <Link href="/contato" onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className={styles['menu-icon']} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? 'times' : 'bars'} />
        </div>
      </div>
    </header>
  );
};

export default Header;
