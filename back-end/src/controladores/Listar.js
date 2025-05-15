import pool from "../conexaoBD.js";

export async function ListarAnimais(req, res) {
    try {
        const [rows] = await pool.query('SELECT * FROM pets')

        return res.status(200).json(rows)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: "Erro ao listar animais" })

    }
}