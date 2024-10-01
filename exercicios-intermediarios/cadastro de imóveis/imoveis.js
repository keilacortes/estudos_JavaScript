let imoveis = []
let opcao = ""
do{
    opcao = prompt("Quantidade de imóveis cadastrados: " + imoveis.length + "\n\nEscolha uma opção: \n1- Salvar novo imóvel \n2- Mostrar imóveis salvos \n3- Sair")
    switch (opcao) {
        case "1":
            const imovel = {}
            imovel.nomePropietario = prompt("Digite o nome do Proprietário: ")
            imovel.quartos = prompt("Digite quantos quartos o imóvel possui: ")
            imovel.banheiros = prompt("Digite quantos banheiros o imóvel possui: ")
            imovel.garagem = prompt("O imóvel possui garagem? ")
            imoveis.push(imovel)
            break
        case "2":
            if (imoveis.length > 0) {
                for (let i = 0; i < imoveis.length; i++) {
                    alert(
                        "Imóvel " + (i + 1) +
                        "\nProprietário: " + imoveis[i].nomePropietario +
                        "\nQuartos: " + imoveis[i].quartos +
                        "\nBanheiros: " + imoveis[i].banheiros +
                        "\nGaragem: " + imoveis[i].garagem
                    )
                }
                break
            } else {
                alert("Nenhum imóvel cadastrado.")
            }
            break
        case "3":
            alert("Saindo do programa...")
            break
        default:
            alert("Opção inválida!")
            break
    }
}while(opcao !== "3")