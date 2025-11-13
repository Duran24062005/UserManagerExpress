import { User } from '../models/users.model.js';


// Rutas para renderizar vistas
export async function getUsers (req, res) {
    try {
        const result = await User.find();
        res.render('users', { users: result, message: "Bienvenido" , type: "success" });
    } catch (error) {
        console.log('Error de consulta ' + err);
    }
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
export async function users (req, res) {
    try {
        const users = await User.find();
        res.send(users);
    } catch (error) {
        console.log(err);
    }
}


export function user(req, res) {
    res.render('users', { users: usersData, message: "Bienvenido" , type: "success" });
}

export async function createUser(req, res) {
    console.log(req.body);
    console.log(typeof req.body.age);

    try {
        const result = await User.insertOne(
            req.body
        );
        res.redirect('/users2/all');
    } catch (error) {
        console.log('Error: ' + err);
    };
}

export async function updateUser(req, res) {
    const id = req.params.id
    const data = req.body;
    console.log(data);

    try {
        await User.updateOne(
            {_id: id},
            {$set: {
                name: data.name,
                age: data.age,
                email: data.email
            }}
        );
        return res.redirect('/users2/all');
    } catch (error) {
        console.log(err);
    }
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
