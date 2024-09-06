const portafolioDrop = document.getElementById('Portafolio');
const navlink = document.getElementById('contenido-drop');

portafolioDrop.addEventListener('click', (event) => {
    if (!navlink.classList.contains('active')) {
        event.preventDefault(); // Prevenir la redirección si se muestra el menú
        navlink.classList.add('active'); // Mostrar el dropdown
    } else {
        // Si está activo y se hace clic, redirige
        window.location.href = 'portafolio.html';
    }
});

// document.addEventListener('click', (event) => {
//     if (!portafolioDrop.contains(event.target) && !navlink.contains(event.target)) {
//         navlink.classList.remove('active'); // Cerrar el dropdown
//     }
// });