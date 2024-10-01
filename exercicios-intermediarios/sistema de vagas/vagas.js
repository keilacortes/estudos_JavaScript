let opcoes = ""
let vagas = []
function listarVagas() {
    if (vagas.length > 0) {
        let resultado = "";
        for (let i = 0; i < vagas.length; i++) {
            resultado += "Vaga " + (i + 1) +
                "\nNome: " + vagas[i].nome +
                "\nCódigo: " + i +
                "\nCandidatos inscritos: " + vagas[i].candidatos.length + "\n\n"
        }
        return resultado
    } else {
        return "Não há vagas!"
    }
}
function criarVaga() {
    const vaga = {}
    vaga.nome = prompt("Digite o nome da vaga:")
    vaga.descricao = prompt("Digite a descrição da vaga:")
    vaga.dataLimite = prompt("Digite a data limite de inscrições para esta vaga:")
    vaga.candidatos = []
    
    if (confirm("Nome da vaga: " + vaga.nome + "\nDescrição da vaga: " + vaga.descricao + "\nData limite: " + vaga.dataLimite + "\n\nAdicionar vaga?")) {
        vagas.push(vaga)
        alert("Vaga adicionada!")
    }else{
        alert("Vaga não adicionada.")
    }
}
function visualizarVaga() {
    let resultado = ""
    if (vagas.length > 0) {
        let cod = parseFloat(prompt("Digite o código da vaga: "))
        if (vagas[cod]) {
            resultado = "Código da vaga: " + cod +
                "\nNome: " + vagas[cod].nome +
                "\nDescrição: " + vagas[cod].descricao +
                "\nData limite: " + vagas[cod].dataLimite +
                "\nQuantidade de candidatos: " + vagas[cod].candidatos.length +
                "\nNome dos candidatos: "
            if (vagas[cod].candidatos.length > 0) {
                for (let i = 0; i < vagas[cod].candidatos.length; i++) {
                    resultado += "\n" + vagas[cod].candidatos[i].nome
                }
            } else {
                resultado += "Nenhum candidato inscrito."
            }
        } else {
            resultado = "Código inválido!"
        }
    } else {
        resultado = "Não há vagas!"
    }
    return resultado
}

function inscreverCandidato() {
    if (vagas.length > 0) {
        const candidato = {};
        candidato.nome = prompt("Digite o nome do candidato: ")
        let codVaga = parseFloat(prompt("Digite o código da vaga para inscrição: "))

        if (vagas[codVaga]) {
            if (confirm("Nome do candidato: " + candidato.nome + "\n" + visualizarVaga(codVaga) + "\nConfirmar inscrição?")) {
                vagas[codVaga].candidatos.push(candidato)
                alert("Candidato(a) adicionado(a)")
            } else {
                alert("Candidato(a) não adicionado(a)")
            }
        } else {
            alert("Código da vaga inválido!")
        }
    } else {
        alert("Não há vagas!")
    }
}
function excluirVaga() {
    if (vagas.length > 0) {
        let cod = parseFloat(prompt("Digite o código da vaga que deseja excluir: "))
        if (vagas[cod]) {
            if (confirm(visualizarVaga() + "\nExcluir vaga " + cod + "?")) {
                vagas.splice(cod, 1)
                alert("Vaga excluída com sucesso!")
            } else {
                alert("Vaga não excluída.")
            }
        } else {
            alert("Código inválido!")
        }
    } else {
        alert("Não há vagas!")
    }
}

do{
    opcoes = prompt("Vagas disponíveis: " + vagas.length + "\n\nEscolha uma opção:\n 1. Listar vagas disponíveis\n 2. Criar uma nova vaga\n 3. Visualizar uma vaga\n 4. Inscrever um candidato em uma vaga\n 5. Excluir uma vaga\n 6. Sair")
    switch (opcoes) {
        case "1":
            alert(listarVagas())
            break
        case "2":
            criarVaga()
            break
        case "3":
            alert(visualizarVaga())
            break
        case "4":
            inscreverCandidato()
            break
        case "5":
            excluirVaga()
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!")
            break
    }
}while(opcoes !== "6")