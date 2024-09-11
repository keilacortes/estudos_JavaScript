let opcoes = ""

do{
    opcoes = (prompt("Selecione uma das opções: \n 1- Opção um \n 2- Opção dois \n 3- Opção três \n 4- Opção quatro \n 5- Encerrar"))
    switch (opcoes) {
        case "1":
            alert("Opção 1 escolhida!")
            break
        case "2":
            alert("Opção 2 escolhida!")
            break
        case "3":
            alert("Opção 3 escolhida!")
            break
        case "4":
            alert("Opção 4 escolhida!")
            break
        case "5":
            break
    }
    
}while(opcoes !== "5")

alert("Sistema está sendo encerrado...")

