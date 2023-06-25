import { Router } from "express";
import userController from "../controllers/user/UserController";

const routes = Router();

routes.get("/users", userController.findAll);
routes.post("/users", userController.create);
routes.post("/login", userController.login);

export default routes;
