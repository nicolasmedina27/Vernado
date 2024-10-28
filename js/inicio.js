function toggleDetails(element) {
    const blocks = document.querySelectorAll('.block'); // Seleccionar todos los bloques
    blocks.forEach(block => {
        if (block !== element) {
            block.classList.remove('active'); // Colapsar otros bloques
            block.querySelector('.additional-info').style.display = 'none'; // Ocultar información adicional
        }
    });

    element.classList.toggle('active'); // Cambiar estado del bloque clicado
    const info = element.querySelector('.additional-info'); // Seleccionar la información adicional
    info.style.display = info.style.display === 'block' ? 'none' : 'block'; // Alternar visibilidad
}
