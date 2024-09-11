let dinheiroTotal = parseFloat(prompt("Digite a quantidade de dinheiro inicial: "))
let opcoes = ""

do {
    opcoes = prompt("Quantidade de dinheiro: " + dinheiroTotal + "\n\n Selecione uma opção: \n a) Adicionar dinheiro \n b) Remover dinheiro \n c) Sair") 
    switch (opcoes){
        case "a":
            let adicionar = parseFloat(prompt("Digite o valor que será adicionado: "))
            dinheiroTotal += adicionar
            continue
        case "b":
            let remover = parseFloat(prompt("Digite o valor que será removido: "))
            dinheiroTotal -= remover
            continue
        default:
            alert("Opção inválida!")
    }
} while(opcoes !== "c")
