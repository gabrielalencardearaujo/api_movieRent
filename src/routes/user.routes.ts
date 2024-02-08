import { Router } from "express";
import CreateUserController from "../modules/users/useCases/createUser/CreateUserController";
import GetAllUsersController from "../modules/users/useCases/getAllUsers/GetAllUsersController";

const useRoutes = Router();

useRoutes.post('/', CreateUserController.createUser);
useRoutes.get('/', GetAllUsersController.userRelease);

export { useRoutes }