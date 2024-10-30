import React from 'react';
import Slider from 'react-slick';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from '../styles/index.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInfoCircle, faPhone, faStar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';
import { pedras } from '../data';

const products = pedras.filter((pedra) => pedra.tipo === 'Pedra Diversa').slice(0, 4);
const trends = pedras.filter((pedra) => pedra.tipo === 'Quartzito').slice(0, 5);

const testimonials = [
  { id: 1, name: 'João Silva', feedback: 'A FG Decorações transformou minha casa com pedras de alta qualidade!' },
  { id: 2, name: 'Maria Souza', feedback: 'Excelente atendimento e produtos de primeira linha. Recomendo!' },
  { id: 3, name: 'Carlos Oliveira', feedback: 'Profissionalismo e dedicação em cada detalhe do projeto.' },
];

const whatsappNumber = '5511958258031';
const whatsappLink = `https://wa.me/${whatsappNumber}?text=Olá, gostaria de mais informações sobre seus produtos!`;

const HomePage: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
  };

  return (
    <div>
      <Header />

{/* Seção Hero com Imagem de Fundo */}
<section id="home" className={styles.heroSection}>
        <img src="/images/stone-background.jpg" alt="Background de Pedra" className={styles.backgroundImage} />
        <div className={styles.heroContent}>
          <motion.h1
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className={styles.heroTitle}
          >
            Realize Projetos Únicos com Pedras Naturais Exclusivas
          </motion.h1>
          <motion.p
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className={styles.heroSubtitle}
          >
            No Grupo FG Decorações, oferecemos uma seleção premium de mármores e granitos que elevam a sofisticação e durabilidade de qualquer projeto.
          </motion.p>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5, delay: 1 }}
            className={styles.heroButtonWrapper}
          >
            <a href={whatsappLink} target="_blank" className={styles.ctaButton} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> Fale Conosco no WhatsApp
              <FontAwesomeIcon icon={faArrowRight} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* Seção de Destaque para Pedra São Tomé */}
      <section className={styles.saoTomeSection}>
        <div className={styles.container}>
          <h2>Pedra São Tomé</h2>
          <div className={styles.saoTomeContent}>
            <img src="/images/pedras/pedra-sao-tome.jpg" alt="Pedra São Tomé" className={styles.saoTomeImage} />
            <div className={styles.saoTomeInfo}>
              <p>
                A Pedra São Tomé é nossa mais vendida, reconhecida por sua beleza única, durabilidade excepcional e versatilidade em diversos projetos de arquitetura e design de interiores.
              </p>
              <ul className={styles.saoTomeFeatures}>
                <li><FontAwesomeIcon icon={faStar} className={styles.starIcon} /> Alta durabilidade</li>
                <li><FontAwesomeIcon icon={faStar} className={styles.starIcon} /> Variedade de acabamentos</li>
                <li><FontAwesomeIcon icon={faStar} className={styles.starIcon} /> Estética sofisticada</li>
              </ul>
              <Link href="/produto/7" className={styles.detailsButton}>
                Saiba Mais
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Seção de Serviços */}
      <section id="services" className={styles.servicesSection}>
        <div className={styles.container}>
          <h2>Nossos Serviços Exclusivos</h2>
          <p className={styles.servicesDescription}>
            Descubra como a FG Decorações pode ajudar a transformar seu ambiente com pedras naturais cuidadosamente selecionadas.
          </p>
          <div className={styles.servicesContainer}>
            <motion.div className={styles.serviceItem} whileHover={{ scale: 1.05 }}>
              <FontAwesomeIcon icon={faInfoCircle} size="3x" className={styles.serviceIcon} />
              <h3>Consultoria Personalizada</h3>
              <p>Receba orientação especializada para escolher as pedras que melhor se adequam ao seu projeto, garantindo resultados impecáveis.</p>
            </motion.div>
            <motion.div className={styles.serviceItem} whileHover={{ scale: 1.05 }}>
              <FontAwesomeIcon icon={faPhone} size="3x" className={styles.serviceIcon} />
              <h3>Atendimento Sob Medida</h3>
              <p>Nosso atendimento é focado em atender suas necessidades de forma única, garantindo uma experiência de compra diferenciada.</p>
            </motion.div>
            <motion.div className={styles.serviceItem} whileHover={{ scale: 1.05 }}>
              <FontAwesomeIcon icon={faWhatsapp} size="3x" className={styles.serviceIcon} />
              <h3>Suporte Contínuo</h3>
              <p>Estamos com você em todas as etapas do projeto, do planejamento à instalação, oferecendo suporte contínuo e imediato.</p>
            </motion.div>
          </div>
          <div className={styles.whatsappContact}>
            <a href={whatsappLink} target="_blank" className={styles.whatsappButton} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> Consulte-nos pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Produtos com Efeito de Hover */}
      <section id="products" className={styles.productsSection}>
        <div className={styles.container}>
          <h2>Produtos em Destaque</h2>
          <p className={styles.productsDescription}>
            Conheça nossas pedras naturais mais procuradas, perfeitas para dar o toque final de elegância ao seu projeto.
          </p>
          <div className={styles.productItems}>
            {products.map((product) => (
              <motion.div key={product.id} className={styles.productItem} whileHover={{ scale: 1.05 }}>
                <img src={product.imagem} alt={product.nome} className={styles.productImage} />
                <h3>{product.nome}</h3>
                <p>{product.descricao}</p>
                <Link href={`/produto/${product.id}`} className={styles.detailsButton}>
                  Saiba Mais
                </Link>
              </motion.div>
            ))}
          </div>
          <div className={styles.whatsappContact}>
            <Link href="/produtos" className={styles.whatsappButton}>
              Ver Todos os Produtos
            </Link>
          </div>
        </div>
      </section>

      {/* Seção de Tendências */}
      <section className={styles.trendsSection}>
        <div className={styles.container}>
          <h2>Tendências em Pedras Naturais</h2>
          <p className={styles.trendsDescription}>
            Explore as pedras mais procuradas e descubra as últimas tendências que estão dominando o mercado de decoração de interiores.
          </p>
          <div className={styles.trendItems}>
            {trends.map((trend) => (
              <motion.div key={trend.id} className={styles.trendItem} whileHover={{ scale: 1.05 }}>
                <img src={trend.imagem} alt={trend.nome} className={styles.trendImage} />
                <h3>{trend.nome}</h3>
                <p>{trend.descricao}</p>
                <Link href={`/produto/${trend.id}`} className={styles.detailsButton}>
                  Saiba Mais
                </Link>
              </motion.div>
            ))}
          </div>
          <div className={styles.whatsappContact}>
            <a href={whatsappLink} target="_blank" className={styles.whatsappButton} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> Solicite Mais Informações via WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Projetos com Efeito Parallax */}
      <section id="projects" className={styles.projectsSection}>
        <div className={styles.container}>
          <h2>Projetos de Destaque</h2>
          <p className={styles.projectsDescription}>
            Veja como nossos clientes transformaram seus espaços com as pedras naturais da FG Decorações.
          </p>
          <Slider {...settings}>
            <div className={styles.projectItem}>
              <img src="/images/projeto-1.jpg" alt="Projeto 1" className={styles.projectImage} />
              <h3>Piso de piscina com Pedra Serrada</h3>
            </div>
            <div className={styles.projectItem}>
              <img src="/images/projeto-2.jpg" alt="Projeto 2" className={styles.projectImage} />
              <h3>Banheiro com Pedra Atacama</h3>
            </div>
            <div className={styles.projectItem}>
              <img src="/images/projeto-3.jpg" alt="Projeto 3" className={styles.projectImage} />
              <h3>Quarto com pedra pé de moleque</h3>
            </div>
          </Slider>
          <div className={styles.whatsappContact}>
            <a href={whatsappLink} target="_blank" className={styles.whatsappButton} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> Fale com a Gente Agora pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Depoimentos */}
      <section className={styles.testimonialsSection}>
        <div className={styles.container}>
          <h2>O Que Nossos Clientes Dizem</h2>
          <Slider {...settings}>
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className={styles.testimonialItem}>
                <p>"{testimonial.feedback}"</p>
                <h4>- {testimonial.name}</h4>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* Seção de Contato */}
      <section id="contact" className={styles.contactSection}>
        <div className={styles.container}>
          <h2>Entre em Contato Conosco</h2>
          <p className={styles.contactDescription}>
            Quer saber mais? Preencha o formulário abaixo ou fale diretamente pelo WhatsApp!
          </p>
          <form className={styles.contactForm}>
            <input type="text" placeholder="Nome" required />
            <input type="email" placeholder="Email" required />
            <textarea placeholder="Mensagem" required></textarea>
            <button type="submit">Enviar Mensagem</button>
          </form>
          <div className={styles.whatsappContact}>
            <a href={whatsappLink} target="_blank" className={styles.whatsappButton} rel="noopener noreferrer">
              <FontAwesomeIcon icon={faWhatsapp} /> Fale Conosco pelo WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />

      {/* Botão flutuante de WhatsApp */}
      <a href={whatsappLink} target="_blank" className={styles.whatsappFloating} rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default HomePage;
