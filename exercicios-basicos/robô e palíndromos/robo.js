let numero = parseFloat(prompt("Digite o número que será multiplicado: "))
let tabuada = ""
for (let i = 1; i <= 20; i++){
    tabuada += ("\n" + numero + " x " + i + 
        " = " + (numero * i))
}
alert("Tabuada de 1 a 20 do número " + numero + ":" + tabuada)
