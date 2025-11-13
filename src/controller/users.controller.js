import path from 'path';
import connection from '../connection.js';

const root = path.join(  process.cwd(), './src/public' );
// console.log('========' + process.cwd());

const usersData = [
    { 
        id: 1, 
        name: 'John Doe', 
        email: 'jhon.doe@gmail.com'
    },
    { 
        id: 2, 
        name: 'Jane Doe', 
        email: 'aaa.ceosmsm'
    },
    {
        id: 3,
        name: 'Jim Beam',
        email: 'jim.dea@gmail.com',
        addres: 'Calle Falsa 123',
        documeto: '12345678X',
        padre_id: 2
    }
]

// Rutas para renderizar vistas
export function getUsers (req, res) {
    // res.sendFile('users.html', { root: root });
    // Renderiza la vista 'users' y pasa los datos de los usuarios a la plantilla
    const sql = `SELECT * FROM users`;
    connection.query(sql, (err, result)=>{
        if (err) { 
            console.log('Error de consulta ' + err);
        } else {
            console.log(result);
            res.render('users', { users: result, message: "Bienvenido" , type: "success" });

        }
    });
}

export function getCreateUser(req, res) {
    res.render('create-user');
}

export function getUpdateUser(req, res) {
    const param = req.params.id;
    console.log(param);
    const sql = `SELECT * FROM users WHERE id = ?`;
    connection.query(sql, param, (err, result) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log(result);
            res.render('update-user', {user: result});
        }
    });
}

export function getDeleteUser(req, res) {
    const param = req.params.id;
    console.log(param);
    const sql = `SELECT * FROM users WHERE id = ?`;
    connection.query(sql, param, (err, result) => {
        if (err) {
            console.log('Error: ' + err);
        } else {
            console.log(result);
            res.render('delete-user', {user: result});
        }
    });
}


// Manejo de datos (API)
export function users (req, res) {
    res.send(usersData);
}


export function user(req, res) {
    res.render('users', { users: usersData, message: "Bienvenido" , type: "success" });
}

export function createUser(req, res) {
    console.log(req.body);
    usersData.push(req.body);
    console.log(typeof req.body.age);

    // const sql = `INSERT INTO users (name, email, age) VALUES ('${req.body.name}', '${req.body.email}', ${parseInt(req.body.age)})`;
    const sql = `INSERT INTO users (name, email, age) VALUES (?, ?, ?)`;
    const data = req.body;
    connection.query(sql, [data.name, data.email, data.age], (err, result)=>{
        if (err) { 
            console.log('Error: ' + err);
        } else {
            console.log(result);
            res.redirect('/api/users/all')
        }
    });
    
    /*const sql2 = `SELECT * FROM users`;
    connection.query(sql2, (err, result)=>{
        if (err) { 
            throw new Error('Error de consulta ' + err);
        } else {
            console.log(result);
            res.render('users', { users: result, message: "Usuario creado exitosamente" , type: "success" });

        }
    });*/
}

export function updateUser(req, res) {
    const id = req.params.id
    const data = req.body;
    console.log(data);

    const sql = 'UPDATE users SET name = ?, age = ?, email = ? WHERE id = ?';
    connection.query(sql, [data.name, data.age, data.email, id], (err, result) => {
        if (err) {
            console.log(err);
            
        } else {
            return res.redirect('/api/users/all');
        }
    });
    /*for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].id == id) {
            usersData[i] = { ...usersData[i], ...req.body };
            /*
                usersData[i] = {
                    id: usersData[i].id,
                    name: req.body.name || usersData[i].name,
                    email: req.body.email || usersData[i].email
                }
            */
            /*return res.render('users', { users: usersData });;
        } else {
            return res.status(404).send('User not found');
        }
    }*/
}

export function deleteUser(req, res) {
    const id = req.params.id;
    const sql = `DELETE FROM users WHERE id = ${id}`;
    connection.query(sql, (err, result) => {
        if (err) {
            console.log(err);
            
        } else {
            return res.redirect('/api/users/all');
        }
    });
    /*for (let i = 0; i < usersData.length; i++) {
        if (usersData[i].id == id) {
            usersData.splice(i, 1);
            return res.render('users', { 
                users: usersData, 
                message: "User deleted successfully", 
                type: 'success' 
            });
        } else {
            return res.status(404).send('User not found');
        }
    }*/
}

