import { User } from '../models/users.model.js';

// Rutas para renderizar vistas
export async function getUsers(req, res) {
    try {
        const result = await User.find();
        res.render('index', { 
            users: result, 
            message: "Bienvenido", 
            type: "success" 
        });
    } catch (error) {
        console.log('Error de consulta: ' + error);
        res.render('users', { 
            users: [], 
            message: "Error al cargar usuarios", 
            type: "error" 
        });
    }
}

export function getError(req, res) {
    res.render('error')
}

export function getCreateUser(req, res) {
    res.render('create-user');
}

export async function getUpdateUser(req, res) {
    const id = req.params.id;
    
    try {
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).render('error', { 
                message: 'Usuario no encontrado' 
            });
        }
        
        // Convertir a array para mantener compatibilidad con la vista
        res.render('update-user', { user: [user] });
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).render('error', { 
            message: 'Error al cargar usuario' 
        });
    }
}

export async function getDeleteUser(req, res) {
    const id = req.params.id;
    
    try {
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).render('error', { 
                message: 'Usuario no encontrado' 
            });
        }
        
        // Convertir a array para mantener compatibilidad con la vista
        res.render('delete-user', { user: [user] });
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).render('error', { 
            message: 'Error al cargar usuario' 
        });
    }
}

// Manejo de datos (API)
export async function users(req, res) {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).json({ 
            error: 'Error al obtener usuarios' 
        });
    }
}

export async function user(req, res) {
    try {
        const id = req.params.id;
        const user = await User.findById(id);
        
        if (!user) {
            return res.status(404).json({ 
                error: 'Usuario no encontrado' 
            });
        }
        
        res.json(user);
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).json({ 
            error: 'Error al obtener usuario' 
        });
    }
}

export async function createUser(req, res) {
    try {
        const { name, email, age } = req.body;
        
        // Crear nuevo usuario
        const newUser = new User({
            name,
            email,
            age: parseInt(age),
            created_at: new Date()
        });
        
        await newUser.save();
        
        res.redirect('/api/users2/all');
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).render('create-user', { 
            message: 'Error al crear usuario', 
            type: 'error' 
        });
    }
}

export async function updateUser(req, res) {
    try {
        const id = req.params.id;
        const { name, email, age } = req.body;
        
        const updatedUser = await User.findByIdAndUpdate(
            id,
            {
                name,
                email,
                age: parseInt(age)
            },
            { new: true, runValidators: true }
        );
        
        if (!updatedUser) {
            return res.status(404).json({ 
                error: 'Usuario no encontrado' 
            });
        }
        
        res.redirect('/api/users2/all');
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).json({ 
            error: 'Error al actualizar usuario' 
        });
    }
}

export async function deleteUser(req, res) {
    try {
        const id = req.params.id;
        
        const deletedUser = await User.findByIdAndDelete(id);
        
        if (!deletedUser) {
            return res.status(404).json({ 
                error: 'Usuario no encontrado' 
            });
        }
        
        res.redirect('/api/users2/all');
    } catch (error) {
        console.log('Error: ' + error);
        res.status(500).json({ 
            error: 'Error al eliminar usuario' 
        });
    }
}