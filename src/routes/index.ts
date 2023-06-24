import {Router} from "express";
import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";

const routes = Router();

routes.use(userRoutes);
routes.use(bookRoutes);

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

export default routes;
