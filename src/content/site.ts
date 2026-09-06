export const site = {
  name: "CerraVolt",
  type: "Cerrajería y Electricidad",
  slogan: "Tu tranquilidad, nuestro compromiso",
  flourish: "Alicante siempre conectado",
  tagline: "Soluciones que abren tu día",
  locale: "es-ES",
  province: "Alicante",
  country: "ES",
  phoneDisplay: "644 098 546",
  phoneTel: "+34644098546",
  whatsapp: "https://wa.me/34644098546",
  repo: "https://github.com/LucasOU21/CerraVoltAlicante",
  seo: {
    title: "CerraVolt | Cerrajero y electricista en Alicante 24h",
    description:
      "Cerrajería y electricidad en Alicante. Apertura de puertas, reparación de cerraduras, instalaciones y averías eléctricas. Llama o escribe por WhatsApp al 644 098 546.",
    keywords: [
      "cerrajero Alicante",
      "electricista Alicante",
      "cerrajería Alicante",
      "apertura de puertas Alicante",
      "cerrajero 24 horas Alicante",
      "averías eléctricas Alicante",
      "instalaciones eléctricas Alicante",
      "CerraVolt",
    ],
  },
  nav: [
    { href: "#servicios", label: "Servicios" },
    { href: "#confianza", label: "Por qué nosotros" },
    { href: "#preguntas", label: "Preguntas" },
    { href: "#contacto", label: "Contacto" },
  ],
  services: [
    {
      id: "apertura",
      title: "Apertura de puertas",
      lead: "Cerrajería",
      text: "Si te has quedado fuera, acudimos a abrir sin destrozar la puerta siempre que sea posible. Viviendas, portales y locales en Alicante.",
    },
    {
      id: "cerraduras",
      title: "Reparación de cerraduras",
      lead: "Cerrajería",
      text: "Cilindros que fallan, llaves que no giran o cerraduras que hay que cambiar. Dejamos la puerta segura y usable el mismo día.",
    },
    {
      id: "instalaciones",
      title: "Instalaciones eléctricas",
      lead: "Electricidad",
      text: "Puntos de luz, cuadros, tomas y mejoras en vivienda o local. Trabajo limpio, explicado y acorde a la normativa.",
    },
    {
      id: "averias",
      title: "Averías eléctricas",
      lead: "Electricidad",
      text: "Cortes, diferenciales que saltan, enchufes muertos o luz intermitente. Localizamos el fallo y lo dejamos resuelto.",
    },
  ],
  trust: [
    {
      title: "Servicio 24 horas",
      text: "Urgencias de cerradura o electricidad cuando no puedes esperar al día siguiente.",
    },
    {
      title: "Confianza",
      text: "Te decimos qué vamos a hacer y cuánto cuesta antes de tocar nada.",
    },
    {
      title: "Soluciones integrales",
      text: "Cerrajería y electricidad en la misma llamada. Un interlocutor, un desplazamiento.",
    },
    {
      title: "Particulares y empresas",
      text: "Casas, comunidades, comercios y locales. Mismo trato directo en Alicante.",
    },
  ],
  faqs: [
    {
      q: "¿Atendéis urgencias por la noche o en festivo?",
      a: "Sí. El servicio de cerrajería y electricidad está disponible las 24 horas. Llama o escribe por WhatsApp al 644 098 546 y te confirmamos la llegada.",
    },
    {
      q: "¿Abrís la puerta sin romperla?",
      a: "Siempre que el tipo de cerradura lo permita, abrimos sin dañar la puerta ni el marco. Si hay que sustituir el cilindro, te lo decimos antes de hacerlo.",
    },
    {
      q: "¿Trabajáis solo en la ciudad de Alicante?",
      a: "Damos servicio en Alicante y la provincia. Indica tu zona por WhatsApp y te decimos si podemos ir y en cuánto tiempo.",
    },
    {
      q: "¿También hacéis electricidad, no solo cerrajería?",
      a: "Sí. CerraVolt une los dos oficios: apertura y cerraduras, e instalaciones o averías eléctricas. Así no tienes que llamar a dos empresas distintas.",
    },
    {
      q: "¿Cómo pido presupuesto?",
      a: "La forma más rápida es WhatsApp o una llamada. Cuéntanos el problema (puerta bloqueada, corte de luz, cuadro que salta…) y te orientamos sin compromiso.",
    },
  ],
  map: {
    title: "Alicante",
    caption: "Servicio en la ciudad y la provincia. Sin cita previa para urgencias.",
    embed:
      "https://www.openstreetmap.org/export/embed.html?bbox=-0.55%2C38.32%2C-0.42%2C38.38&layer=mapnik&marker=38.34517%2C-0.48149",
    link: "https://www.openstreetmap.org/?mlat=38.34517&mlon=-0.48149#map=13/38.3452/-0.4815",
  },
} as const;

export type SiteConfig = typeof site;
