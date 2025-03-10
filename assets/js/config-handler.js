/**
 * Config Handler
 * -------------
 * Este script gestiona la configuración de la web desde config.js
 * Permite cambiar textos, colores y contenido sin tocar HTML o CSS
 */

document.addEventListener('DOMContentLoaded', function() {
    // Si no existe objeto config, terminar
    if (typeof config === 'undefined') {
        console.error('Error: El archivo config.js no está cargado correctamente');
        return;
    }

    // Aplicar colores personalizados desde config
    applyCustomColors();
});

/**
 * Aplica los colores personalizados desde la configuración
 * al CSS de la página usando variables CSS
 */
function applyCustomColors() {
    // Si no hay objeto de configuración o no tiene colores, salir
    if (!config || !config.colors) return;
    
    // Obtener el elemento root para asignar variables CSS
    const root = document.documentElement;
    
    // Asignar cada color definido en la configuración
    for (const [name, value] of Object.entries(config.colors)) {
        root.style.setProperty(`--${name}`, value);
    }
}

/**
 * Obtiene valores de la configuración según la ruta especificada
 * @param {string} path - Ruta en formato "section.subsection.property"
 * @param {*} defaultValue - Valor por defecto si no se encuentra la ruta
 * @returns {*} - El valor encontrado o el valor por defecto
 */
function getConfig(path, defaultValue = '') {
    // Si no hay objeto config o la ruta está vacía, devolver valor por defecto
    if (!config || !path) return defaultValue;
    
    // Separar las partes de la ruta
    const parts = path.split('.');
    
    // Comenzar desde el objeto de configuración raíz
    let current = config;
    
    // Navegar a través de las partes de la ruta
    for (const part of parts) {
        // Si la parte actual no existe, devolver valor por defecto
        if (current[part] === undefined) {
            return defaultValue;
        }
        
        // Avanzar a la siguiente parte
        current = current[part];
    }
    
    // Devolver el valor encontrado
    return current;
}

/**
 * Obtiene el año de experiencia calculado desde el año de fundación
 * @returns {number} - Años de experiencia
 */
function getYearsOfExperience() {
    const yearFounded = getConfig('companyInfo.yearFounded', new Date().getFullYear());
    const currentYear = new Date().getFullYear();
    return currentYear - yearFounded;
}

/**
 * Sanitiza texto HTML para prevenir inyección de código
 * @param {string} text - Texto a sanitizar
 * @returns {string} - Texto sanitizado
 */
function sanitizeHTML(text) {
    const temp = document.createElement('div');
    temp.textContent = text;
    return temp.innerHTML;
}

/**
 * Genera un rating HTML basado en un número
 * @param {number} rating - Valoración (1-5)
 * @returns {string} - HTML con estrellas
 */
function generateRatingStars(rating) {
    let starsHTML = '';
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    // Añadir estrellas completas
    for (let i = 0; i < fullStars; i++) {
        starsHTML += '<i class="fas fa-star"></i>';
    }
    
    // Añadir media estrella si es necesario
    if (hasHalfStar) {
        starsHTML += '<i class="fas fa-star-half-alt"></i>';
    }
    
    // Añadir estrellas vacías
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
        starsHTML += '<i class="far fa-star"></i>';
    }
    
    return starsHTML;
}

/**
 * Formatea el teléfono para mostrar separadores
 * @param {string} phone - Número de teléfono
 * @returns {string} - Teléfono formateado
 */
function formatPhone(phone) {
    if (!phone) return '';
    
    // Eliminar todos los caracteres no numéricos
    const cleaned = ('' + phone).replace(/\D/g, '');
    
    // Comprobar si es un teléfono español (+34)
    if (cleaned.length === 9) {
        return cleaned.replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (cleaned.length === 11 && cleaned.startsWith('34')) {
        return '+34 ' + cleaned.substring(2).replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    } else if (cleaned.length === 12 && cleaned.startsWith('349')) {
        return '+34 ' + cleaned.substring(2).replace(/(\d{3})(\d{3})(\d{3})/, '$1 $2 $3');
    }
    
    // Si no coincide con los formatos anteriores, devolver tal cual
    return phone;
}

/**
 * Genera una alerta de notificación 
 * @param {string} message - Mensaje a mostrar
 * @param {string} type - Tipo de alerta (success, error, warning, info)
 */
function showNotification(message, type = 'info') {
    // Crear elemento de alerta
    const alert = document.createElement('div');
    alert.className = `alert alert-${type} notification-alert`;
    alert.innerHTML = message;
    
    // Añadir al cuerpo del documento
    document.body.appendChild(alert);
    
    // Mostrar con animación
    setTimeout(() => {
        alert.classList.add('show');
    }, 10);
    
    // Eliminar después de 3 segundos
    setTimeout(() => {
        alert.classList.remove('show');
        setTimeout(() => {
            document.body.removeChild(alert);
        }, 300);
    }, 3000);
}
