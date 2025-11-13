import { Router } from "express";
import { 
    getUsers,
    getCreateUser,
    getUpdateUser,
    getDeleteUser,
    users,
    user,
    createUser,
    updateUser,
    deleteUser
} from "../controller/users.controller.js";


const userRouter = Router();

// Rutas para renderizar vistas
userRouter.get('/all', getUsers);

userRouter.get('/create', getCreateUser);

userRouter.get('/update/:id', getUpdateUser);

userRouter.get('/delete/:id', getDeleteUser);

// Rutas para manejar datos
userRouter.get('/', users);

userRouter.get('/:id', user);

userRouter.post('/', createUser);

userRouter.post('/up/:id', updateUser);

userRouter.post('/del/:id', deleteUser);


export default userRouter;