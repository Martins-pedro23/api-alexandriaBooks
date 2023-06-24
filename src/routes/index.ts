import {Router} from "express";
import userRoutes from "./user.routes";

const routes = Router();

routes.use(userRoutes);

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

export default routes;
