import pool from "../conexaoBD";
import { v4 as uuidv4 } from "uuid";


export async function CadastrarAnimal(req, res) {
    const { nome, idade, situacao, microchipado, tutor, raca, cor, observacoes, especie, guarda } = req.body

    if (!nome || !idade || !situacao || !microchipado || !tutor || !raca || !cor || !especie || !guarda) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
    }

    const cliente = await pool.connect()

    try {
        const token = uuidv4()

        const { rows: animalReptidos } = await cliente.query('SELECT nome, tutor, guarda FROM pet WHERE nome = $1 AND tutor = $2 AND guarda = $3', [nome, tutor, guarda])

        if (animalReptidos.length !== 0) {
            return res.status(400).json({ mensagem: "Este animal ja está cadastrado" })
        }

        const criarAnimal = await cliente.query('INSERT INTO pet (nome, idade, situacao, microchipado, tutor, raca, cor, observacoes, especie, guarda, token) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)', [nome, idade, situacao, microchipado, tutor, raca, cor, observacoes || null, especie, guarda, token])

        return res.status(201).json({ mensagem: 'Animal cadastrado com sucesso, guarde este token para edição ou exclusão:', token })


    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: 'Erro ao criar cadastro do animal' });

    } finally {

        cliente.release()
    }

}