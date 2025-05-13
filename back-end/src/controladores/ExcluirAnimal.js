import pool from "../conexaoBD.js"

export async function ExcluirAnimal(req, res) {
    const { id } = req.params
    const { token } = req.body

    if (!token) {
        return res.status(400).json({ mensagem: 'Token obrigatório' })
    }

    try {

        const [rows] = await pool.query('SELECT * FROM pets WHERE petID= ? AND token= ?', [id, token])

        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Token inválido ou animal não encontrado' })
        }

        await pool.query('DELETE FROM pets where petID = ?', [id])

        return res.status(204).end()

    } catch (error) {
        console.error(error)

        return res.status(500).json({ mensagem: 'Erro ao excluir o registro do animal' })

    }

}