// Seleccionamos el encabezado de la página
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Detecta cuántos píxeles ha bajado el usuario
    let scrollActual = window.scrollY; 
    
    // Si el usuario bajó más de 200px, le añadimos la clase para ocultarlo.
    // Si vuelve arriba, se la quitamos para que vuelva a aparecer.
    if (scrollActual > 200) {
        header.classList.add('header-oculto');
    } else {
        header.classList.remove('header-oculto');
    }
});