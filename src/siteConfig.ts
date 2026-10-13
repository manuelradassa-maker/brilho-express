// ============================================================
// Brilho & Mudanças Express — Configuração Central do Negócio
// Edite apenas este ficheiro para atualizar dados do site
// ============================================================

export const siteConfig = {
  // Identidade
  name: "Brilho & Mudanças Express",
  shortName: "Brilho Express",
  tagline: "Limpezas pós-obra e mudanças em 24h",
  description:
    "Limpezas pós-obra e mudanças residenciais/comerciais em Sintra e Lisboa. Equipa própria, orçamento gratis e serviço em 24h.",

  // Contacto
  phone: "+351910000000", // SUBSTITUIR pelo número real
  phoneDisplay: "910 000 000",
  whatsapp: "351910000000", // SUBSTITUIR pelo número real (com código de país, sem +)
  whatsappDisplay: "910 000 000",

  // Morada
  address: "Sintra, Lisboa, Portugal",
  city: "Sintra",
  region: "Lisboa",
  mapQuery: "Brilho+Express+Sintra",

  // Horário
  hours: "Seg-Sáb, 08:00-20:00",
  hoursDetail: [
    { day: "Segunda a Sexta", time: "08:00 - 20:00" },
    { day: "Sábado", time: "08:00 - 20:00" },
    { day: "Urgências", time: "Por WhatsApp" },
  ],

  // Serviços
  services: [
    {
      icon: "Sparkles",
      title: "Limpeza Pós-Obra",
      description:
        "Remoção de pó, resíduos de tinta e cimento, limpeza de vidros, cozinhas e casas de banho. Deixamos o espaço impecável para entregar chaves.",
    },
    {
      icon: "Home",
      title: "Limpeza Profunda",
      description:
        "Limpeza detalhada de casas e apartamentos. Ideal para quem recebe ou entrega chaves com tudo em perfeito estado.",
    },
    {
      icon: "Building2",
      title: "Limpeza Comercial",
      description:
        "Escritórios, lojas e clínicas limpos fora do horário de funcionamento, sem parar a sua atividade.",
    },
    {
      icon: "Truck",
      title: "Mudança Residencial",
      description:
        "Transporte, carga e descarga com proteção dos seus móveis. Mudança feita em meio dia, sem um arranhão.",
    },
    {
      icon: "Briefcase",
      title: "Mudança Comercial",
      description:
        "Escritórios e lojas com planeamento e mínimo tempo parado. Gerimos tudo para si.",
    },
    {
      icon: "Wrench",
      title: "Montagem e Desmontagem",
      description:
        "Montagem e desmontagem de móveis, embalagem e transporte de pequenas cargas. Serviço completo.",
    },
  ],

  // Testemunhos
  testimonials: [
    {
      name: "Marta S.",
      location: "Sintra",
      service: "Limpeza pós-obra",
      rating: 5,
      text: "Fiz obras no apartamento e pensei que o pó nunca ia desaparecer. Vieram no dia seguinte e deixaram tudo impecável.",
    },
    {
      name: "Ricardo A.",
      location: "Lisboa",
      service: "Mudança residencial",
      rating: 5,
      text: "Mudança de um T2 feita em meio dia, sem um arranhão nos móveis. Equipa simpática e pontual.",
    },
    {
      name: "Ana P.",
      location: "Amadora",
      service: "Limpeza profunda",
      rating: 5,
      text: "Pedi orçamento ao fim da tarde pelo WhatsApp e tive resposta em minutos. Preço justo e trabalho excelente.",
    },
  ],

  // Zonas servidas
  zones: ["Sintra", "Lisboa", "Cascais", "Amadora", "Oeiras"],

  // Indicadores
  stats: [
    { value: "24h", label: "Resposta e execução" },
    { value: "+500", label: "Serviços concluídos" },
    { value: "100%", label: "Orçamento gratis" },
    { value: "5.0", label: "Avaliação no Google" },
  ],

  // Links sociais
  googleMapsUrl: "https://www.google.com/maps?q=Brilho+Express+Sintra",
  googleMapsEmbed: "https://www.google.com/maps?q=Brilho+Express+Sintra&output=embed",

  // SEO
  seo: {
    title: "Limpezas Pós-Obra e Mudanças em Sintra e Lisboa | Brilho & Mudanças Express",
    description:
      "Limpezas pós-obra e mudanças residenciais e comerciais em Sintra e Lisboa. Orçamento gratis, equipa própria, serviço em 24h. Peça já pelo WhatsApp.",
    keywords:
      "limpeza pós-obra, mudanças, limpeza profunda, Sintra, Lisboa, orçamento gratis, 24h, equipa própria",
  },
}

export default siteConfig