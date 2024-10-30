import React, { useState } from 'react';
import Link from 'next/link';
import { pedras } from '../data';
import styles from '../styles/produtos.module.scss';
import { motion } from 'framer-motion';
import Header from '../components/Header'; // Importando o Header
import Footer from '../components/Footer'; // Importando o Footer

const ProdutosPage: React.FC = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<string>('Todos');
  const tipos = ['Todos', 'Quartzito', 'Mármore', 'Granito'];

  const pedrasFiltradas =
    tipoSelecionado === 'Todos'
      ? pedras
      : pedras.filter((p) => p.tipo === tipoSelecionado);

  return (
    <div>
      <Header />
      <div className={styles['produtos-page']}>
        <h1>Nossos Produtos</h1>
        <div className={styles['filtro-tipos']}>
          {tipos.map((tipo) => (
            <button
              key={tipo}
              onClick={() => setTipoSelecionado(tipo)}
              className={tipoSelecionado === tipo ? styles['active'] : ''}
            >
              {tipo}s
            </button>
          ))}
        </div>
        <div className={styles['produtos-grid']}>
          {pedrasFiltradas.map((pedra) => (
            <motion.div
              key={pedra.id}
              className={styles['produto-item']}
              whileHover={{ scale: 1.05 }}
            >
              <img src={pedra.imagem} alt={pedra.nome} />
              <h3>{pedra.nome}</h3>
              <p>{pedra.descricao}</p>
              <Link href={`/produto/${pedra.id}`} className={styles['detalhes-button']}>
                Ver Detalhes
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProdutosPage;
