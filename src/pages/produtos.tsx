import React, { useState } from 'react';
import Link from 'next/link';
import { pedras } from '../data';
import styles from '../styles/produtos.module.scss';
import { motion } from 'framer-motion';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ProdutosPage: React.FC = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<string>('Todos');
  const tipos = ['Todos', 'Quartzito', 'Granito', 'Pedra Diversa'];

  const pedrasFiltradas =
    tipoSelecionado === 'Todos'
      ? pedras
      : pedras.filter((p) => p.tipo === tipoSelecionado);

  return (
    <div>
      <Header />
      <section className={styles.produtosPage}>
        <div className={styles.container}>
          <h1>Nossos Produtos</h1>
          <div className={styles.filtroTipos}>
            {tipos.map((tipo) => (
              <button
                key={tipo}
                onClick={() => setTipoSelecionado(tipo)}
                className={tipoSelecionado === tipo ? styles.active : ''}
              >
                {tipo}
              </button>
            ))}
          </div>
          <div className={styles.produtosGrid}>
            {pedrasFiltradas.map((pedra) => (
              <motion.div
                key={pedra.id}
                className={styles.produtoItem}
                whileHover={{ scale: 1.05 }}
              >
                <img src={pedra.imagem} alt={pedra.nome} />
                <h3>{pedra.nome}</h3>
                <p>{pedra.descricao}</p>
                <Link href={`/produto/${pedra.id}`} className={styles.detalhesButton}>
                  Ver Detalhes
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default ProdutosPage;
