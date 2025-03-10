/**
 * Custom Cursor
 * ------------
 * Este script implementa un cursor personalizado para mejorar
 * la experiencia del usuario en dispositivos de escritorio.
 */

document.addEventListener('DOMContentLoaded', function() {
    // Solo inicializar en dispositivos de escritorio
    if (window.innerWidth < 992) return;
    
    // Crear elementos del cursor
    createCursorElements();
    
    // Inicializar el cursor
    initCustomCursor();
});

/**
 * Crea los elementos HTML necesarios para el cursor personalizado
 */
function createCursorElements() {
    // Crear cursor principal
    const cursor = document.createElement('div');
    cursor.className = 'custom-cursor';
    document.body.appendChild(cursor);
    
    // Crear punto central del cursor
    const cursorDot = document.createElement('div');
    cursorDot.className = 'cursor-dot';
    document.body.appendChild(cursorDot);
}

/**
 * Inicializa el comportamiento del cursor personalizado
 */
function initCustomCursor() {
    const cursor = document.querySelector('.custom-cursor');
    const cursorDot = document.querySelector('.cursor-dot');
    
    if (!cursor || !cursorDot) return;
    
    // Actualizar posición del cursor al mover el ratón
    document.addEventListener('mousemove', function(e) {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        // El punto central se mueve con un pequeño retraso para crear efecto
        setTimeout(() => {
            cursorDot.style.left = e.clientX + 'px';
            cursorDot.style.top = e.clientY + 'px';
        }, 50);
    });
    
    // Cambiar estilo del cursor al pasar sobre elementos interactivos
    const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, .btn, .nav-link, .filter-btn, .social-icon, .back-to-top');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            cursor.classList.add('cursor-hover');
            cursor.style.width = '50px';
            cursor.style.height = '50px';
            cursor.style.mixBlendMode = 'difference';
        });
        
        element.addEventListener('mouseleave', function() {
            cursor.classList.remove('cursor-hover');
            cursor.style.width = '20px';
            cursor.style.height = '20px';
            cursor.style.mixBlendMode = 'normal';
        });
    });
    
    // Efecto al hacer clic
    document.addEventListener('mousedown', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(0.8)';
    });
    
    document.addEventListener('mouseup', function() {
        cursor.style.transform = 'translate(-50%, -50%) scale(1)';
        cursorDot.style.transform = 'translate(-50%, -50%) scale(1)';
    });
}
