import pool from "../conexaoBD.js";

export async function ListarAnimais(req, res) {
    const { filtro } = req.query

    try {

        if (!filtro) {
            const [rows] = await pool.query('SELECT * FROM pets')

            return res.status(200).json(rows)
        }

        if (filtro === Number) {
            const [rows] = await pool.query('SELECT * FROM pets WHERE idade = ?', [filtro])

            return res.status(200).json(rows)
        }

        const [rows] = await pool.query('SELECT * FROM pets WHERE nome = ? OR cor = ? OR microchipado = ? OR especie = ?', [filtro])

        return res.status(200).json(rows)


    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: "Erro ao listar animais" })

    }
}