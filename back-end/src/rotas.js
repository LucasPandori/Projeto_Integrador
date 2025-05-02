import { Router } from "express"
import { CadastrarAnimal } from "./controladores/CriarAnimal"
import { ListarAnimais } from "./controladores/Listar"

const rotas = Router()

rotas.post('/cadastro', CadastrarAnimal)
rotas.get('/listar', ListarAnimais)


export default rotas