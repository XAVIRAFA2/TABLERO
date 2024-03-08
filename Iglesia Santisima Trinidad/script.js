document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
        closeBtn.style.display = 'block'; // Mostrar el botón "X"
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('show');
        closeBtn.style.display = 'none'; // Ocultar el botón "X"
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove('show');
            closeBtn.style.display = 'none'; // Ocultar el botón "X"
        }
    });
});