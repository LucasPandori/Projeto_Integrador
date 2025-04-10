import rotas from "./rotas"
import express from "express"

const app = express()

app.use(rotas)
app.use(express.json())

export default app