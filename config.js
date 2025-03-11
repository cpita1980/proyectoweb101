/**
 * ARCHIVO DE CONFIGURACIÓN
 * -------------------------
 * Aquí puedes editar fácilmente textos y configuraciones de la web
 * sin necesidad de tocar HTML ni CSS
 */

const config = {
    // Información general de la empresa
    companyInfo: {
        name: "Naga",
        slogan: "Construimos el futuro que imaginas",
        description: "Transformamos espacios y proyectos en realidades extraordinarias con soluciones innovadoras y compromiso con la calidad.",
        yearFounded: 2010,
        yearsExperience: 15,
        projectsCompleted: 250,
        clientsSatisfied: 98
    },

    // Información de contacto
    contact: {
        address: "Calle Mateo Garza 20, 24402 Ponferrada, León, España",
        phone: "+34 634 789 447",
        email: "info@nagaconstructora.com",
        scheduleText: "Lun - Vie: 9:00 - 18:00",
        socialMedia: {
            facebook: "https://facebook.com/nagaconstructora",
            twitter: "https://twitter.com/nagaconstructora",
            instagram: "https://instagram.com/nagaconstructora",
            linkedin: "https://linkedin.com/company/nagaconstructora"
        }
    },

    // Colores principales (pueden cambiarse para modificar toda la web)
    colors: {
        primary: "#0A0A0A",     // Color principal (negro)
        secondary: "#F7B500",   // Color secundario (amarillo/dorado)
        dark: "#0D1B2A",        // Color oscuro para fondos
        light: "#F8F9FA",       // Color claro para fondos
        white: "#FFFFFF",       // Blanco
        gray: "#6c757d"         // Gris para textos secundarios
    },

    // Textos de cada sección
    sections: {
        hero: {
            subtitle: "Expertos en construcción",
            title: "Construimos el futuro que imaginas",
            description: "Transformamos espacios y proyectos en realidades extraordinarias con soluciones innovadoras y compromiso con la calidad.",
            primaryButton: {
                text: "Nuestros proyectos",
                link: "#projects"
            },
            secondaryButton: {
                text: "Solicitar presupuesto",
                link: "#contact"
            }
        },
        about: {
            subtitle: "Conócenos",
            title: "Sobre Naga Constructora",
            description: "Más de una década construyendo excelencia y transformando espacios con pasión y experiencia.",
            content: [
                "En Naga Constructora, nuestra misión es transformar visiones en realidades tangibles a través de un compromiso inquebrantable con la excelencia constructiva, la innovación y la satisfacción del cliente.",
                "Desde nuestra fundación, hemos establecido un sólido legado de proyectos exitosos que combinan diseño vanguardista, calidad constructiva y sostenibilidad, convirtiéndonos en un referente en el sector de la construcción."
            ],
            buttonText: "Nuestros servicios",
            buttonLink: "#services"
        },
        services: {
            subtitle: "Lo que ofrecemos",
            title: "Nuestros Servicios",
            description: "Soluciones integrales para todas tus necesidades constructivas.",
            items: [
                {
                    icon: "fa-home",
                    title: "Construcción residencial",
                    description: "Diseñamos y construimos hogares personalizados que reflejan tu estilo de vida, con materiales de primera calidad y acabados impecables."
                },
                {
                    icon: "fa-building",
                    title: "Construcción comercial",
                    description: "Creamos espacios comerciales funcionales y atractivos que potencian tu negocio, optimizando cada metro cuadrado para maximizar su valor."
                },
                {
                    icon: "fa-hammer",
                    title: "Reformas integrales",
                    description: "Transformamos espacios existentes con reformas que renuevan completamente la estética y funcionalidad de tu hogar o negocio."
                },
                {
                    icon: "fa-tools",
                    title: "Rehabilitación de edificios",
                    description: "Devolvemos vida a estructuras antiguas respetando su esencia histórica mientras las adaptamos a los estándares modernos de confort y eficiencia."
                }
            ]
        },
        cta: {
            title: "¿Tienes un proyecto en mente?",
            description: "Trabajamos estrechamente contigo para entender tus necesidades y ofrecerte soluciones personalizadas que superen tus expectativas.",
            buttonText: "Solicitar presupuesto",
            buttonLink: "#contact"
        },
        projects: {
            subtitle: "Nuestro trabajo",
            title: "Proyectos destacados",
            description: "Descubre cómo hemos transformado ideas en realidades constructivas excepcionales.",
            categories: [
                { id: "all", name: "Todos" },
                { id: "residencial", name: "Residencial" },
                { id: "comercial", name: "Comercial" },
                { id: "reforma", name: "Reformas" },
                { id: "rehabilitacion", name: "Rehabilitación" }
            ],
            items: [
                {
                    icon: "fa-home",
                    category: "residencial",
                    title: "Residencial Los Álamos",
                    description: "Proyecto de 20 viviendas con zonas comunes"
                },
                {
                    icon: "fa-building",
                    category: "comercial",
                    title: "Oficinas Centrales TechHub",
                    description: "Reforma integral de oficinas corporativas"
                },
                {
                    icon: "fa-house-user",
                    category: "residencial",
                    title: "Villa Mediterránea",
                    description: "Vivienda unifamiliar de lujo"
                },
                {
                    icon: "fa-store",
                    category: "rehabilitacion",
                    title: "Centro Comercial Plaza",
                    description: "Rehabilitación y renovación de espacios comerciales"
                }
            ]
        },
        testimonials: {
            subtitle: "Opiniones",
            title: "Lo que dicen nuestros clientes",
            description: "La satisfacción de nuestros clientes es nuestro mejor aval.",
            items: [
                {
                    text: "Naga Constructora transformó completamente nuestra casa. El equipo fue profesional, limpio y cumplió con todos los plazos. El resultado superó nuestras expectativas y el precio se ajustó al presupuesto inicial.",
                    name: "María Rodríguez",
                    position: "Cliente de Naga Constructora",
                    rating: 5
                },
                {
                    text: "Contratamos a Naga Constructora para la construcción de nuestras nuevas oficinas. Su capacidad para resolver problemas sobre la marcha y su atención a los detalles hicieron que el proceso fuera muy fluido. Totalmente recomendables.",
                    name: "Carlos Martínez",
                    position: "Director General, Innovatech",
                    rating: 5
                },
                {
                    text: "La reforma de nuestro restaurante fue impecable. Naga Constructora entendió perfectamente nuestra visión y la transformó en realidad. Trabajaron con rapidez minimizando el tiempo de cierre del negocio, lo cual fue crucial para nosotros.",
                    name: "Laura Fernández",
                    position: "Propietaria, Restaurante Fusion",
                    rating: 4.5
                }
            ]
        },
        contact: {
            subtitle: "Ponte en contacto",
            title: "Contáctanos",
            description: "Estamos listos para escuchar tus ideas y convertirlas en realidades constructivas excepcionales.",
            formTitle: "Envíanos un mensaje",
            formFields: {
                name: "Nombre completo",
                email: "Correo electrónico",
                phone: "Teléfono",
                service: "Tipo de servicio",
                message: "Cuéntanos sobre tu proyecto"
            },
            formServices: [
                { value: "construccion_residencial", label: "Construcción residencial" },
                { value: "construccion_comercial", label: "Construcción comercial" },
                { value: "reforma", label: "Reforma integral" },
                { value: "rehabilitacion", label: "Rehabilitación" },
                { value: "otro", label: "Otro" }
            ],
            submitButtonText: "Enviar mensaje",
            formspreeId: "xyyyzzzz" // Cambiar por tu ID de Formspree
        },
        footer: {
            aboutTitle: "Sobre nosotros",
            aboutText: "Naga Constructora es una empresa líder en el sector de la construcción, obras y reformas con más de 15 años de experiencia ofreciendo soluciones de calidad para hogares y empresas.",
            quickLinks: {
                title: "Enlaces rápidos",
                links: [
                    { name: "Inicio", url: "#home" },
                    { name: "Nosotros", url: "#about" },
                    { name: "Servicios", url: "#services" },
                    { name: "Proyectos", url: "#projects" },
                    { name: "Testimonios", url: "#testimonials" },
                    { name: "Contacto", url: "#contact" }
                ]
            },
            services: {
                title: "Nuestros servicios",
                links: [
                    { name: "Construcción residencial", url: "#" },
                    { name: "Construcción comercial", url: "#" },
                    { name: "Reformas integrales", url: "#" },
                    { name: "Rehabilitación de edificios", url: "#" }
                ]
            },
            newsletter: {
                title: "Boletín informativo",
                text: "Suscríbete para recibir noticias, ofertas y consejos sobre construcción y reformas.",
                placeholder: "Tu correo electrónico",
                buttonText: "Suscribirse"
            },
            copyright: {
                text: "&copy; 2025 Naga Constructora. Todos los derechos reservados."
            }
        }
    }
};
