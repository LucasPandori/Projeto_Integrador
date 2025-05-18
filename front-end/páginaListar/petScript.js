const petContainer = document.querySelector("#petContainer");


const getPets = async () => {
    const url = `http://localhost:3000/amahvet`
    const resp = await fetch(url)
    const data = await resp.json()
    createPetCards(data)
}

const createPetCards = (data) => {
    for (let i = 0; i < data.length; i += 1) {
        const card = document.createElement('div')
        card.classList.add("pet")

        const nome = data[i].nome
        const especie = data[i].especie
        const raca = data[i].raca
        const local = data[i].endereco
        const dia = data[i].dia
        const foto = data[i].foto

        const petInnerHTML = `
        <div class="foto">
            <img src="${foto}" alt="">
        </div>
        <div class="info">
            <h3 class="especie">${especie}</h3>
            <h3 class="raca">${raca}</h3>
            <h3 class="nome-do-pet">Nome: <span>${nome}</span></h3>
            <h3 class="cor">Cor: <span>${cor}</span</h3>
            <h3 class="idade">Idade: <span>${idade}</span</h3>
            <h3 class="endereco">Endereço: <span>${endereco}</span</h3>
            <h3 class="telefone">Telefone: <span>${telefone}</span</h3>
            <h3 class="email">Email: <span>${email}</span</h3>
            <h3 class="tutor">Tutor: <span>${tutor}</span</h3>
            <h3 class="observacoes">${observacoes}</h3>
        </div>
        `

        card.innerHTML = petContainer
        petContainer.appendChild(card)
    }
}

getPets()