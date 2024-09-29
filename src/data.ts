// src/data.ts

export interface Pedra {
    id: number;
    nome: string;
    tipo: 'Quartzito' | 'Mármore' | 'Granito';
    descricao: string;
    imagem: string;
  }
  
  export const pedras: Pedra[] = [
    // Quartzitos Populares no Brasil
    {
      id: 1,
      nome: 'Perla Venata',
      tipo: 'Quartzito',
      descricao: 'Quartzito Perla Venata de alta qualidade.',
      imagem: '/images/quartzitos/perla-venata.jpg',
    },
    {
      id: 2,
      nome: 'Taj Mahal',
      tipo: 'Quartzito',
      descricao: 'Quartzito Taj Mahal com beleza incomparável.',
      imagem: '/images/quartzitos/taj-mahal.jpg',
    },
    {
      id: 3,
      nome: 'Cristallo',
      tipo: 'Quartzito',
      descricao: 'Quartzito Cristallo com transparência única.',
      imagem: '/images/quartzitos/cristallo.jpg',
    },
    {
      id: 4,
      nome: 'Fusion',
      tipo: 'Quartzito',
      descricao: 'Quartzito Fusion com cores vibrantes.',
      imagem: '/images/quartzitos/fusion.jpg',
    },
    {
      id: 5,
      nome: 'Emerald Green',
      tipo: 'Quartzito',
      descricao: 'Quartzito Emerald Green de tonalidade esverdeada.',
      imagem: '/images/quartzitos/emerald-green.jpg',
    },
    {
      id: 6,
      nome: 'Azul Macaubas',
      tipo: 'Quartzito',
      descricao: 'Quartzito Azul Macaubas com tons de azul.',
      imagem: '/images/quartzitos/azul-macaubas.jpg',
    },
    {
      id: 7,
      nome: 'White Macaubas',
      tipo: 'Quartzito',
      descricao: 'Quartzito White Macaubas de elegância branca.',
      imagem: '/images/quartzitos/white-macaubas.jpg',
    },
    {
      id: 8,
      nome: 'Calacatta Quartzite',
      tipo: 'Quartzito',
      descricao: 'Quartzito Calacatta com veios marcantes.',
      imagem: '/images/quartzitos/calacatta-quartzite.jpg',
    },
    {
      id: 9,
      nome: 'Infinity',
      tipo: 'Quartzito',
      descricao: 'Quartzito Infinity com padrão único.',
      imagem: '/images/quartzitos/infinity.jpg',
    },
    {
      id: 10,
      nome: 'Lumix',
      tipo: 'Quartzito',
      descricao: 'Quartzito Lumix com transparência excepcional.',
      imagem: '/images/quartzitos/lumix.jpg',
    },
    {
      id: 11,
      nome: 'Michelangelo',
      tipo: 'Quartzito',
      descricao: 'Quartzito Michelangelo de beleza clássica.',
      imagem: '/images/quartzitos/michelangelo.jpg',
    },
    {
      id: 12,
      nome: 'Macaubas Fantasy',
      tipo: 'Quartzito',
      descricao: 'Quartzito Macaubas Fantasy com veios suaves.',
      imagem: '/images/quartzitos/macaubas-fantasy.jpg',
    },
    {
      id: 13,
      nome: 'Picasso',
      tipo: 'Quartzito',
      descricao: 'Quartzito Picasso com padrões artísticos.',
      imagem: '/images/quartzitos/picasso.jpg',
    },
  
    // Mármores Populares no Brasil
    {
      id: 20,
      nome: 'Branco Pighês',
      tipo: 'Mármore',
      descricao: 'Mármore Branco Pighês de origem nobre.',
      imagem: '/images/marmores/branco-pighes.jpg',
    },
    {
      id: 21,
      nome: 'Carrara',
      tipo: 'Mármore',
      descricao: 'Mármore Carrara clássico e elegante.',
      imagem: '/images/marmores/carrara.jpg',
    },
    {
      id: 22,
      nome: 'Nero Marquina',
      tipo: 'Mármore',
      descricao: 'Mármore Nero Marquina com veios brancos.',
      imagem: '/images/marmores/nero-marquina.jpg',
    },
    {
      id: 23,
      nome: 'Crema Marfil',
      tipo: 'Mármore',
      descricao: 'Mármore Crema Marfil de tons bege.',
      imagem: '/images/marmores/crema-marfil.jpg',
    },
    {
      id: 24,
      nome: 'Travertino',
      tipo: 'Mármore',
      descricao: 'Mármore Travertino com textura única.',
      imagem: '/images/marmores/travertino.jpg',
    },
    {
      id: 25,
      nome: 'Rosso Verona',
      tipo: 'Mármore',
      descricao: 'Mármore Rosso Verona com tons rosados.',
      imagem: '/images/marmores/rosso-verona.jpg',
    },
    {
      id: 26,
      nome: 'Branco Paraná',
      tipo: 'Mármore',
      descricao: 'Mármore Branco Paraná de alta pureza.',
      imagem: '/images/marmores/branco-parana.jpg',
    },
    {
      id: 27,
      nome: 'Calacatta Gold',
      tipo: 'Mármore',
      descricao: 'Mármore Calacatta Gold com veios dourados.',
      imagem: '/images/marmores/calacatta-gold.jpg',
    },
    {
      id: 28,
      nome: 'Estremoz',
      tipo: 'Mármore',
      descricao: 'Mármore Estremoz de tonalidade creme.',
      imagem: '/images/marmores/estremoz.jpg',
    },
    {
      id: 29,
      nome: 'Statuario',
      tipo: 'Mármore',
      descricao: 'Mármore Statuario com veios cinza em fundo branco.',
      imagem: '/images/marmores/statuario.jpg',
    },
    {
      id: 30,
      nome: 'Marrom Imperador',
      tipo: 'Mármore',
      descricao: 'Mármore Marrom Imperador com tons marrons ricos.',
      imagem: '/images/marmores/marrom-imperador.jpg',
    },
  
    // Granitos Populares no Brasil
    {
      id: 40,
      nome: 'Verde Ubatuba',
      tipo: 'Granito',
      descricao: 'Granito Verde Ubatuba resistente e sofisticado.',
      imagem: '/images/granitos/verde-ubatuba.jpg',
    },
    {
      id: 41,
      nome: 'Preto São Gabriel',
      tipo: 'Granito',
      descricao: 'Granito Preto São Gabriel versátil e moderno.',
      imagem: '/images/granitos/preto-sao-gabriel.jpg',
    },
    {
      id: 42,
      nome: 'Giallo Ornamental',
      tipo: 'Granito',
      descricao: 'Granito Giallo Ornamental com tons dourados.',
      imagem: '/images/granitos/giallo-ornamental.jpg',
    },
    {
      id: 43,
      nome: 'Santa Cecilia',
      tipo: 'Granito',
      descricao: 'Granito Santa Cecilia clássico e durável.',
      imagem: '/images/granitos/santa-cecilia.jpg',
    },
    {
      id: 44,
      nome: 'Amarelo Topázio',
      tipo: 'Granito',
      descricao: 'Granito Amarelo Topázio com tonalidades amarelas.',
      imagem: '/images/granitos/amarelo-topazio.jpg',
    },
    {
      id: 45,
      nome: 'Blue Pearl',
      tipo: 'Granito',
      descricao: 'Granito Blue Pearl com reflexos azulados.',
      imagem: '/images/granitos/blue-pearl.jpg',
    },
    {
      id: 46,
      nome: 'Bordeaux',
      tipo: 'Granito',
      descricao: 'Granito Bordeaux com veios intensos.',
      imagem: '/images/granitos/bordeaux.jpg',
    },
    {
      id: 47,
      nome: 'Branco Ceará',
      tipo: 'Granito',
      descricao: 'Granito Branco Ceará de coloração clara.',
      imagem: '/images/granitos/branco-ceara.jpg',
    },
    {
      id: 48,
      nome: 'Via Lactea',
      tipo: 'Granito',
      descricao: 'Granito Via Lactea com veios brancos em fundo preto.',
      imagem: '/images/granitos/via-lactea.jpg',
    },
    {
      id: 49,
      nome: 'Labrador',
      tipo: 'Granito',
      descricao: 'Granito Labrador com reflexos perolados.',
      imagem: '/images/granitos/labrador.jpg',
    },
    {
      id: 50,
      nome: 'Verde Labrador',
      tipo: 'Granito',
      descricao: 'Granito Verde Labrador de tonalidade verde escura.',
      imagem: '/images/granitos/verde-labrador.jpg',
    },
  ];
  