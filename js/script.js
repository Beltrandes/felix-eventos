document.querySelectorAll('.nav-item a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault(); // Impede o comportamento padrão do link
        const targetId = this.getAttribute('href'); // Obtém o ID do alvo do link
        const targetElement = document.querySelector(targetId); // Seleciona o elemento alvo
        if (targetElement) {
            // Se o elemento alvo existe, rola a página até ele
            targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});