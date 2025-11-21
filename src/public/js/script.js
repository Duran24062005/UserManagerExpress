document.addEventListener('DOMContentLoaded',async() => {
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

    async function getUsers(params) {
        const url = `https://user-manager-express.vercel.app/api/users2/`;
        const data  = await fetch(url);
        let users = await data.json();
        return users;
    }

    let usuarios = await getUsers()
    console.log(usuarios);
    
});