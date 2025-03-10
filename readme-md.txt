# Naga Constructora - Sitio Web

Este repositorio contiene el sitio web completo para Naga Constructora, una empresa dedicada a la construcción, obras y reformas. El sitio ha sido diseñado para ser fácilmente editable por personal sin conocimientos técnicos avanzados.

## Características

- **Diseño Moderno y Responsive**: Se adapta a todos los dispositivos (móviles, tablets, ordenadores)
- **Fácil de Editar**: Sistema de configuración que permite cambiar textos y colores sin tocar código
- **Buen Rendimiento**: Código optimizado para rápida carga
- **SEO Friendly**: Estructura optimizada para motores de búsqueda
- **Contacto Integrado**: Formulario de contacto funcional
- **Arquitectura Modular**: Organización en secciones que facilita mantenimiento

## Estructura de Archivos

```
naga-constructora/
├── index.html                # Página principal
├── editor.html               # Editor visual de configuración
├── config.js                 # Configuración editable (textos, contacto, etc.)
├── README.md                 # Este archivo de documentación
├── assets/
│   ├── css/
│   │   ├── bootstrap.min.css # Framework CSS
│   │   ├── style.css         # Estilos principales
│   │   └── custom.css        # Para personalizaciones
│   ├── js/
│   │   ├── bootstrap.bundle.min.js
│   │   ├── jquery.min.js
│   │   ├── main.js           # Funcionalidades principales
│   │   ├── config-handler.js # Procesa la configuración
│   │   ├── html-includer.js  # Carga las secciones HTML
│   │   └── custom-cursor.js  # Cursor personalizado
│   ├── img/                  # Carpeta para imágenes (añade tus propias imágenes)
│   └── fonts/                # Carpeta para fuentes (opcional)
└── sections/                 # HTML separado por secciones
    ├── header.html           # Barra de navegación
    ├── hero.html             # Sección principal
    ├── about.html            # Sobre nosotros
    ├── services.html         # Servicios
    ├── cta.html              # Llamada a la acción
    ├── projects.html         # Proyectos
    ├── testimonials.html     # Testimonios
    ├── contact.html          # Contacto
    └── footer.html           # Pie de página
```

## Requisitos del Servidor

El sitio está desarrollado con tecnologías web estándar y puede ser alojado en cualquier servidor web que soporte:

- HTML5
- CSS3
- JavaScript (ES6+)
- Acceso a archivos estáticos

No se requiere PHP, base de datos ni ninguna tecnología backend específica, lo que simplifica la implementación.

## Instalación en un Servidor de Hosting

1. **Contrata un servicio de hosting**: Recomendamos servicios como Netlify, Vercel, Hostinger o similares.

2. **Sube los archivos**: 
   - Descarga todos los archivos de este repositorio
   - Sube los archivos a la carpeta principal de tu hosting (generalmente llamada `public_html`, `www` o `htdocs`)
   - Puedes usar FTP, el administrador de archivos de tu hosting o interfaces Git si están disponibles

3. **Configuración del dominio**:
   - Asegúrate de que tu dominio apunte correctamente a tu hosting
   - No se requiere configuración especial de servidor

## Personalización a través de config.js

El sitio está diseñado para ser fácilmente personalizable a través del archivo `config.js`. Este archivo contiene toda la información editable del sitio:

- Información de la empresa
- Textos de secciones
- Colores
- Datos de contacto
- Servicios
- Proyectos
- Testimonios
- etc.

### Cómo editar la configuración

Existen dos formas de editar la configuración:

1. **Editor Visual (Recomendado para no técnicos)**:
   - Abre `editor.html` en tu navegador (localmente o en tu servidor)
   - Modifica la información a través de la interfaz visual
   - Guarda los cambios y sube el archivo `config.js` generado a tu servidor

2. **Edición Directa (Para usuarios con conocimientos básicos)**:
   - Abre el archivo `config.js` con cualquier editor de texto
   - Modifica los valores respetando la estructura y sintaxis
   - Guarda los cambios y sube el archivo a tu servidor

## Integración del Formulario de Contacto

El formulario de contacto está preparado para funcionar con [Formspree](https://formspree.io/), un servicio gratuito que permite enviar correos electrónicos desde formularios HTML:

1. Regístrate en [Formspree](https://formspree.io/)
2. Crea un nuevo formulario y obtén tu ID único
3. Edita el archivo `config.js` y coloca tu ID en la propiedad `sections.contact.formspreeId`

## Personalización Avanzada

Si necesitas realizar personalizaciones más avanzadas:

- **Estilos**: Modifica `assets/css/custom.css` para cambios específicos de diseño
- **Secciones**: Edita los archivos HTML en la carpeta `sections/` para cambios estructurales
- **Funcionalidades**: Modifica los archivos JavaScript en `assets/js/` para cambios de comportamiento

## Problemas Comunes

### Las imágenes no se muestran
- Asegúrate de que las imágenes estén en la carpeta `assets/img/`
- Verifica que las rutas en el código sean correctas (relativas a la raíz del sitio)

### El formulario de contacto no envía emails
- Verifica que hayas configurado correctamente Formspree
- Comprueba que el ID de Formspree en `config.js` sea correcto

### La web se ve mal en móviles
- Asegúrate de no haber eliminado la línea `<meta name="viewport" content="width=device-width, initial-scale=1.0">` del `index.html`
- Revisa si has añadido estilos personalizados que puedan afectar al diseño responsive

## Soporte y Contacto

Para soporte técnico o consultas, puedes contactar al desarrollador:

- Email: [tu-email@ejemplo.com]
- Web: [tu-sitio-web.com]

## Licencia

Este proyecto se entrega con una licencia para uso exclusivo de Naga Constructora.
