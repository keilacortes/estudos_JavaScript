// exercício 1 - cadastro de recrutas

let nome = prompt("Digite seu nome: ")
let sobrenome = prompt("Digite seu sobrenome: ")
let anoDeNascimento = prompt("Digite seu ano de nascimento: ")
let campoDeEstudo = prompt("Digite seu campo de estudo: ")

console.log("Recruta:",nome, sobrenome,anoDeNascimento)
console.log("O campo de estudo do recruta é:",campoDeEstudo)


// exercício 2 - calculadora de 4 operações

let primeiroValor = prompt("Digite o primeiro número: ")
let segundoValor = prompt("Digite o segundo número: ")

const x = parseFloat(primeiroValor)
const y = parseFloat(segundoValor)

const soma = x + y
const subtracao = x - y
const multiplicacao = x * y
const divisao = x / y

console.log(
    "O resultado da soma é:" + soma +
    "\nO resultado da subtração é" + subtracao +
    "\nO resultado da multiplicação é:" + multiplicacao +
    "\nO resultado da divisão é:" + divisao)