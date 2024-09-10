const palavra = prompt("Digite uma palavra: ")
let palindromo = ""

for (let i = palavra.length -1; i >= 0; i--) {
    palindromo += palavra[i]
}

if (palindromo == palavra){
    alert(palavra + " é um palíndromo!")
} else{
    alert(palavra + " não é um palíndromo!\n Prova:\n" + palavra + " é diferente de " + palindromo)
}
