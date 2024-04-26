import {
    benefitIcon1,
    benefitIcon2,
    benefitIcon3,
    benefitIcon4,
    benefitImage2,
    chromecast,
    disc02,
    discord,
    discordBlack,
    facebook,
    figma,
    file02,
    framer,
    homeSmile,
    instagram,
    notification2,
    notification3,
    notification4,
    notion,
    photoshop,
    plusSquare,
    protopie,
    raindrop,
    recording01,
    recording03,
    roadmap1,
    roadmap2,
    roadmap3,
    roadmap4,
    searchMd,
    slack,
    sliders04,
    telegram,
    twitter,
    yourlogo,
  } from "../assets";
  
  export const navigation = [
    {
      id: "0",
      title: "Testimonios",
      url: "#features",
    },
    {
      id: "1",
      title: "Precios",
      url: "#pricing",
    },
    {
      id: "2",
      title: "Plan Nutricional",
      url: "#how-to-use",
    },
    {
      id: "3",
      title: "Test Nutricional",
      url: "#roadmap",
    },
    {
      id: "4",
      title: "Registrarse",
      url: "#signup",
      onlyMobile: true,
    },
    {
      id: "5",
      title: "Inicio Sesion",
      url: "#login",
      onlyMobile: true,
    },
  ];
  
  export const heroIcons = [homeSmile, file02, searchMd, plusSquare];
  
  export const notificationImages = [notification4, notification3, notification2];
  
  export const companyLogos = [yourlogo, yourlogo, yourlogo, yourlogo, yourlogo];
  
  export const brainwaveServices = [
    "Acceso a Nutricionistas",
    "Recursos Educativos",
    "Evaluacion Personalizada",
  ];
  
  export const brainwaveServicesIcons = [
    recording03,
    recording01,
    disc02,
    chromecast,
    sliders04,
  ];
  
  export const roadmap = [
    {
      id: "0",
      title: "Acceso a un nutricionista",
      text: "Tendrás acceso directo a un nutricionista para consultas, seguimiento y apoyo continuo.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap1,
      colorful: true,
    },
    {
      id: "1",
      title: "Planes de alimentación personalizados",
      text: "Recibirás menús semanales con recetas deliciosas y nutritivas que se ajustan a tus preferencias y restricciones.",      date: "May 2023",
      status: "progress",
      imageUrl: roadmap2,
    },
    {
      id: "2",
      title: "Recursos educativos",
      text: "Te proporcionamos información y herramientas para ayudarte a comprender mejor la nutrición y mejorar tus hábitos alimenticios.",
      date: "May 2023",
      status: "done",
      imageUrl: roadmap3,
    },
    {
      id: "3",
      title: "Evaluación personalizada",
      text: "Un nutricionista calificado analizará tu estilo de vida, objetivos y necesidades para crear un plan único para ti.",
      date: "May 2023",
      status: "progress",
      imageUrl: roadmap4,
    },
  ];
  
  export const collabText =
    "Contaremos con servidor de discord, registro de progreso en Notion.";
  
  export const collabContent = [
    {
      id: "0",
      title: "Facil Integracion",
      text: collabText,
    },
    {
      id: "1",
      title: "Seguimiento de dietas y registros",
    },
    {
      id: "2",
      title: "Seguridad, privacidad y respaldo de datos",
    },
  ];
  
  export const collabApps = [
    {
      id: "0",
      title: "Figma",
      icon: figma,
      width: 26,
      height: 36,
    },
    {
      id: "1",
      title: "Notion",
      icon: notion,
      width: 34,
      height: 36,
    },
    {
      id: "2",
      title: "Discord",
      icon: discord,
      width: 36,
      height: 28,
    },
    {
      icon: slack,
      id: "3",
      title: "Slack",
      width: 34,
      height: 35,
    },
    {
      id: "4",
      title: "Photoshop",
      icon: photoshop,
      width: 34,
      height: 34,
    },
    {
      id: "5",
      title: "Protopie",
      icon: protopie,
      width: 34,
      height: 34,
    },
    {
      id: "6",
      title: "Framer",
      icon: framer,
      width: 26,
      height: 34,
    },
    {
      id: "7",
      title: "Raindrop",
      icon: raindrop,
      width: 38,
      height: 32,
    },
  ];
  
  export const pricing = [
    {
      id: "0",
      title: "Plan gratuito para Nutrition Subscribe",
      description: "Evaluación nutricional inicial, Plan de alimentación de muestra",
      price: "0",
      features: [
        "Evaluación nutricional personalizada",
        "Plan de alimentación de muestra",
        "Regístrate hoy mismo y recibe",
      ],
    },
    {
      id: "1",
      title: "Premium",
      description: "Tu camino personalizado hacia una vida más saludable y plena",
      price: "49.99",
      features: [
        "Acceso ilimitado a tu nutricionista:",
        "Seguimiento personalizado del progreso",
        "Recursos exclusivos, Descuentos y beneficios",
      ],
    },
    {
      id: "2",
      title: "Familiar",
      description: "Planes de alimentación personalizados para cada miembro de la familia",
      price: "99.99",
      features: [
        "Obtén el apoyo y la guía de un profesional de la nutrición para toda la familia.",
        "Disfruten de una alimentación personalizada y placentera para todos",
        "Ahorren tiempo y dinero con planes y recursos personalizados",
      ],
    },
  ];
  
  export const benefits = [
    {
      id: "0",
      title: "María Pérez",
      text: "Sufría de sobrepeso, fatiga crónica y baja autoestima.   Sentía que no tenía tiempo para cuidar su salud y alimentación, se suscribió al plan familiar de Nutrition Subscribe Perdió 10 kilos en 3 meses.",
      backgroundUrl: "assets/benefits/card-1.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "1",
      title: "¡Navega con facilidad en nuestra web intuitiva!",
      text: "En Nutrition Subscribe, queremos que tu experiencia sea lo más cómoda y placentera posible. Por eso, hemos diseñado una web intuitiva y fácil de usar para que puedas encontrar todo lo que necesitas en cuestión de segundos.",
      backgroundUrl: "assets/benefits/card-2.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "2",
      title: "Facil acceso desde cualquier lugar",
      text: "Olvídate de llevar papeles a todas partes o de buscar en internet recetas interminables. Con Nutrition Subscribe, accede a tus recetas personalizadas desde cualquier dispositivo y en cualquier momento.",
      backgroundUrl: "assets/benefits/card-3.svg",
      iconUrl: benefitIcon3,
      imageUrl: benefitImage2,
    },
    {
      id: "3",
      title: "¡Contactar con un nutricionista nunca fue tan fácil!",
      text: "En Nutrition Subscribe, nos preocupamos por tu salud y bienestar. Por eso, ponemos a tu disposición un equipo de nutricionistas expertos a los que puedes contactar de forma fácil y rápida para recibir la mejor atención personalizada.",
      backgroundUrl: "assets/benefits/card-4.svg",
      iconUrl: benefitIcon4,
      imageUrl: benefitImage2,
      light: true,
    },
    {
      id: "4",
      title: "Testimonio de Juan García",
      text: "Sufría de problemas digestivos y falta de energía. Sentía que su alimentación no le proporcionaba los nutrientes necesarios para mantener su ritmo de vida, Se suscribió al plan individual de Nutrition Subscribe, Mejoró su digestión y eliminó los problemas estomacales.      ",
      backgroundUrl: "assets/benefits/card-5.svg",
      iconUrl: benefitIcon1,
      imageUrl: benefitImage2,
    },
    {
      id: "5",
      title: "Nutrición inteligente: IA que te ayuda a alcanzar tus objetivos",
      text: "En Nutrition Subscribe, utilizamos la inteligencia artificial (IA) para ofrecerte una experiencia personalizada y efectiva en tu camino hacia una vida más saludable. Entre las ventajas de la IA se encuentra la capacidad de estimar tu pérdida de peso potencial.",
      backgroundUrl: "assets/benefits/card-6.svg",
      iconUrl: benefitIcon2,
      imageUrl: benefitImage2,
    },
  ];
  
  export const socials = [
    {
      id: "0",
      title: "Discord",
      iconUrl: discordBlack,
      url: "#",
    },
    {
      id: "1",
      title: "Twitter",
      iconUrl: twitter,
      url: "#",
    },
    {
      id: "2",
      title: "Instagram",
      iconUrl: instagram,
      url: "#",
    },
    {
      id: "3",
      title: "Telegram",
      iconUrl: telegram,
      url: "#",
    },
    {
      id: "4",
      title: "Facebook",
      iconUrl: facebook,
      url: "#",
    },
  ];