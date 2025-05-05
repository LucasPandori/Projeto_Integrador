import { Router } from "express"
import { CadastrarAnimal } from "./controladores/CriarAnimal"
import { ListarAnimais } from "./controladores/Listar"
import { EditarAnimal } from "./controladores/AtualizarAnimal"
import { ExcluirAnimal } from "./controladores/ExcluirAnimal"

const rotas = Router()

rotas.post('/amahvet', CadastrarAnimal)

rotas.get('/amahvet', ListarAnimais)

rotas.put('/amahvet/:id', EditarAnimal)

rotas.delete('/amahvet/:id', ExcluirAnimal)


export default rotas