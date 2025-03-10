/**
 * Main JavaScript
 * --------------
 * Script principal que contiene la funcionalidad de la web
 */

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar elementos cuando las secciones se hayan cargado
    document.addEventListener('sectionLoaded', handleSectionLoaded);
    
    // Esperar a que todas las secciones se carguen
    let loadedSections = 0;
    const totalSections = 9; // Número total de secciones a cargar
    
    function handleSectionLoaded(event) {
        loadedSections++;
        
        // Inicializar funcionalidades específicas según la sección cargada
        const { containerId } = event.detail;
        
        switch(containerId) {
            case 'header-container':
                initializeHeader();
                break;
            case 'projects-container':
                initializeProjects();
                break;
            case 'contact-container':
                initializeContactForm();
                break;
        }
        
        // Si todas las secciones se han cargado, inicializar características globales
        if (loadedSections === totalSections) {
            initializeGlobalFeatures();
            hidePreloader();
        }
    }
});

/**
 * Oculta el preloader cuando el sitio está listo
 */
function hidePreloader() {
    const preloader = document.querySelector('.preloader');
    
    // Si no existe el preloader, salir
    if (!preloader) return;
    
    // Ocultar con transición
    preloader.style.opacity = '0';
    
    // Eliminar después de la transición
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 500);
}

/**
 * Inicializa características globales después de cargar todas las secciones
 */
function initializeGlobalFeatures() {
    // Inicializar AOS (Animate On Scroll) si está disponible
    if (typeof AOS !== 'undefined') {
        AOS.init({
            duration: 800,
            easing: 'ease-in-out',
            once: true
        });
    }
    
    // Inicializar scroll animations
    initScrollAnimations();
    
    // Inicializar smooth scrolling
    initSmoothScroll();
    
    // Inicializar back to top
    initBackToTop();
    
    // Inicializar contador de estadísticas
    initStatisticsCounter();
    
    // Inicializar formulario de newsletter
    initNewsletterForm();
}

/**
 * Inicializa la funcionalidad del header
 */
function initializeHeader() {
    // Obtener elementos necesarios
    const header = document.querySelector('.header');
    const navToggle = document.getElementById('nav-toggle');
    const navMenu = document.getElementById('nav-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const navLinks = document.querySelectorAll('.nav-link');
    
    // Evento scroll para cambiar el header
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
        updateActiveNavLink();
    });
    
    // Evento click para mostrar/ocultar menú móvil
    if (navToggle) {
        navToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            menuOverlay.classList.toggle('active');
            
            // Cambiar icono del botón
            const icon = navToggle.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
    }
    
    // Cerrar menú al hacer click en el overlay
    if (menuOverlay) {
        menuOverlay.addEventListener('click', closeNavMenu);
    }
    
    // Cerrar menú al hacer click en los enlaces
    navLinks.forEach(link => {
        link.addEventListener('click', closeNavMenu);
    });
}

/**
 * Cierra el menú de navegación móvil
 */
function closeNavMenu() {
    const navMenu = document.getElementById('nav-menu');
    const menuOverlay = document.getElementById('menu-overlay');
    const navToggle = document.getElementById('nav-toggle');
    
    if (navMenu) navMenu.classList.remove('active');
    if (menuOverlay) menuOverlay.classList.remove('active');
    
    // Restaurar icono del botón
    if (navToggle) {
        const icon = navToggle.querySelector('i');
        if (icon) {
            icon.classList.add('fa-bars');
            icon.classList.remove('fa-times');
        }
    }
}

/**
 * Actualiza el enlace activo en la navegación según la posición de scroll
 */
function updateActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        
        if (window.pageYOffset >= sectionTop && window.pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        const href = link.getAttribute('href');
        
        if (href === '#' + current) {
            link.classList.add('active');
        }
    });
}

/**
 * Inicializa las animaciones al hacer scroll
 */
function initScrollAnimations() {
    const elements = document.querySelectorAll('.slide-up');
    
    if (!elements.length) return;
    
    // Función para comprobar si un elemento es visible
    function checkElements() {
        elements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            
            if (elementTop < windowHeight * 0.8) {
                element.classList.add('show');
            }
        });
    }
    
    // Verificar elementos al cargar y al hacer scroll
    window.addEventListener('scroll', checkElements);
    checkElements();
}

