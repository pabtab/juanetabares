export const translations = {
  es: {
    nav: {
      home: "Inicio",
      services: "Servicios",
      about: "Nosotros",
      gallery: "Consultorio",
      contact: "Contacto",
      callNow: "Escríbenos",
    },
    hero: {
      subtitle: "Odontología General y Especializada",
      headline: "Tu sonrisa, nuestra pasión",
      description:
        "Más de 20 años de experiencia brindando atención dental de calidad en Medellín. Tu bienestar y confianza son nuestra prioridad.",
      cta1: "Agenda tu cita",
      cta2: "Escríbenos",
    },
    services: {
      title: "Nuestros Servicios",
      subtitle:
        "Ofrecemos una amplia gama de tratamientos odontológicos para toda la familia.",
      items: [
        {
          title: "Limpieza Dental",
          description:
            "Profilaxis profesional para mantener tus dientes y encías saludables. Eliminación de placa y sarro.",
        },
        {
          title: "Blanqueamiento",
          description:
            "Tratamientos de blanqueamiento profesional para devolver la luminosidad natural a tu sonrisa.",
        },
        {
          title: "Ortodoncia",
          description:
            "Tratamientos de ortodoncia con los diferentes métodos del mercado: brackets metálicos, brackets cerámicos, ortodoncia lingual y alineadores invisibles.",
        },
      ],
    },
    about: {
      title: "Dr. Juan Eugenio Tabares",
      subtitle: "Odontólogo - Especialista en Ortodoncia",
      bio: "Odontólogo egresado de la Universidad Cooperativa de Colombia y especialista en ortodoncia de la Universidad de Nueva York. Con más de 20 años de experiencia, el Dr. Tabares se dedica a ofrecer tratamientos de la más alta calidad, combinando técnicas modernas con un trato humano y personalizado.",
      credentials: [
        "Odontólogo de la Universidad Cooperativa de Colombia",
        "Especialista en Ortodoncia - Universidad de Nueva York",
        "Más de 20 años de experiencia",
        "Atención personalizada y humana",
      ],
    },
    gallery: {
      title: "Nuestro Consultorio",
      subtitle:
        "Instalaciones modernas y equipadas con la última tecnología para tu comodidad.",
    },
    contact: {
      title: "Ubicación y Contacto",
      subtitle: "Estamos ubicados en el corazón de Medellín. ¡Visítanos!",
      whatsapp: "WhatsApp",
      email: "Correo Electrónico",
      hours: "Horario de Atención",
      hoursDetail: "Lunes a Viernes: 8:00 AM - 6:00 PM\nSábados: 8:00 AM - 1:00 PM",
      address: "Dirección",
      addressDetail: "Medellín, Colombia",
      whatsappMessage:
        "Buen día, vengo desde la página web y estoy interesado en los planes que tienen.",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      tagline: "Cuidando sonrisas en Medellín",
    },
  },
  en: {
    nav: {
      home: "Home",
      services: "Services",
      about: "About",
      gallery: "Office",
      contact: "Contact",
      callNow: "Message Us",
    },
    hero: {
      subtitle: "General & Specialized Dentistry",
      headline: "Your smile, our passion",
      description:
        "Over 20 years of experience providing quality dental care in Medellín. Your well-being and confidence are our priority.",
      cta1: "Book Appointment",
      cta2: "Message Us",
    },
    services: {
      title: "Our Services",
      subtitle:
        "We offer a wide range of dental treatments for the whole family.",
      items: [
        {
          title: "Dental Cleaning",
          description:
            "Professional prophylaxis to keep your teeth and gums healthy. Plaque and tartar removal.",
        },
        {
          title: "Teeth Whitening",
          description:
            "Professional whitening treatments to restore the natural brightness of your smile.",
        },
        {
          title: "Orthodontics",
          description:
            "Orthodontic treatments with various market methods: metal braces, ceramic braces, lingual orthodontics, and clear aligners.",
        },
      ],
    },
    about: {
      title: "Dr. Juan Eugenio Tabares",
      subtitle: "Dentist - Orthodontics Specialist",
      bio: "Dentist graduated from Universidad Cooperativa de Colombia and orthodontics specialist from New York University. With over 20 years of experience, Dr. Tabares is dedicated to providing the highest quality treatments, combining modern techniques with a personal and caring touch.",
      credentials: [
        "Dentist - Universidad Cooperativa de Colombia",
        "Orthodontics Specialist - New York University",
        "Over 20 years of experience",
        "Personalized and compassionate care",
      ],
    },
    gallery: {
      title: "Our Office",
      subtitle:
        "Modern facilities equipped with the latest technology for your comfort.",
    },
    contact: {
      title: "Location & Contact",
      subtitle: "We are located in the heart of Medellín. Come visit us!",
      whatsapp: "WhatsApp",
      email: "Email",
      hours: "Office Hours",
      hoursDetail: "Monday to Friday: 8:00 AM - 6:00 PM\nSaturdays: 8:00 AM - 1:00 PM",
      address: "Address",
      addressDetail: "Medellín, Colombia",
      whatsappMessage:
        "Hello, I'm coming from the website and I'm interested in your dental plans.",
    },
    footer: {
      rights: "All rights reserved.",
      tagline: "Caring for smiles in Medellín",
    },
  },
} as const;

export type Language = keyof typeof translations;
export type Translations = (typeof translations)[Language];
