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

  const produtoId = parseInt(id as string);
  const produto = pedras.find((p) => p.id === produtoId);

  if (!produto) {
    return <p>Produto não encontrado.</p>;
  }

  const whatsappNumber = '5511999999999';
  const mensagem = `Olá, gostaria de saber mais sobre o produto ${produto.nome}.`;

  return (
    <>
      <Header />
      <div className={styles['produto-page']}>
        <h1>{produto.nome}</h1>
        <div className={styles['produto-detalhes']}>
          <img src={produto.imagem} alt={produto.nome} className={styles['produto-imagem']} />
          <div className={styles['produto-info']}>
            <p>
              <strong>Tipo:</strong> {produto.tipo}
            </p>
            <p>{produto.descricao}</p>

            {/* Novo conteúdo adicional */}
            <h3>Informações Adicionais</h3>
            <p>
              <strong>Uso Recomendado:</strong> {produto.usoRecomendado}
            </p>
            <p>
              <strong>Cuidados:</strong> {produto.cuidados}
            </p>
            <p>
              <strong>Características:</strong> {produto.caracteristicas}
            </p>
            <p>
              <strong>Peso:</strong> {produto.peso}
            </p>
            <p>
              <strong>Dimensões:</strong> {produto.dimensoes}
            </p>

            {/* Botão de WhatsApp */}
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`}
              target="_blank"
              rel="noopener noreferrer"
              className={styles['whatsapp-button']}
            >
              <FontAwesomeIcon icon={faWhatsapp} /> Consultar via WhatsApp
            </a>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default ProdutoPage;
