import React, { useState } from 'react';
import Header from '../../components/HeaderPortas';
import Footer from '../../components/FooterPortas';
import styles from '../../styles/contatoPortas.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faUser,
  faClipboardList,
  faMoneyCheckAlt,
  faClock,
  faInfoCircle,
} from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

// Definindo tipos para evitar o uso de "any"
declare global {
  interface Window {
    gtag: (event: string, action: string, params: Record<string, unknown>) => void;
    dataLayer: Array<Record<string, unknown>>;
  }
}

const ContatoPortas: React.FC = () => {
  const whatsappNumber = '5511958258031';
  const [nome, setNome] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [tipoProjeto, setTipoProjeto] = useState<string>('');
  const [orcamento, setOrcamento] = useState<string>('');
  const [preferenciaAcabamento, setPreferenciaAcabamento] = useState<string>('');
  const [prazoEntrega, setPrazoEntrega] = useState<string>('');
  const [ambiente, setAmbiente] = useState<string>('');
  const [mensagem, setMensagem] = useState<string>('');

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Gerar mensagem personalizada para Portas & Espelhos
    const mensagemPronta = `
      Olá, meu nome é ${nome}.
      Meu e-mail é ${email}.
      Estou interessado(a) em um projeto ${tipoProjeto} para Portas & Espelhos.
      Meu orçamento estimado é ${orcamento}.
      Prefiro o acabamento ${preferenciaAcabamento}.
      O produto será instalado em: ${ambiente}.
      Prazo de entrega desejado: ${prazoEntrega}.
      Mensagem adicional: ${mensagem}.
    `;

    window.open(
      `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagemPronta)}`,
      '_blank'
    );

    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('event', 'conversion', {
        send_to: 'AW-874-215-7856/xxxxxxxxx',
        value: 1.0,
        currency: 'BRL',
      });
    }

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'formSubmit',
        formName: 'ContatoPortas',
      });
    }
  };

  return (
    <>
      <Header />
      <div className={styles['contato-page']}>
        <div className={styles.container}>
          <h1>Fale Conosco</h1>
          <p>
            Preencha o formulário e nossa equipe especializada em Portas &amp; Espelhos entrará em contato.
          </p>
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
                <FontAwesomeIcon icon={faClipboardList} /> Tipo de Projeto
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
                <option value="personalizado">Personalizado</option>
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
              <label htmlFor="preferenciaAcabamento">
                <FontAwesomeIcon icon={faInfoCircle} /> Acabamento Desejado
              </label>
              <select
                id="preferenciaAcabamento"
                value={preferenciaAcabamento}
                onChange={(e) => setPreferenciaAcabamento(e.target.value)}
                required
              >
                <option value="">Selecione o acabamento</option>
                <option value="vidro-acrilico">Vidro Acrílico</option>
                <option value="vidro-tempered">Vidro Temperado</option>
                <option value="aluminio-polido">Alumínio Polido</option>
              </select>
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="prazoEntrega">
                <FontAwesomeIcon icon={faClock} /> Prazo de Entrega
              </label>
              <input
                type="text"
                id="prazoEntrega"
                value={prazoEntrega}
                onChange={(e) => setPrazoEntrega(e.target.value)}
                placeholder="Prazo estimado"
                required
              />
            </div>
            <div className={styles['form-group']}>
              <label htmlFor="ambiente">
                <FontAwesomeIcon icon={faInfoCircle} /> Ambiente de Instalação
              </label>
              <input
                type="text"
                id="ambiente"
                value={ambiente}
                onChange={(e) => setAmbiente(e.target.value)}
                placeholder="Ex: Sala, Cozinha, Escritório, etc."
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
      <Footer />
    </>
  );
};

export default ContatoPortas;
