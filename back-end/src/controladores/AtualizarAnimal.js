import pool from "../conexaoBD"

export async function EditarAnimal(req, res) {
    const { id } = req.params
    const { nome, idade, raca, cor, observacoes, guarda, token } = req.body

    if (!token) {
        return res.status(400).json({ mensagem: 'Token obrigatório' })
    }

    if (!nome || !idade || !raca || !cor || !observacoes || !guarda) {
        return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' })

    }

    const cliente = await pool.connect()

    try {
        const verifica = await cliente.query('SELECT * FROM pet WHERE id=$1 AND token=$2', [id, token])

        if (verifica.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Token inválido ou animal não encontrado' })
        }

        const edita = await cliente.query('UPDATE pet SET nome = $1, idade = $2, raca = $3, cor = $4, observacoes = $5, guarda = $6 WHERE id = $7 ', [nome, idade, raca, cor, observacoes, guarda, id])

        return res.status(200).json({ mensagem: 'Informações editadas com sucesso' })

    } catch (error) {
        console.error(error)

        return res.status(500).json({ mensagem: "Erro ao editar as informações" })

    } finally {

        cliente.release()
    }

}