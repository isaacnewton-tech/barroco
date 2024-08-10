window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > 100) { // Mostra o cabeçalho após rolar 100px
        header.classList.add('visible');
    } else {
        header.classList.remove('visible');
    }
});
