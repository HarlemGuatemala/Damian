// Seleccionamos el encabezado de la página
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
    // Detecta cuántos píxeles ha bajado el usuario
    let textodown = window.scrollY; 
    
    // Calcula la opacidad en base al movimiento (entre más baja, menor es el número)
    // 300 es el límite en píxeles donde se volverá completamente invisible, puedes ajustarlo
    let opacidad = 1 - (textodown / 300); 
    
    // Si la opacidad es menor a 0, la dejamos en 0 para evitar errores
    if (opacidad < 0) {
        opacidad = 0;
    }
    
    // Aplicamos la opacidad directamente al estilo del encabezado
    header.style.opacity = opacidad;
});
