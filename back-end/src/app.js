import rotas from "./rotas.js"
import express from "express"
import "dotenv/config.js"

const app = express()
app.use(express.json())

app.use(rotas)


export default app
