document.getElementById('modeToggle').addEventListener('click', function() {
    const body = document.body;
    const icon = document.getElementById('modeIcon');
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
        icon.src = 'img/sol.png'; // Cambia al ícono de sol
    } else {
        icon.src = 'img/luna.png'; // Cambia al ícono de luna
    }
});
