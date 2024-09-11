let opcoes = ""
let pacientesNaFila = []
do {
    let listaPacientes = ""
    for (let i = 0; i < pacientesNaFila.length; i++){
        listaPacientes += (i + 1) + "º - " + pacientesNaFila[i] + "\n"
    }
    opcoes = prompt(
        "Pacientes esperando na fila:\n" + listaPacientes + "\n Selecione uma opção: \n 1- Novo Paciente \n 2- Consultar paciente \n 3- Sair")
    switch (opcoes) {
        case "1":
            pacientesNaFila.push(prompt("Digite o nome do novo paciente: "))
            break
        case "2": 
            if (pacientesNaFila.length > 0) {
                let pacienteConsultado = pacientesNaFila.shift()
                alert(pacienteConsultado + " foi consultado!")
        } else {
            alert("Não há pacientes na fila!")
        }
            break
        case "3":
            alert("Saindo do programa...")
            break
        default:
            alert("Opção inválida!")
            break
    }
}while(opcoes !== "3")