import { Router } from "express";
import { 
    getUsers,
    getError,
    getCreateUser,
    getUpdateUser,
    getDeleteUser,
    users,
    user,
    createUser,
    updateUser,
    deleteUser
} from "../controller/users2.controller.js";


const userRouter2 = Router();

// Rutas para renderizar vistas
userRouter2.get('/all', getUsers);

userRouter2.get('/error', getError);

userRouter2.get('/create', getCreateUser);

userRouter2.get('/update/:id', getUpdateUser);

userRouter2.get('/delete/:id', getDeleteUser);

// Rutas para manejar datos
userRouter2.get('/', users);

userRouter2.get('/:id', user);

userRouter2.post('/', createUser);

userRouter2.post('/up/:id', updateUser);

userRouter2.post('/del/:id', deleteUser);


export default userRouter2;