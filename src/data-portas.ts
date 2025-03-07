// src/data.ts

export interface ProdutoPortas {
    id: number;
    nome: string;
    tipo: 'Porta' | 'Espelho' | 'Painel' | 'TV' | 'Industrial' | 'Outros';
    descricao: string;
    imagem: string;
  }
  
  export const produtosPortas: ProdutoPortas[] = [
    {
      id: 1,
      nome: 'Porta de Alumínio e Vidro',
      tipo: 'Porta',
      descricao: 'Descubra a perfeita união entre elegância e funcionalidade: nossas portas de alumínio e vidro para móveis oferecem design inovador, alta durabilidade e sofisticação para transformar seus ambientes. Entre em contato para elevar o padrão do seu projeto!',
      imagem: '/images/portas/porta-aluminio-vidro.jpg',
    },
    {
      id: 2,
      nome: 'Espelho Camarim',
      tipo: 'Espelho',
      descricao: 'Destaque seu ambiente com um espelho camarim premium, personalizado com iluminação LED. Feito com materiais de primeira qualidade, ele agrega exclusividade e modernidade para valorizar qualquer espaço.',
      imagem: '/images/portas/espelho-camarim.jpg',
    },
    {
      id: 3,
      nome: 'Painel Movie',
      tipo: 'Painel',
      descricao: 'Inove com o Painel Movie – uma solução contemporânea que une tecnologia e design para criar ambientes únicos e sofisticados. Ideal para quem busca modernidade e funcionalidade sem abrir mão do estilo.',
      imagem: '/images/portas/painel-movie.jpg',
    },
    {
      id: 4,
      nome: 'Porta com TV Acoplada',
      tipo: 'TV',
      descricao: 'Experimente o futuro do entretenimento com nossa porta com TV acoplada, que integra tecnologia e design em um único produto. Praticidade e modernidade para transformar sua sala de estar em um ambiente inovador.',
      imagem: '/images/portas/porta-tv-acoplada.jpg',
    },
    {
      id: 5,
      nome: 'Prateleira Industrial',
      tipo: 'Industrial',
      descricao: 'Adote um visual urbano e contemporâneo com nossa prateleira industrial, que une robustez e design minimalista. Ideal para escritórios, lojas ou residências que buscam um toque de industrial chic com alta funcionalidade.',
      imagem: '/images/portas/prateleira-industrial.jpg',
    },
    {
      id: 6,
      nome: 'Estante Industrial',
      tipo: 'Industrial',
      descricao: 'Nossa estante industrial alia praticidade e design sofisticado, oferecendo uma solução completa para organização e decoração. Perfeita para ambientes que exijam estilo urbano e durabilidade em cada detalhe.',
      imagem: '/images/portas/estante-industrial.jpg',
    },
    {
      id: 7,
      nome: 'Espelho Orgânico com LED',
      tipo: 'Espelho',
      descricao: 'Adicione um toque de exclusividade ao seu ambiente com o espelho orgânico com LED. Seu design diferenciado e iluminação sutil criam uma atmosfera única, ideal para espaços modernos e sofisticados.',
      imagem: '/images/portas/espelho-organico-led.jpg',
    },
    {
      id: 8,
      nome: 'Prateleira Iluminada',
      tipo: 'Industrial',
      descricao: 'Realce seus objetos e crie uma ambientação única com a prateleira iluminada. Com design clean e iluminação integrada, ela é perfeita para lojas, residências e espaços modernos que desejam exalar personalidade e estilo.',
      imagem: '/images/portas/prateleira-iluminada.jpg',
    },
    {
      id: 9,
      nome: 'Divisória de Ambientes',
      tipo: 'Outros',
      descricao: 'Crie espaços versáteis e funcionais com nossa divisória de ambientes, que une design sofisticado e qualidade superior. Ideal para separar ambientes sem perder a harmonia visual e garantir praticidade ao seu projeto.',
      imagem: '/images/portas/divisoria-ambientes.jpg',
    },
  ];
  