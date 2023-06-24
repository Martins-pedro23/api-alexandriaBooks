import "./database/connection"
import express from "express"
import routes from "./routes/index"

const app = express()

app.use(express.json(), express.urlencoded({extended: true}))
app.use(routes)

export{app} 