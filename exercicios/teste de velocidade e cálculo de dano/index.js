// Exercício 1 - Teste de Velocidade
const nomeVeiculo1 = prompt("Digite o nome do primeiro veículo: ")
const velocidadeVeiculo1 = parseFloat(prompt("Digite a velocidade do primeiro veículo: "))

const nomeVeiculo2 = prompt("Digite o nome do segundo veículo: ")
const velocidadeVeiculo2 = parseFloat(prompt("Digite a velocidade do segundo veículo: "))

if (velocidadeVeiculo1 === velocidadeVeiculo2){
    alert(nomeVeiculo1 + " e " + nomeVeiculo2 + " tem a mesma velocidade!")
} else if (velocidadeVeiculo1 > velocidadeVeiculo2){
    alert(nomeVeiculo1 + " é mais rápido que " + nomeVeiculo2 + "!")
} else {
    alert(nomeVeiculo2 + " é mais rápido que " + nomeVeiculo1 + "!")
}

// Exercício 2 - Cálculo de Dano
const nomeAtacante = prompt("Qual o nome do personagem atacante?")
let ataque = parseFloat(prompt("Qual o poder de ataque de " + nomeAtacante + "?"))

const nomeDefensor = prompt("Qual o nome do personagem defensor?")
let pontosDeVida = parseFloat(prompt("Quantos pontos de vida " + nomeDefensor + " tem?"))
let defesa = parseFloat(prompt("Qual o poder de defesa de " + nomeDefensor + "?"))
let escudo = prompt(nomeDefensor + " Possui escudo? Digite sim ou não: ")

if(ataque > defesa && escudo == "não"){
    dano = ataque - defesa
}
else if(ataque > defesa && escudo == "sim"){
    dano = (ataque - defesa) / 2
}
else {
    dano = 0
}

pontosDeVida -= dano

alert(nomeAtacante + " infrigiu " + dano + " de dano em " + nomeDefensor + "\nPontos de vida de " + nomeDefensor + ": " + pontosDeVida)


