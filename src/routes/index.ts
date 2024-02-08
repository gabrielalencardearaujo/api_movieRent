import { Router } from "express"
import { useRoutes } from "./user.routes";
import { movieRoutes } from "./movie.routes";

const routes = Router();

routes.use('/users', useRoutes);
routes.use('/movies', movieRoutes);

export default routes;