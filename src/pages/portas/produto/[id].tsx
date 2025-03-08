import React from 'react';
import { useRouter } from 'next/router';
import { produtosPortas } from '../../../data-portas';
import styles from '../../../styles/produtoPortas.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import HeaderPortas from '../../../components/HeaderPortas';
import FooterPortas from '../../../components/FooterPortas';

const ProdutoPortas: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;
  
  const produtoId = parseInt(id as string, 10);
  const produto = produtosPortas.find((p) => p.id === produtoId);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  const whatsappNumber = '5511958258031';
  const mensagem = `Olá, gostaria de saber mais sobre o produto ${produto.nome}.`;

  return (
    <>
      <HeaderPortas />
      <section className={styles.produtoPage}>
        <div className={styles.container}>
          <h1>{produto.nome}</h1>
          <div className={styles.produtoDetalhes}>
            <img
              src={produto.imagem}
              alt={produto.nome}
              className={styles.produtoImagem}
            />
            <div className={styles.produtoInfo}>
              <p>{produto.descricao}</p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.whatsappButton}
              >
                <FontAwesomeIcon icon={faWhatsapp} /> Consultar via WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
      <FooterPortas />
    </>
  );
};

export default ProdutoPortas;
