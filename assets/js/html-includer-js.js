/**
 * HTML Includer
 * -------------
 * Este script permite cargar secciones HTML desde archivos separados.
 * Facilita la organización del código y la edición por partes.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Cargar todas las secciones
    loadSection('header-container', 'sections/header.html');
    loadSection('hero-container', 'sections/hero.html');
    loadSection('about-container', 'sections/about.html');
    loadSection('services-container', 'sections/services.html');
    loadSection('cta-container', 'sections/cta.html');
    loadSection('projects-container', 'sections/projects.html');
    loadSection('testimonials-container', 'sections/testimonials.html');
    loadSection('contact-container', 'sections/contact.html');
    loadSection('footer-container', 'sections/footer.html');
});

/**
 * Carga un archivo HTML en un contenedor específico
 * @param {string} containerId - ID del elemento donde cargar el HTML
 * @param {string} sectionUrl - URL del archivo HTML a cargar
 */
function loadSection(containerId, sectionUrl) {
    const container = document.getElementById(containerId);
    
    // Si no existe el contenedor, salir
    if (!container) {
        console.warn(`Contenedor #${containerId} no encontrado.`);
        return;
    }
    
    // Hacer petición AJAX para cargar el HTML
    fetch(sectionUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error HTTP: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            // Procesar el HTML para sustituir variables de configuración
            const processedHtml = processTemplateVariables(html);
            
            // Insertar el HTML en el contenedor
            container.innerHTML = processedHtml;
            
            // Activar los scripts en el HTML cargado
            executeScripts(container);
            
            // Disparar evento de sección cargada
            const event = new CustomEvent('sectionLoaded', { 
                detail: { 
                    containerId: containerId,
                    sectionUrl: sectionUrl 
                } 
            });
            document.dispatchEvent(event);
        })
        .catch(error => {
            console.error(`Error al cargar la sección ${sectionUrl}:`, error);
            container.innerHTML = `<div class="alert alert-danger">Error al cargar la sección. Por favor, recarga la página.</div>`;
        });
}

/**
 * Procesa variables de plantilla en formato {{config.path}}
 * @param {string} html - HTML a procesar
 * @returns {string} - HTML procesado con valores reales
 */
function processTemplateVariables(html) {
    // Expresión regular para encontrar variables {{config.path}}
    const varRegex = /\{\{(config\.[^}]+)\}\}/g;
    
    // Reemplazar cada coincidencia con el valor correspondiente
    return html.replace(varRegex, (match, path) => {
        // Eliminar 'config.' del inicio
        path = path.replace('config.', '');
        
        // Obtener el valor real desde la configuración
        const value = getConfig(path, '');
        
        // Devolver el valor o un string vacío si no existe
        return value !== undefined ? value : '';
    });
}

/**
 * Activa los scripts dentro del HTML cargado
 * @param {HTMLElement} container - Contenedor con el HTML cargado
 */
function executeScripts(container) {
    // Buscar todos los scripts en el contenedor
    const scripts = container.querySelectorAll('script');
    
    // Ejecutar cada script
    scripts.forEach(oldScript => {
        // Crear un nuevo script
        const newScript = document.createElement('script');
        
        // Copiar atributos
        Array.from(oldScript.attributes).forEach(attr => {
            newScript.setAttribute(attr.name, attr.value);
        });
        
        // Copiar contenido
        newScript.innerHTML = oldScript.innerHTML;
        
        // Reemplazar el script antiguo por el nuevo
        oldScript.parentNode.replaceChild(newScript, oldScript);
    });
}
