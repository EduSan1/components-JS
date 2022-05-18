"use strict";

const cardContainer = document.getElementById('cardContainer')

const gerarCard = (aluno) => {
    // const card = document.createElement('card-aluno')
    // card.setAttribute("data-nome",aluno.nome)
    // card.setAttribute("status",aluno.status)
    // card.setAttribute("team",aluno.turma)
    // card.setAttribute("image",aluno.foto)
    const div = document.createElement("div")

    div.innerHTML = `
    <card-aluno
     data-nome="${aluno.nome}"
     data-bgcolor="${aluno.status}"
     team="${aluno.turma}"></card-aluno>
    `
     //image="${aluno.foto}"
     
    cardContainer.appendChild(div)
}

const getAlunos = async () => {
    const url = "https://testeleonid.herokuapp.com/alunos"
    const response = await fetch(url);
    const data = await response.json();
    return data
}

const gerarAlunos = async () => {
    const alunos = await getAlunos()

    alunos.map(gerarCard)

}

gerarAlunos()