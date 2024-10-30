import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Header from '../components/Header'; // Importando o Header
import Footer from '../components/Footer'; // Importando o Footer
import styles from '../styles/index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInfoCircle, faPhone } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';

// Importando os dados das pedras
import { pedras } from '../data'; // Certifique-se de que o caminho está correto

// Selecionando produtos em destaque (por exemplo, os primeiros 4 quartzitos)
const products = pedras.filter((pedra) => pedra.tipo === 'Quartzito').slice(0, 4);

// Selecionando tendências (por exemplo, os primeiros 5 mármores)
const trends = pedras.filter((pedra) => pedra.tipo === 'Mármore').slice(0, 5);

// Dados dos depoimentos (mantidos como antes)
const testimonials = [
  { id: 1, name: 'João Silva', feedback: 'A FG Decorações transformou minha casa com pedras de alta qualidade!' },
  { id: 2, name: 'Maria Souza', feedback: 'Excelente atendimento e produtos de primeira linha. Recomendo!' },
  { id: 3, name: 'Carlos Oliveira', feedback: 'Profissionalismo e dedicação em cada detalhe do projeto.' },
];

// Número de WhatsApp para ser usado em todos os botões
const whatsappNumber = '5511999999999';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações sobre seus produtos!`;

const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Header />

      {/* Seção Hero com Vídeo de Fundo e Parallax */}
      <section id="home" className={styles['hero-section']}>
        <video autoPlay loop muted className={styles['background-video']}>
          <source src="/videos/stone-background.mp4" type="video/mp4" />
        </video>
        <div className={styles['hero-content']}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            Realize Projetos Únicos com Pedras Naturais Exclusivas
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            No Grupo FG Decorações, oferecemos uma seleção premium de mármores e granitos que elevam a sofisticação e durabilidade de qualquer projeto.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
          >
            <a href={whatsappLink} target="_blank" className={styles['cta-button']} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> Fale Conosco no WhatsApp
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className={styles['services-section']}>
        <h2>Nossos Serviços Exclusivos</h2>
        <p className={styles['services-description']}>
          Descubra como a FG Decorações pode ajudar a transformar seu ambiente com pedras naturais cuidadosamente selecionadas.
        </p>
        <div className={styles['services-container']}>
          <motion.div className={styles['service-item']} whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faInfoCircle} size="3x" />
            <h3>Consultoria Personalizada</h3>
            <p>Receba orientação especializada para escolher as pedras que melhor se adequam ao seu projeto, garantindo resultados impecáveis.</p>
          </motion.div>
          <motion.div className={styles['service-item']} whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faPhone} size="3x" />
            <h3>Atendimento Sob Medida</h3>
            <p>Nosso atendimento é focado em atender suas necessidades de forma única, garantindo uma experiência de compra diferenciada.</p>
          </motion.div>
          <motion.div className={styles['service-item']} whileHover={{ scale: 1.05 }}>
            <FontAwesomeIcon icon={faWhatsapp} size="3x" />
            <h3>Suporte Contínuo</h3>
            <p>Estamos com você em todas as etapas do projeto, do planejamento à instalação, oferecendo suporte contínuo e imediato.</p>
          </motion.div>
        </div>
        <div className={styles['whatsapp-contact']}>
          <a href={whatsappLink} target="_blank" className={styles['whatsapp-button']} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> Consulte-nos pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Seção de Produtos com Efeito de Hover */}
      <section id="products" className={styles['products-section']}>
        <h2>Produtos em Destaque</h2>
        <p className={styles['products-description']}>
          Conheça nossas pedras naturais mais procuradas, perfeitas para dar o toque final de elegância ao seu projeto.
        </p>
        <div className={styles['product-items']}>
          {products.map((product) => (
            <motion.div key={product.id} className={styles['product-item']} whileHover={{ scale: 1.05 }}>
              <img src={product.imagem} alt={product.nome} />
              <h3>{product.nome}</h3>
              <p>{product.descricao}</p>
              <Link href={`/produto/${product.id}`}>
                <button className={styles['detalhes-button']}>Saiba Mais</button>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className={styles['whatsapp-contact']}>
          <Link href="/produtos">
            <button className={styles['whatsapp-button']}>Ver Todos os Produtos</button>
          </Link>
        </div>
      </section>

      {/* Seção de Tendências */}
      <section className={styles['trends-section']}>
        <h2>Tendências em Pedras Naturais</h2>
        <p className={styles['trends-description']}>
          Explore as pedras mais procuradas e descubra as últimas tendências que estão dominando o mercado de decoração de interiores.
        </p>
        <div className={styles['trend-items']}>
          {trends.map((trend) => (
            <motion.div key={trend.id} className={styles['trend-item']} whileHover={{ scale: 1.05 }}>
              <img src={trend.imagem} alt={trend.nome} />
              <h3>{trend.nome}</h3>
              <p>{trend.descricao}</p>
              <Link href={`/produto/${trend.id}`}>
                <button className={styles['detalhes-button']}>Saiba Mais</button>
              </Link>
            </motion.div>
          ))}
        </div>
        <div className={styles['whatsapp-contact']}>
          <a href={whatsappLink} target="_blank" className={styles['whatsapp-button']} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> Solicite Mais Informações via WhatsApp
          </a>
        </div>
      </section>

      {/* Seção de Projetos com Efeito Parallax */}
      <section id="projects" className={styles['projects-section']}>
        <h2>Projetos de Destaque</h2>
        <p className={styles['projects-description']}>
          Veja como nossos clientes transformaram seus espaços com as pedras naturais da FG Decorações.
        </p>
        <Slider {...settings}>
          <div className={styles['project-item']}>
            <img src="/images/projeto-1.jpg" alt="Projeto 1" />
            <h3>Residência com Mármore Carrara</h3>
          </div>
          <div className={styles['project-item']}>
            <img src="/images/projeto-2.jpg" alt="Projeto 2" />
            <h3>Área Gourmet com Pedra Goiás</h3>
          </div>
          <div className={styles['project-item']}>
            <img src="/images/projeto-3.jpg" alt="Projeto 3" />
            <h3>Piscina com Quartzito Azul</h3>
          </div>
        </Slider>
        <div className={styles['whatsapp-contact']}>
          <a href={whatsappLink} target="_blank" className={styles['whatsapp-button']} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> Fale com a Gente Agora pelo WhatsApp
          </a>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className={styles['testimonials-section']}>
        <h2>O Que Nossos Clientes Dizem</h2>
        <Slider {...settings}>
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className={styles['testimonial-item']}>
              <p>"{testimonial.feedback}"</p>
              <h4>- {testimonial.name}</h4>
            </div>
          ))}
        </Slider>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className={styles['contact-section']}>
        <h2>Entre em Contato Conosco</h2>
        <p className={styles['contact-description']}>
          Quer saber mais? Preencha o formulário abaixo ou fale diretamente pelo WhatsApp!
        </p>
        <form className={styles['contact-form']}>
          <input type="text" placeholder="Nome" required />
          <input type="email" placeholder="Email" required />
          <textarea placeholder="Mensagem" required></textarea>
          <button type="submit">Enviar Mensagem</button>
        </form>
        <div className={styles['whatsapp-contact']}>
          <a href={whatsappLink} target="_blank" className={styles['whatsapp-button']} rel="noopener noreferrer">
            <FontAwesomeIcon icon={faWhatsapp} /> Fale Conosco pelo WhatsApp
          </a>
        </div>
      </section>

      <Footer />

      {/* Botão flutuante de WhatsApp */}
      <a href={whatsappLink} target="_blank" className={styles['whatsapp-floating']} rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default HomePage;
