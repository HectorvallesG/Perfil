const portafolioDrop = document.getElementById('Portafolio');
const navlink = document.getElementById('contenido-drop');

portafolioDrop.addEventListener('click', (event) => {
    event.preventDefault();
    navlink.classList.toggle('active');
});