/**
 * Inicializa el scroll suave para los enlaces internos
 */
function initSmoothScroll() {
    const anchors = document.querySelectorAll('a[href^="#"]');
    
    anchors.forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            
            // Si es un enlace a la parte superior, ir allí
            if (targetId === '#') {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
                return;
            }
            
            // Si no, buscar el elemento
            const target = document.querySelector(targetId);
            
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
}

/**
 * Inicializa el botón para volver arriba
 */
function initBackToTop() {
    const backToTop = document.querySelector('.back-to-top');
    
    if (!backToTop) return;
    
    // Mostrar/ocultar según la posición de scroll
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTop.classList.add('active');
        } else {
            backToTop.classList.remove('active');
        }
    });
    
    // Scroll hacia arriba al hacer click
    backToTop.addEventListener('click', function(e) {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

/**
 * Inicializa la sección de proyectos con filtros
 */
function initializeProjects() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');
    
    if (!filterButtons.length || !projectCards.length) return;
    
    // Evento click para los botones de filtro
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Quitar clase active de todos los botones
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Añadir clase active al botón pulsado
            this.classList.add('active');
            
            // Obtener la categoría seleccionada
            const filter = this.getAttribute('data-filter');
            
            // Filtrar los proyectos
            projectCards.forEach(card => {
                if (filter === 'all' || card.getAttribute('data-category') === filter) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

/**
 * Inicializa el contador de estadísticas
 */
function initStatisticsCounter() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    if (!statNumbers.length) return;
    
    // Obtener la sección de estadísticas
    const statsSection = document.querySelector('.stats-grid');
    
    if (!statsSection) return;
    
    // Variable para rastrear si la animación ya se ejecutó
    let animated = false;
    
    // Función para animar contadores
    function animateCounters() {
        if (animated) return;
        
        statNumbers.forEach(stat => {
            const target = parseInt(stat.getAttribute('data-count') || stat.textContent);
            const duration = 2000; // ms
            const increment = target / (duration / 16); // 16ms por frame (60fps)
            let current = 0;
            
            const timer = setInterval(() => {
                current += increment;
                
                if (current >= target) {
                    stat.textContent = target;
                    clearInterval(timer);
                } else {
                    stat.textContent = Math.ceil(current);
                }
            }, 16);
        });
        
        animated = true;
    }
    
    // Función para comprobar si la sección está visible
    function checkVisibility() {
        const rect = statsSection.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;
        
        if (isVisible) {
            animateCounters();
            window.removeEventListener('scroll', checkVisibility);
        }
    }
    
    // Comprobar visibilidad al cargar y al hacer scroll
    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
}

/**
 * Inicializa el formulario de contacto
 */
function initializeContactForm() {
    const form = document.getElementById('contact-form');
    
    if (!form) return;
    
    // Obtener el ID de Formspree desde la configuración
    const formspreeId = getConfig('sections.contact.formspreeId', '');
    
    // Si hay ID de Formspree, configurar el formulario
    if (formspreeId) {
        form.setAttribute('action', `https://formspree.io/f/${formspreeId}`);
        form.setAttribute('method', 'POST');
    }
    
    // Evento submit del formulario
    form.addEventListener('submit', function(e) {
        // Si no hay ID de Formspree, prevenir envío y mostrar notificación
        if (!formspreeId) {
            e.preventDefault();
            alert('¡Gracias por tu mensaje! Te contactaremos a la brevedad.');
            form.reset();
            return;
        }
        
        // Si hay ID de Formspree, el formulario se envía normalmente
    });
}

/**
 * Inicializa el formulario de newsletter
 */
function initNewsletterForm() {
    const form = document.querySelector('.newsletter-form');
    
    if (!form) return;
    
    // Evento submit del formulario
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Mostrar mensaje de éxito
        alert('¡Gracias por suscribirte a nuestro boletín!');
        form.reset();
    });
}
