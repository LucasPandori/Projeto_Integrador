import pool from "../conexaoBD.js"

export async function EditarAnimal(req, res) {
    const { id } = req.params
    const { nome, idade, raca, cor, observacoes, endereco, email, token } = req.body

    if (!token) {
        return res.status(400).json({ mensagem: 'Token obrigatório' })
    }

    try {
        const [rows] = await pool.query('SELECT * FROM pets WHERE petID=? AND token=?', [id, token])

        if (rows.length === 0) {
            return res.status(404).json({ mensagem: 'Token inválido ou animal não encontrado' })
        }

        const [result] = await pool.query('UPDATE pets SET nome = ?, idade = ?, raça = ?, cor = ?, observações = ?, endereço = ?, email = ? WHERE petID = ? ', [nome, idade, raca, cor, observacoes, endereco, email, id])

        return res.status(200).json({ mensagem: 'Informações editadas com sucesso' })

    } catch (error) {
        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao editar as informações" })

    }

}