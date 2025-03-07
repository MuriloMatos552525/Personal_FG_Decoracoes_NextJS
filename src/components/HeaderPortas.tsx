// src/components/HeaderPortas.tsx

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import styles from '../styles/HeaderPortas.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

const HeaderPortas: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node) && menuOpen) {
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navbarContainer}>
        <div className={styles.logo}>
          <Link href="/portas">
            <img src="/images/portas/logo-portas.png" alt="Portas & Espelhos" />
          </Link>
        </div>

        <nav ref={navRef} className={`${styles.nav} ${menuOpen ? styles.active : ''}`}>
          <ul className={styles.navLinks}>
            <li>
              <Link href="/portas" onClick={closeMenu}>
                Início
              </Link>
            </li>
            <li>
              <Link href="/portas/produtos" onClick={closeMenu}>
                Produtos
              </Link>
            </li>
            <li>
              <Link href="/portas/sobre" onClick={closeMenu}>
                Sobre
              </Link>
            </li>
            <li>
              <Link href="/portas/contato" onClick={closeMenu}>
                Contato
              </Link>
            </li>
          </ul>
        </nav>

        <div className={styles.menuIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={menuOpen ? faTimes : faBars} />
        </div>
      </div>
    </header>
  );
};

export default HeaderPortas;
