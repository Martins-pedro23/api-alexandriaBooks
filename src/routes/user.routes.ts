import { Router } from "express";
import userController from "../controllers/user/userController";

const routes = Router();

routes.get("/users", userController.findAll);
routes.post("/users", userController.create);

export default routes;
