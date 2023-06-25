import "./database/connection";
import express from "express";
import routes from "./routes/index";
import cors from "cors";

const app = express();

app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
app.use(routes);

export { app };
