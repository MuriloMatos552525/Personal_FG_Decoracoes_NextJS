import React, { useState } from 'react';
import Link from 'next/link';
import { produtosPortas } from '../../data-portas';
import styles from '../../styles/produtosPortas.module.scss';
import { motion } from 'framer-motion';
import HeaderPortas from '../../components/HeaderPortas';
import FooterPortas from '../../components/FooterPortas';

const ProdutosPortas: React.FC = () => {
  const [tipoSelecionado, setTipoSelecionado] = useState<string>('Todos');
  const tipos = ['Todos', 'Porta', 'Espelho', 'Outros'];

  const produtosFiltrados =
    tipoSelecionado === 'Todos'
      ? produtosPortas
      : produtosPortas.filter((p) => p.tipo === tipoSelecionado);

  return (
    <div>
      <HeaderPortas />
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
            {produtosFiltrados.map((produto) => (
              <motion.div
                key={produto.id}
                className={styles.produtoItem}
                whileHover={{ scale: 1.05 }}
              >
                <img src={produto.imagem} alt={produto.nome} />
                <h3>{produto.nome}</h3>
                <p>{produto.descricao}</p>
                <Link href={`/portas/produto/${produto.id}`} className={styles.detalhesButton}>
                  Ver Detalhes
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      <FooterPortas />
    </div>
  );
};

export default ProdutosPortas;
