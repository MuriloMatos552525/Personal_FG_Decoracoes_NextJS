// src/pages/produto/[id].tsx

import React from 'react';
import { useRouter } from 'next/router';
import { pedras } from '../../data';
import styles from '../../styles/produto.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ProdutoPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const produtoId = parseInt(id as string);
  const produto = pedras.find((p) => p.id === produtoId);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  const whatsappNumber = '5511999999999';
  const mensagem = `Olá, gostaria de saber mais sobre o produto ${produto.nome}.`;

  return (
    <div className={styles['produto-page']}>
      <h1>{produto.nome}</h1>
      <div className={styles['produto-detalhes']}>
        <img src={produto.imagem} alt={produto.nome} />
        <div className={styles['produto-info']}>
          <p>
            <strong>Tipo:</strong> {produto.tipo}
          </p>
          <p>{produto.descricao}</p>
          <a
            href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              mensagem
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles['whatsapp-button']}
          >
            <FontAwesomeIcon icon={faWhatsapp} /> Consultar via WhatsApp
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProdutoPage;
