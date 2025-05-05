export async function ExcluirAnimal(req, res) {
    const { id } = req.params
    const { token } = req.body

    if (!token) {
        return res.status(400).json({ mensagem: 'Token obrigatório' })
    }

    const cliente = await pool.connect()

    try {

        const verificar = await cliente.query('SELECT * FROM pet WHERE id=$1 AND token=$2', [id, token])

        if (verificar.rows.length === 0) {
            return res.status(404).json({ mensagem: 'Token inválido ou animal não encontrado' })
        }

        await cliente.query('DELETE FROM pet where id = $1', [id])

        return res.status(204).end()

    } catch (error) {
        console.error(error)

        return res.status(500).json({ mensagem: 'Erro ao excluir o registro do animal' })

    } finally {

        cliente.release()
    }

}