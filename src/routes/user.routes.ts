import { UserController } from './../resources/user/user.controller';
import { Router } from 'express';

const userRoutes = Router();
const userController = new UserController();

userRoutes.post('/singin', userController.singin);

userRoutes.post('/singup', userController.singup);

export default userRoutes;
