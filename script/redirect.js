document.addEventListener('DOMContentLoaded', () => {
    if (window.innerWidth <= 200 && window.innerHeight <= 200) {
        // Redirigir a la versión para relojes si la resolución es muy pequeña
        window.location.href = 'reloj.html';
    }
});
