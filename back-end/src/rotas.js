import { Router } from "express"
import { CadastrarAnimal } from "./controladores/CriarAnimal"

const rotas = Router()

rotas.post('/cadastro', CadastrarAnimal)


export default rotas