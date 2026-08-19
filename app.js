// Funcionalidad para el menú de navegación en móviles
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
const closeBtn = document.getElementById('close-btn');

// Si el usuario hace click en el icono de hamburguesa, muestra el menú
menuToggle.addEventListener('click', () => {
    mobileMenu.classList.add('active');
});

// Si el usuario hace click en la X, oculta el menú
closeBtn.addEventListener('click', () => {
    mobileMenu.classList.remove('active');
});

// También cerramos el menú si el usuario hace click en uno de los enlaces dentro de él
const mobileLinks = mobileMenu.querySelectorAll('a');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});