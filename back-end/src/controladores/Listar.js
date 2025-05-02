import pool from "../conexaoBD";

export async function ListarAnimais(req, res) {
    const cliente = await pool.connect()

    try {
        const listar = await cliente.query('SELECT * FROM pet')

        return res.status(200).json(listar.rows)

    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: "Erro ao listar animais" })

    } finally {

        cliente.release()
    }
}