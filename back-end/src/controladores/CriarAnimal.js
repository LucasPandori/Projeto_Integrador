import pool from "../conexaoBD.js";
import { v4 as uuidv4 } from "uuid";

export async function CadastrarAnimal(req, res) {
    const { nome, especie, raca, idade, cor, microchipado, tutor, endereco, email, observacoes } = req.body



    if (!nome || !idade || !microchipado || !tutor || !raca || !cor || !especie || !endereco || !email) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })
    }

    try {
        const token = uuidv4()

        const [rows] = await pool.query('SELECT nome, tutor FROM pets WHERE nome = ? AND tutor = ?', [nome, tutor])

        if (rows.length !== 0) {
            return res.status(400).json({ mensagem: "Este animal ja está cadastrado" })
        }

        const [result] = await pool.query('INSERT INTO pets (nome, especie, raça, idade, cor, microchipado, tutor, endereço, email, observações, token) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)', [nome, especie, raca, idade, cor, microchipado, tutor, endereco, email, observacoes || null, token])

        return res.status(201).json({ mensagem: 'Animal cadastrado com sucesso, guarde este token para edição ou exclusão:', token })


    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: 'Erro ao criar cadastro do animal' });

    }

}