let opcoes = ""
do{
    opcoes = prompt("Escolha uma opção:\n 1. Listar vagas disponíveis\n 2. Criar uma nova vaga\n 3. Visualizar uma vaga\n 4. Inscrever um candidato em uma vaga\n 5. Excluir uma vaga\n 6. Sair")
    switch (opcoes) {
        case "1":
            alert("Listar vagas disponíveis")
            break
        case "2":
            alert("Criar uma nova vaga")
            break
        case "3":
            alert("Visualizar uma vaga")
            break
        case "4":
            alert("Inscrever um candidato a uma vaga")
            break
        case "5":
            alert("Excluir uma vaga")
            break
        case "6":
            alert("Saindo...")
            break
        default:
            alert("Opção Inválida!")
            break
    }
}while(opcoes !== "6")