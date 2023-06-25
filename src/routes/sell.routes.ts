import { Router } from "express";
import SellController from "../controllers/sell/SellController";

const routes = Router();

routes.get("/sells", SellController.findAll);
routes.post("/sells", SellController.create);

export default routes;