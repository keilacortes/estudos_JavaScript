let opcoes = ""
let baralho = []
do {
    opcoes = prompt(
        "Quantidade de cartas no baralho: " + baralho.length + "\n\n Selecione uma opção: \n 1- Adicionar uma carta \n 2- Puxar uma carta \n 3- Sair")
    switch (opcoes) {
        case "1":
            baralho.unshift(prompt("Digite o nome da nova carta: "))
            break
        case "2": 
            if (baralho.length > 0) {
                let cartaRemovida = baralho.shift()
                alert("A carta puxada foi: " + cartaRemovida)
        } else {
            alert("Não há cartas no baralho!")
        }
            break
        case "3":
            alert("Saindo do programa...")
            break
        default:
            alert("Opção inválida!")
            break
    }
}while(opcoes != "3")