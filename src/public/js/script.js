document.addEventListener('DOMContentLoaded', () => {
    console.log('Document loaded and parsed');

    const h1 = document.querySelector('h1');
    // Cambiar el color del texto al hacer hover
    h1.addEventListener('mouseover', () => {
        h1.style.color = 'blue';
    });

    h1.addEventListener('mouseout', () => {
        h1.style.color = 'black';
    });

    function updateUser(params) {
        const user = null;
    }
});