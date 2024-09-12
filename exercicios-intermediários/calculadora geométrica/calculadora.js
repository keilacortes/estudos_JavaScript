let opcao = ""
function areaTriangulo() {
    const base = parseFloat(prompt("Informe a base do triângulo: "))
    const altura = parseFloat(prompt("Informe a altura do triângulo: "))
    return "A área do triângulo é " + (base * altura) / 2
}
function areaRetangulo() {
    const base = parseFloat(prompt("Informe a base do retângulo: "))
    const altura = parseFloat(prompt("Informe a altura do retângulo: "))
    return "A área do retângulo é " + (base * altura)
}
function areaQuadrado() {
    const lado = parseFloat(prompt("Informe o lado do quadrado: "))
    return "A área do quadrado é " + lado ** 2
}
function areaTrapezio() {
    const baseMaior = parseFloat(prompt("Informe a base maior do trapézio: "))
    const baseMenor = parseFloat(prompt("Informe a base menor do trapézio: "))
    const altura = parseFloat(prompt("Informe a altura do trapézio: "))
    return "A área do trapézio é " + ((baseMaior + baseMenor) * altura / 2)
}
function areaCirculo() {
    const raio = parseFloat(prompt("Informe o raio do círculo: "))
    const pi = 3.14
    return "A área do círculo é: " + (pi * (raio ** 2))
}

do {
    opcao = prompt("Selecione uma opção:\n 1. Calcular a área do Triângulo\n 2. Calcular a área do Retângulo\n 3. Calcular a área do Quadrado\n 4. Calcular a área do Trapézio\n 5. Calcular a área do círculo\n 6. Sair")
    switch (opcao) {
        case "1":
            alert(areaTriangulo())
            break;
        case "2":
            alert(areaRetangulo())
            break
        case "3":
            alert(areaQuadrado())
            break
        case "4":
            alert(areaTrapezio())
            break
        case "5":
            alert(areaCirculo())
            break
        case "6":
            alert("Saindo da calculadora...")
            break
        default:
            alert("Opção inválida!")
            break;
    }
} while (opcao !== "6");
