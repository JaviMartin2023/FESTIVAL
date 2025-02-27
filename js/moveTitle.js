window.addEventListener('scroll', () => {
    const titles = document.querySelectorAll('.moving-title');
    const scrollPosition = window.scrollY;
    const windowWidth = window.innerWidth;

    titles.forEach(title => {
        if (windowWidth > 768) { // Desactivar el movimiento en pantallas pequeñas
            title.style.transform = `translateX(${scrollPosition * 0.1}px)`;
        } else {
            title.style.transform = 'translateX(0)'; // Resetear la posición en pantallas pequeñas
        }
    });
});