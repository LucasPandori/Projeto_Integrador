import pool from "../conexaoBD";

export async function ListarAnimais(req, res) {
    const { filtro } = req.query
    const cliente = await pool.connect()

    try {

        if (!filtro) {
            const listar = await cliente.query('SELECT * FROM pet')

            return res.status(200).json(listar.rows)
        }

        const listarFiltro = await cliente.query('SELECT * FROM pet WHERE nome = $1 OR idade = $2 OR cor = $3 OR microchipado = $4 OR especie = $5', [filtro])

        return res.status(200).json(listarFiltro.rows)


    } catch (error) {
        console.error(error)
        return res.status(500).json({ mensagem: "Erro ao listar animais" })

    } finally {

        cliente.release()
    }
}