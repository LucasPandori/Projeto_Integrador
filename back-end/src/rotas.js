import { Router } from "express"
import { CadastrarAnimal } from "./controladores/CriarAnimal.js"
import { ListarAnimais } from "./controladores/Listar.js"
import { EditarAnimal } from "./controladores/AtualizarAnimal.js"
import { ExcluirAnimal } from "./controladores/ExcluirAnimal.js"

const rotas = Router()

rotas.post('/amahvet', CadastrarAnimal)

rotas.get('/amahvet', ListarAnimais)

rotas.put('/amahvet/:id', EditarAnimal)

rotas.delete('/amahvet/:id', ExcluirAnimal)


export default rotas