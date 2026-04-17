export type Lang = "pt" | "en" | "es";

export const translations = {
  // Header
  header: {
    services: { pt: "Serviços", en: "Services", es: "Servicios" },
    product: { pt: "Produto", en: "Product", es: "Producto" },
    contact: { pt: "Contato", en: "Contact", es: "Contacto" },
  },

  // Hero
  hero: {
    tag: {
      pt: "DevOps • Containers • Observabilidade",
      en: "DevOps • Containers • Observability",
      es: "DevOps • Containers • Observabilidad",
    },
    title1: {
      pt: "Domine sua",
      en: "Master your",
      es: "Domine su",
    },
    titleHighlight: {
      pt: "infraestrutura",
      en: "infrastructure",
      es: "infraestructura",
    },
    title2: {
      pt: "Simplifique seu DevOps.",
      en: "Simplify your DevOps.",
      es: "Simplifique su DevOps.",
    },
    description: {
      pt: "Observabilidade avançada, DevOps completo e gestão de nuvem com tecnologia",
      en: "Advanced observability, full DevOps and cloud management with",
      es: "Observabilidad avanzada, DevOps completo y gestión de nube con tecnología",
    },
    descSuffix: {
      pt: "Menos tempo gerenciando infraestrutura. Mais tempo entregando valor.",
      en: "Less time managing infrastructure. More time delivering value.",
      es: "Menos tiempo gestionando infraestructura. Más tiempo entregando valor.",
    },
    cta1: {
      pt: "Fale com um especialista",
      en: "Talk to an expert",
      es: "Habla con un especialista",
    },
    cta2: {
      pt: "Ver como funciona",
      en: "See how it works",
      es: "Ver cómo funciona",
    },
  },

  // ValueProp
  valueProp: {
    title: {
      pt: "Infraestrutura sem fricção",
      en: "Frictionless infrastructure",
      es: "Infraestructura sin fricción",
    },
    subtitle: {
      pt: "Menos tempo gerenciando infraestrutura. Mais tempo entregando valor.",
      en: "Less time managing infrastructure. More time delivering value.",
      es: "Menos tiempo gestionando infraestructura. Más tiempo entregando valor.",
    },
    cards: [
      {
        title: {
          pt: "Observabilidade completa",
          en: "Full observability",
          es: "Observabilidad completa",
        },
        description: {
          pt: "Monitoramento em tempo real de containers, serviços e aplicações com visibilidade total do seu ambiente.",
          en: "Real-time monitoring of containers, services and applications with full visibility of your environment.",
          es: "Monitoreo en tiempo real de containers, servicios y aplicaciones con visibilidad total de su entorno.",
        },
      },
      {
        title: {
          pt: "Gerenciamento inteligente de containers",
          en: "Intelligent container management",
          es: "Gestión inteligente de containers",
        },
        description: {
          pt: "Controle total do seu ambiente Docker com uma camada moderna, segura e escalável.",
          en: "Full control of your Docker environment with a modern, secure and scalable layer.",
          es: "Control total de su entorno Docker con una capa moderna, segura y escalable.",
        },
      },
      {
        title: {
          pt: "DevOps acelerado",
          en: "Accelerated DevOps",
          es: "DevOps acelerado",
        },
        description: {
          pt: "Automatize deploys, reduza falhas e aumente a velocidade do seu time com práticas avançadas de DevOps.",
          en: "Automate deploys, reduce failures and increase your team's speed with advanced DevOps practices.",
          es: "Automatice deploys, reduzca fallos y aumente la velocidad de su equipo con prácticas avanzadas de DevOps.",
        },
      },
    ],
  },

  // Tools
  tools: {
    tag: {
      pt: "O que entregamos",
      en: "What we deliver",
      es: "Lo que entregamos",
    },
    title: {
      pt: "Cada camada da sua infra,",
      en: "Every layer of your infra,",
      es: "Cada capa de su infra,",
    },
    titleHighlight: {
      pt: "coberta",
      en: "covered",
      es: "cubierta",
    },
    subtitle: {
      pt: "Observabilidade completa, pipelines DevOps e gestão multi-cloud — tudo integrado para dar controle total sobre a sua operação.",
      en: "Full observability, DevOps pipelines and multi-cloud management — all integrated for total control over your operations.",
      es: "Observabilidad completa, pipelines DevOps y gestión multi-cloud — todo integrado para tener control total sobre su operación.",
    },
    cloudNativeBadge: {
      pt: "Tecnologia",
      en: "Technology",
      es: "Tecnología",
    },
    tagline1: {
      pt: "Um painel. Uma equipe.",
      en: "One panel. One team.",
      es: "Un panel. Un equipo.",
    },
    tagline2: {
      pt: "Controle total.",
      en: "Total control.",
      es: "Control total.",
    },
    services: [
      {
        title: { pt: "Observabilidade", en: "Observability", es: "Observabilidad" },
        subItems: [
          {
            label: {
              pt: "Monitoramento de Servidores e Microserviços",
              en: "Server and Microservices Monitoring",
              es: "Monitoreo de Servidores y Microservicios",
            },
            details: {
              pt: ["CPU", "Memória", "Network", "+1000 Métricas"],
              en: ["CPU", "Memory", "Network", "+1000 Metrics"],
              es: ["CPU", "Memoria", "Network", "+1000 Métricas"],
            },
          },
          {
            label: {
              pt: "Monitoramento de APIs, Links e Integrações",
              en: "API, Links and Integration Monitoring",
              es: "Monitoreo de APIs, Links e Integraciones",
            },
            details: {
              pt: ["Uptime", "Latência", "Expiração de Certificados"],
              en: ["Uptime", "Latency", "Certificate Expiration"],
              es: ["Uptime", "Latencia", "Expiración de Certificados"],
            },
          },
          {
            label: {
              pt: "Monitoramento de Banco de Dados SQL e NoSQL",
              en: "SQL and NoSQL Database Monitoring",
              es: "Monitoreo de Base de Datos SQL y NoSQL",
            },
            details: {
              pt: ["Uptime", "Data Return Checks"],
              en: ["Uptime", "Data Return Checks"],
              es: ["Uptime", "Data Return Checks"],
            },
          },
          {
            label: {
              pt: "Notificação em Tempo Real",
              en: "Real-Time Notifications",
              es: "Notificación en Tiempo Real",
            },
            details: {
              pt: ["Microsoft Teams", "Slack", "WhatsApp / Telegram", "+100 canais"],
              en: ["Microsoft Teams", "Slack", "WhatsApp / Telegram", "+100 channels"],
              es: ["Microsoft Teams", "Slack", "WhatsApp / Telegram", "+100 canales"],
            },
          },
        ],
      },
      {
        title: { pt: "DevOps", en: "DevOps", es: "DevOps" },
        subItems: [
          {
            label: {
              pt: "Gestão de Fontes com GIT",
              en: "Source Management with GIT",
              es: "Gestión de Fuentes con GIT",
            },
            details: {
              pt: ["GitLab", "GitHub", "Forgejo", "Gitea"],
              en: ["GitLab", "GitHub", "Forgejo", "Gitea"],
              es: ["GitLab", "GitHub", "Forgejo", "Gitea"],
            },
          },
          {
            label: {
              pt: "Continuous Integration (CI)",
              en: "Continuous Integration (CI)",
              es: "Integración Continua (CI)",
            },
            details: {
              pt: ["Tests", "Lint", "Sonar"],
              en: ["Tests", "Lint", "Sonar"],
              es: ["Tests", "Lint", "Sonar"],
            },
          },
          {
            label: {
              pt: "Continuous Deployment (CD)",
              en: "Continuous Deployment (CD)",
              es: "Despliegue Continuo (CD)",
            },
            details: {
              pt: ["Publish", "Install / Update", "Rollback"],
              en: ["Publish", "Install / Update", "Rollback"],
              es: ["Publish", "Install / Update", "Rollback"],
            },
          },
          {
            label: {
              pt: "Governança",
              en: "Governance",
              es: "Gobernanza",
            },
            details: {
              pt: ["Release Management", "Authorize Meetings"],
              en: ["Release Management", "Authorize Meetings"],
              es: ["Release Management", "Authorize Meetings"],
            },
          },
        ],
      },
      {
        title: {
          pt: "Gestão de Nuvem",
          en: "Cloud Management",
          es: "Gestión de Nube",
        },
        subItems: [
          {
            label: { pt: "Vendors", en: "Vendors", es: "Proveedores" },
            details: {
              pt: ["Azure", "AWS", "Digital Ocean", "e outros"],
              en: ["Azure", "AWS", "Digital Ocean", "and more"],
              es: ["Azure", "AWS", "Digital Ocean", "y otros"],
            },
          },
          {
            label: {
              pt: "Tipos de Serviço",
              en: "Service Types",
              es: "Tipos de Servicio",
            },
            details: {
              pt: ["IaaS", "PaaS", "SaaS", "Hybrid"],
              en: ["IaaS", "PaaS", "SaaS", "Hybrid"],
              es: ["IaaS", "PaaS", "SaaS", "Hybrid"],
            },
          },
          {
            label: {
              pt: "Ferramentas",
              en: "Tools",
              es: "Herramientas",
            },
            details: {
              pt: ["Terminais Remotos", "Gestão de Containers", "Diagnósticos via App Logs"],
              en: ["Remote Terminals", "Container Management", "Diagnostics via App Logs"],
              es: ["Terminales Remotos", "Gestión de Containers", "Diagnósticos vía App Logs"],
            },
          },
        ],
      },
    ],
  },

  // Consulting
  consulting: {
    tag: {
      pt: "Parceria estratégica",
      en: "Strategic partnership",
      es: "Alianza estratégica",
    },
    title: {
      pt: "Consultoria",
      en: "Architectural",
      es: "Consultoría",
    },
    titleHighlight: {
      pt: "Arquitetural",
      en: "Consulting",
      es: "Arquitectónica",
    },
    subtitle: {
      pt: "Mais do que ferramentas — somos parceiros na construção da base tecnológica certa para o seu negócio.",
      en: "More than tools — we are partners in building the right technology foundation for your business.",
      es: "Más que herramientas — somos socios en la construcción de la base tecnológica correcta para su negocio.",
    },
    pillars: [
      {
        title: {
          pt: "Análise & Diagnóstico",
          en: "Analysis & Diagnostics",
          es: "Análisis & Diagnóstico",
        },
        desc: {
          pt: "Mapeamos seu cenário atual — negócio, sistemas, equipe e processos — para entender onde estão os gargalos e oportunidades.",
          en: "We map your current scenario — business, systems, team and processes — to understand bottlenecks and opportunities.",
          es: "Mapeamos su escenario actual — negocio, sistemas, equipo y procesos — para entender cuellos de botella y oportunidades.",
        },
      },
      {
        title: {
          pt: "Arquitetura & Estratégia",
          en: "Architecture & Strategy",
          es: "Arquitectura & Estrategia",
        },
        desc: {
          pt: "Definimos a melhor arquitetura possível, recomendando tecnologias, padrões e organização ideais para o seu contexto.",
          en: "We define the best possible architecture, recommending ideal technologies, patterns and organization for your context.",
          es: "Definimos la mejor arquitectura posible, recomendando tecnologías, patrones y organización ideales para su contexto.",
        },
      },
      {
        title: {
          pt: "Design à Operação",
          en: "Design to Operations",
          es: "Diseño a Operación",
        },
        desc: {
          pt: "Atuamos desde o design da aplicação até a governança e operação, garantindo coerência em toda a cadeia.",
          en: "We work from application design to governance and operations, ensuring coherence across the entire chain.",
          es: "Actuamos desde el diseño de la aplicación hasta la gobernanza y operación, garantizando coherencia en toda la cadena.",
        },
      },
    ],
    modelTitle: {
      pt: "Escolha o modelo ideal",
      en: "Choose the ideal model",
      es: "Elija el modelo ideal",
    },
    modelSubtitle: {
      pt: "Você decide até onde quer ir — nós nos adaptamos.",
      en: "You decide how far you want to go — we adapt.",
      es: "Usted decide hasta dónde quiere ir — nosotros nos adaptamos.",
    },
    models: [
      {
        label: {
          pt: "Apenas Consultoria",
          en: "Consulting Only",
          es: "Solo Consultoría",
        },
        desc: {
          pt: "Receba o plano completo e execute com seu time interno.",
          en: "Receive the complete plan and execute with your internal team.",
          es: "Reciba el plan completo y ejecútelo con su equipo interno.",
        },
      },
      {
        label: {
          pt: "Execução Completa",
          en: "Full Execution",
          es: "Ejecución Completa",
        },
        desc: {
          pt: "Deixe toda a implementação com a Horizon X — do início ao fim.",
          en: "Leave the entire implementation to Horizon X — from start to finish.",
          es: "Deje toda la implementación a Horizon X — de principio a fin.",
        },
      },
    ],
    quote: {
      pt: "Você pode focar no seu produto.",
      en: "You can focus on your product.",
      es: "Puede enfocarse en su producto.",
    },
    quoteBold: {
      pt: "Nós cuidamos de toda a base.",
      en: "We take care of the entire foundation.",
      es: "Nosotros cuidamos toda la base.",
    },
  },

  // Automation
  automation: {
    tag: {
      pt: "Eficiência operacional",
      en: "Operational efficiency",
      es: "Eficiencia operacional",
    },
    title: {
      pt: "Automação de",
      en: "Process",
      es: "Automatización de",
    },
    titleHighlight: {
      pt: "Processos",
      en: "Automation",
      es: "Procesos",
    },
    subtitle: {
      pt: "Automatizamos processos operacionais para que sua equipe foque no que realmente importa.",
      en: "We automate operational processes so your team can focus on what truly matters.",
      es: "Automatizamos procesos operacionales para que su equipo se enfoque en lo que realmente importa.",
    },
    steps: {
      order: { pt: "Pedido recebido", en: "Order received", es: "Pedido recibido" },
      financial: { pt: "Análise financeira", en: "Financial analysis", es: "Análisis financiero" },
      erp: { pt: "Registro no ERP", en: "ERP registration", es: "Registro en ERP" },
      marketplace: { pt: "Atualiza marketplace", en: "Update marketplace", es: "Actualiza marketplace" },
      email: { pt: "E-mail ao cliente", en: "Email to customer", es: "E-mail al cliente" },
      whatsapp: { pt: "Aviso WhatsApp", en: "WhatsApp alert", es: "Aviso WhatsApp" },
      done: { pt: "Concluído", en: "Done", es: "Completado" },
    },
    benefits: [
      {
        title: {
          pt: "Elimine tarefas repetitivas",
          en: "Eliminate repetitive tasks",
          es: "Elimine tareas repetitivas",
        },
        desc: {
          pt: "Rotinas manuais viram fluxos automáticos — sem erros, sem atrasos.",
          en: "Manual routines become automatic flows — no errors, no delays.",
          es: "Rutinas manuales se convierten en flujos automáticos — sin errores, sin retrasos.",
        },
      },
      {
        title: {
          pt: "Integre seus sistemas",
          en: "Integrate your systems",
          es: "Integre sus sistemas",
        },
        desc: {
          pt: "Conecte plataformas, bases de dados e serviços em fluxos contínuos.",
          en: "Connect platforms, databases and services in continuous flows.",
          es: "Conecte plataformas, bases de datos y servicios en flujos continuos.",
        },
      },
      {
        title: {
          pt: "Produtividade imediata",
          en: "Immediate productivity",
          es: "Productividad inmediata",
        },
        desc: {
          pt: "Sua equipe foca no que importa enquanto os processos rodam sozinhos.",
          en: "Your team focuses on what matters while processes run on their own.",
          es: "Su equipo se enfoca en lo que importa mientras los procesos corren solos.",
        },
      },
    ],
    tagline1: {
      pt: "Menos trabalho manual.",
      en: "Less manual work.",
      es: "Menos trabajo manual.",
    },
    tagline2: {
      pt: "Mais resultados.",
      en: "More results.",
      es: "Más resultados.",
    },
  },

  // Product
  product: {
    tag: {
      pt: "Conheça o coração da operação",
      en: "Meet the heart of operations",
      es: "Conozca el corazón de la operación",
    },
    title: {
      pt: "Horizon X Observability",
      en: "Horizon X Observability",
      es: "Horizon X Observability",
    },
    subtitle: {
      pt: "Uma plataforma moderna de observabilidade e gerenciamento de containers projetada para simplificar ambientes complexos e dar controle total sobre sua infraestrutura.",
      en: "A modern observability and container management platform designed to simplify complex environments and give total control over your infrastructure.",
      es: "Una plataforma moderna de observabilidad y gestión de containers diseñada para simplificar entornos complejos y dar control total sobre su infraestructura.",
    },
    features: {
      pt: [
        "Gestão de containers Docker em escala",
        "Monitoramento de serviços e logs em tempo real",
        "Alertas inteligentes e automação",
        "Deploy e rollback simplificados",
        "Integração com pipelines DevOps",
      ],
      en: [
        "Docker container management at scale",
        "Real-time service and log monitoring",
        "Intelligent alerts and automation",
        "Simplified deploy and rollback",
        "DevOps pipeline integration",
      ],
      es: [
        "Gestión de containers Docker a escala",
        "Monitoreo de servicios y logs en tiempo real",
        "Alertas inteligentes y automatización",
        "Deploy y rollback simplificados",
        "Integración con pipelines DevOps",
      ],
    },
    cta: {
      pt: "Quero ver em ação",
      en: "I want to see it in action",
      es: "Quiero verlo en acción",
    },
  },

  // Differentiators
  diff: {
    title: {
      pt: "Por que Horizon X?",
      en: "Why Horizon X?",
      es: "¿Por qué Horizon X?",
    },
    metrics: {
      uptime: { pt: "Uptime", en: "Uptime", es: "Uptime" },
      latency: { pt: "Latência", en: "Latency", es: "Latencia" },
      faster: { pt: "Mais rápido", en: "Faster", es: "Más rápido" },
    },
    items: {
      pt: [
        "Arquitetura moderna e escalável",
        "Foco em performance e confiabilidade",
        "Redução drástica de downtime",
        "Visibilidade completa do ambiente",
        "Implementação rápida",
        "Suporte especializado",
      ],
      en: [
        "Modern and scalable architecture",
        "Focus on performance and reliability",
        "Drastic downtime reduction",
        "Full environment visibility",
        "Fast implementation",
        "Specialized support",
      ],
      es: [
        "Arquitectura moderna y escalable",
        "Enfoque en performance y confiabilidad",
        "Reducción drástica de downtime",
        "Visibilidad completa del entorno",
        "Implementación rápida",
        "Soporte especializado",
      ],
    },
  },

  // Authority
  authority: {
    title: {
      pt: "Construído para ambientes críticos",
      en: "Built for critical environments",
      es: "Construido para entornos críticos",
    },
    subtitle: {
      pt: "Projetado para empresas que não podem parar. A Horizon X garante estabilidade, previsibilidade e controle total da sua operação.",
      en: "Designed for businesses that can't stop. Horizon X ensures stability, predictability and total control of your operations.",
      es: "Diseñado para empresas que no pueden parar. Horizon X garantiza estabilidad, previsibilidad y control total de su operación.",
    },
  },

  // Contact
  contact: {
    title: {
      pt: "Fale com um especialista",
      en: "Talk to an expert",
      es: "Hable con un especialista",
    },
    subtitle: {
      pt: "Descubra como a Horizon X pode transformar sua infraestrutura.",
      en: "Discover how Horizon X can transform your infrastructure.",
      es: "Descubra cómo Horizon X puede transformar su infraestructura.",
    },
    name: { pt: "Nome", en: "Name", es: "Nombre" },
    company: { pt: "Empresa", en: "Company", es: "Empresa" },
    email: { pt: "Email", en: "Email", es: "Email" },
    phone: { pt: "Telefone", en: "Phone", es: "Teléfono" },
    message: { pt: "Mensagem", en: "Message", es: "Mensaje" },
    submit: {
      pt: "Quero escalar minha infraestrutura",
      en: "I want to scale my infrastructure",
      es: "Quiero escalar mi infraestructura",
    },
    sending: { pt: "Enviando...", en: "Sending...", es: "Enviando..." },
    response: {
      pt: "Respondemos em até 24h",
      en: "We respond within 24h",
      es: "Respondemos en hasta 24h",
    },
    success: {
      pt: "Mensagem enviada! Entraremos em contato em breve.",
      en: "Message sent! We'll get back to you soon.",
      es: "¡Mensaje enviado! Nos pondremos en contacto pronto.",
    },
    error: {
      pt: "Erro ao enviar. Tente novamente.",
      en: "Error sending. Please try again.",
      es: "Error al enviar. Intente nuevamente.",
    },
  },

  // SEO
  seo: {
    tag: {
      pt: "Technical Specifications & Infrastructure Scope",
      en: "Technical Specifications & Infrastructure Scope",
      es: "Technical Specifications & Infrastructure Scope",
    },
    content: {
      pt: `A Horizon X oferece soluções completas em DevOps, gerenciamento de containers Docker, observabilidade de sistemas, monitoramento de aplicações, infraestrutura cloud e automação de deploys. Nossa plataforma permite controle avançado de ambientes distribuídos com monitoramento de servidores, microserviços, APIs, bancos de dados SQL e NoSQL, gestão de fontes GIT, pipelines CI/CD, continuous integration e continuous deployment. Atuamos com os principais vendors de nuvem — Azure, AWS, Digital Ocean — e suportamos modelos IaaS, PaaS, SaaS e Hybrid. Garantimos alta disponibilidade, performance e segurança com tecnologia Cloud Native Foundation.`,
      en: `Horizon X provides comprehensive DevOps solutions including Docker container management, system observability, application monitoring, cloud infrastructure and automated deploys. Our platform enables advanced control of distributed environments with server monitoring, microservices, APIs, SQL and NoSQL databases, GIT source management, CI/CD pipelines, continuous integration and continuous deployment. We work with major cloud vendors — Azure, AWS, Digital Ocean — and support IaaS, PaaS, SaaS and Hybrid models. We guarantee high availability, performance and security with Cloud Native Foundation technology.`,
      es: `Horizon X ofrece soluciones completas en DevOps, gestión de containers Docker, observabilidad de sistemas, monitoreo de aplicaciones, infraestructura cloud y automatización de deploys. Nuestra plataforma permite control avanzado de entornos distribuidos con monitoreo de servidores, microservicios, APIs, bases de datos SQL y NoSQL, gestión de fuentes GIT, pipelines CI/CD, integración continua y despliegue continuo. Trabajamos con los principales proveedores de nube — Azure, AWS, Digital Ocean — y soportamos modelos IaaS, PaaS, SaaS e Hybrid. Garantizamos alta disponibilidad, performance y seguridad con tecnología Cloud Native Foundation.`,
    },
  },

  // Footer
  footer: {
    tagline: {
      pt: "DevOps • Containers • Observabilidade",
      en: "DevOps • Containers • Observability",
      es: "DevOps • Containers • Observabilidad",
    },
    contact: { pt: "Contato", en: "Contact", es: "Contacto" },
    about: { pt: "Sobre", en: "About", es: "Acerca" },
    terms: { pt: "Termos", en: "Terms", es: "Términos" },
    group: {
      pt: "Uma empresa do grupo",
      en: "A company of the group",
      es: "Una empresa del grupo",
    },
  },
} as const;
