const nomeTurista = prompt("Digite o seu nome: ")
let cidadesVisitadas = []
let visitou = prompt("Você já vistou alguma cidade?\n a) sim \n b) não")

while (visitou == "a"){
    cidadesVisitadas.push(prompt("Qual o nome da cidade?"))
    visitou = prompt("Você visitou alguma outra cidade?\n a) sim \n b) não")
}

alert(nomeTurista + " você visitou " + cidadesVisitadas.length + " cidades: " + cidadesVisitadas.join(", "))


