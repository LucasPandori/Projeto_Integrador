import pool from "../conexaoBD.js"

export async function EditarAnimal(req, res) {
    const { id } = req.params
    const { nome, idade, raca, cor, observacoes, token } = req.body

    if (!token) {
        return res.status(400).json({ mensagem: 'Token obrigatório' })
    }

    if (!nome || !idade || !raca || !cor || !observacoes) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })

    }

    try {
        const [rows] = await pool.query('SELECT * FROM pets WHERE id=? AND token=?', [id, token])

        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Token inválido ou animal não encontrado' })
        }

        const [result] = await cliente.query('UPDATE pets SET nome = ?, idade = ?, raca = ?, cor = ?, observacoes = ?, WHERE id = ? ', [nome, idade, raca, cor, observacoes, id])

        return res.status(200).json({ mensagem: 'Informações editadas com sucesso' })

    } catch (error) {
        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao editar as informações" })

    }

}