import supabase from "../supabase"

export async function uploadImagem(path, buffer, mimetype) {

    const { error, data } = supabase.storage.from('projeto-integrador').upload(path, buffer, {
        contentType: mimetype
    })

    if (error) {
        return null
    }

    return data.fullPath

}