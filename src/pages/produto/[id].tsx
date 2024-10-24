import React from 'react';
import { useRouter } from 'next/router';
import { pedras } from '../../data';
import styles from '../../styles/produto.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const ProdutoPage: React.FC = () => {
  const router = useRouter();
  const { id } = router.query;

  const produtoId = parseInt(id as string, 10);
  const produto = pedras.find((p) => p.id === produtoId);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  const whatsappNumber = '5511958258031';
  const mensagem = `Olá, gostaria de saber mais sobre o produto ${produto.nome}.`;

  return (
    <>
      <Header />
      <section className={styles.produtoPage}>
        <div className={styles.container}>
          <h1>{produto.nome}</h1>
          <div className={styles.produtoDetalhes}>
            <img src={produto.imagem} alt={produto.nome} className={styles.produtoImagem} />
            <div className={styles.produtoInfo}>
              <p><strong>Tipo:</strong> {produto.tipo}</p>
              <p>{produto.descricao}</p>

              {/* Informações Adicionais */}
              <h3>Informações Adicionais</h3>
              <p><strong>Uso Recomendado:</strong> {produto.usoRecomendado}</p>
              <p><strong>Cuidados:</strong> {produto.cuidados}</p>
              <p><strong>Características:</strong> {produto.caracteristicas}</p>
              <p><strong>Peso:</strong> {produto.peso}</p>
              <p><strong>Dimensões:</strong> {produto.dimensoes}</p>

              {/* Botão de WhatsApp */}
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
      <Footer />
    </>
  );
};

export default ProdutoPage;
