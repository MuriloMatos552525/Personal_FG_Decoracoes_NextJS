// src/pages/contato.tsx

import React, { useState } from 'react';
import Header from '../components/Header'; // Importando o Header
import Footer from '../components/Footer'; // Importando o Footer
import styles from '../styles/contato.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUser,
  faProjectDiagram,
  faMoneyCheckAlt,
  faClock,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Definindo tipos específicos para evitar o uso de `any`
declare global {
  interface Window {
    gtag: (event: string, action: string, params: Record<string, unknown>) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

const ContatoPage: React.FC = () => {
  const whatsappNumber = '5511958258031'; // Substitua pelo seu número do WhatsApp
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tipoProjeto, setTipoProjeto] = useState<string>('');
  const [orcamento, setOrcamento] = useState<string>('');
  const [preferenciaMaterial, setPreferenciaMaterial] = useState<string>('');
  const [prazoEntrega, setPrazoEntrega] = useState<string>('');
  const [usoProduto, setUsoProduto] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

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

    // Enviar evento de conversão para Google Ads
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-874-215-7856/xxxxxxxxx', // Substitua pelo seu ID de conversão
        value: 1.0,
        currency: 'BRL',
      });
    }

    // Enviar evento personalizado para GTM
    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'formSubmit',
        formName: 'Contato',
      });
    }
  };

  return (
    <>
      <Header /> {/* Header adicionado */}
      <div className={styles['contato-page']}>
        <div className={styles['container']}>
          <h1>Entre em Contato</h1>
          <p>Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.</p>
          <form className={styles['contato-form']} onSubmit={handleFormSubmit}>
            <div className={styles['form-group']}>
              <label htmlFor="nome">
                <FontAwesomeIcon icon={faUser} /> Nome
              </label>
              <input
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Seu nome completo"
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="email">
                <FontAwesomeIcon icon={faEnvelope} /> E-mail
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu e-mail"
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="tipoProjeto">
                <FontAwesomeIcon icon={faProjectDiagram} /> Tipo de Projeto
              </label>
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
              <label htmlFor="orcamento">
                <FontAwesomeIcon icon={faMoneyCheckAlt} /> Orçamento Estimado
              </label>
              <input
                type="text"
                id="orcamento"
                value={orcamento}
                onChange={(e) => setOrcamento(e.target.value)}
                placeholder="Seu orçamento estimado"
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="preferenciaMaterial">
                <FontAwesomeIcon icon={faInfoCircle} /> Preferência de Material
              </label>
              <select
                id="preferenciaMaterial"
                value={preferenciaMaterial}
                onChange={(e) => setPreferenciaMaterial(e.target.value)}
                required
              >
                <option value="">Selecione o material</option>
                <option value="granito">Granito</option>
                <option value="quartzito">Quartzito</option>
                <option value="pedra-diversa">Pedra Diversa</option>
              </select>
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="prazoEntrega">
                <FontAwesomeIcon icon={faClock} /> Prazo de Entrega Desejado
              </label>
              <input
                type="text"
                id="prazoEntrega"
                value={prazoEntrega}
                onChange={(e) => setPrazoEntrega(e.target.value)}
                placeholder="Seu prazo de entrega desejado"
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="usoProduto">
                <FontAwesomeIcon icon={faInfoCircle} /> Como pretende usar o produto?
              </label>
              <input
                type="text"
                id="usoProduto"
                value={usoProduto}
                onChange={(e) => setUsoProduto(e.target.value)}
                placeholder="Ex: Cozinha, Banheiro, etc."
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="mensagem">
                <FontAwesomeIcon icon={faInfoCircle} /> Mensagem Adicional
              </label>
              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                placeholder="Escreva sua mensagem aqui..."
                required
              />
            </div>
            <button type="submit" className={styles['contato-button']}>
              <FontAwesomeIcon icon={faWhatsapp} /> Enviar pelo WhatsApp
            </button>
          </form>
        </div>
      </div>
      <Footer /> {/* Footer adicionado */}
    </>
  );
};

export default ContatoPage;
