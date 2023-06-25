import {Router} from "express";
import userRoutes from "./user.routes";
import bookRoutes from "./book.routes";
import sellRoutes from "./sell.routes";

const routes = Router();

routes.use(userRoutes);
routes.use(bookRoutes);
routes.use(sellRoutes)

routes.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is running" });
});

export default routes;
