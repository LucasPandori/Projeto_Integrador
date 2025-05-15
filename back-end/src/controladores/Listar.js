import pool from "../conexaoBD.js";

export async function ListarAnimais(req, res) {
    try {
        const [rows] = await pool.query('SELECT nome, especie, raça, idade, cor, microchipado, tutor, endereço, email, observações, foto, telefone FROM pets')

        return res.status(200).json(rows)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: "Erro ao listar animais" })

    }
}