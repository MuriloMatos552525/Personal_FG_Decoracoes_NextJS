import React, { useState } from 'react';
import Header from '../components/Header'; // Importando o Header
import Footer from '../components/Footer'; // Importando o Footer
import styles from '../styles/contato.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

const ContatoPage: React.FC = () => {
  const whatsappNumber = '5511999999999';
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [tipoProjeto, setTipoProjeto] = useState('');
  const [orcamento, setOrcamento] = useState('');
  const [preferenciaMaterial, setPreferenciaMaterial] = useState('');
  const [prazoEntrega, setPrazoEntrega] = useState('');
  const [usoProduto, setUsoProduto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Gerar a mensagem personalizada
    const mensagemPronta = `
      Olá, meu nome é ${nome}.
      Meu e-mail é ${email}.
      Estou interessado(a) em um projeto ${tipoProjeto}.
      Meu orçamento estimado é ${orcamento}.
      Tenho preferência pelo material ${preferenciaMaterial}.
      Desejo o produto para uso em ${usoProduto}.
      Prazo de entrega desejado: ${prazoEntrega}.
      Mensagem adicional: ${mensagem}.
    `;

    // Redirecionar para o WhatsApp com a mensagem personalizada
    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagemPronta)}`,
      '_blank'
    );
  };

  return (
    <>
      <Header /> {/* Header adicionado */}
      <div className={styles['contato-page']}>
        <h1>Entre em Contato</h1>
        <p>Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.</p>
        <form className={styles['contato-form']} onSubmit={handleFormSubmit}>
          <div className={styles['form-group']}>
            <label htmlFor="nome">Nome</label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="email">E-mail</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="tipoProjeto">Tipo de Projeto</label>
            <select
              id="tipoProjeto"
              value={tipoProjeto}
              onChange={(e) => setTipoProjeto(e.target.value)}
              required
            >
              <option value="">Selecione o tipo de projeto</option>
              <option value="residencial">Residencial</option>
              <option value="comercial">Comercial</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="orcamento">Orçamento Estimado</label>
            <input
              type="text"
              id="orcamento"
              value={orcamento}
              onChange={(e) => setOrcamento(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="preferenciaMaterial">Preferência de Material</label>
            <select
              id="preferenciaMaterial"
              value={preferenciaMaterial}
              onChange={(e) => setPreferenciaMaterial(e.target.value)}
              required
            >
              <option value="">Selecione o material</option>
              <option value="mármore">Mármore</option>
              <option value="granito">Granito</option>
              <option value="quartzito">Quartzito</option>
            </select>
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="prazoEntrega">Prazo de Entrega Desejado</label>
            <input
              type="text"
              id="prazoEntrega"
              value={prazoEntrega}
              onChange={(e) => setPrazoEntrega(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="usoProduto">Como pretende usar o produto?</label>
            <input
              type="text"
              id="usoProduto"
              value={usoProduto}
              onChange={(e) => setUsoProduto(e.target.value)}
              required
            />
          </div>
          <div className={styles['form-group']}>
            <label htmlFor="mensagem">Mensagem Adicional</label>
            <textarea
              id="mensagem"
              value={mensagem}
              onChange={(e) => setMensagem(e.target.value)}
              required
            />
          </div>
          <button type="submit" className={styles['contato-button']}>
            <FontAwesomeIcon icon={faWhatsapp} /> Enviar pelo WhatsApp
          </button>
        </form>
      </div>
      <Footer /> {/* Footer adicionado */}
    </>
  );
};

export default ContatoPage;
