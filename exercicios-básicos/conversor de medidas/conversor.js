let valorEmMetros = parseFloat(prompt("Digite um valor em metros: "))
const opcao = prompt("Escolha uma opção para converter o valor:\n a) milímetros(mm)\n b) centímetros(cm)\n c) decímetro(dm)\n d) decâmetro(dam)\n e) hectômetro(hm)\n f) quilômetro(hm)")
switch (opcao){
    case "a":
        let milimetros = valorEmMetros * 1000
        alert(valorEmMetros + " metros em milímetros é " + milimetros)
        break
    case "b":
        let centimetros = valorEmMetros * 100
        alert(valorEmMetros + " metros em centímetros é " + centimetros)
        break
    case "c":
        let decimetros = valorEmMetros * 10
        alert(valorEmMetros + " metros em decímetros é " + decimetros)
        break
    case "d":
        let decametro = valorEmMetros / 10
        alert(valorEmMetros + " metros em decâmetro é " + decametro)
        break
    case "e":
        let hectometro = valorEmMetros / 100
        alert(valorEmMetros + " metros em hectômetro é " + hectometro)
        break
    case "f":
        let quilometro = valorEmMetros / 1000
        alert(valorEmMetros + " metros em quilômetros é " + quilometro)
        break
    default:
        alert("Opção inválida!")
}