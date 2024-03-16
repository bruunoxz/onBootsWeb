function adicionarLinha(){
    document.getElementById("adicionar").addEventListener("click", function() {
        // Obter os valores dos campos do formulário
        var nome = document.getElementById("nome").value;
        var produto = document.getElementById("produto").value;
        var quantidade = document.getElementById("quantidade").value;


        if(validarQuantidade()){
            switch(produto){
                case "Air Force 1 White":
                    let af1White = quantidade * 799.99
                    valor = formatarValor(799.99)
                    total = formatarValor(af1White)
                    break;
                case "Puma Suede XL Red":
                    let suedeRed = quantidade * 549.90
                    valor = formatarValor(549.90)
                    total = formatarValor(suedeRed)
                    break;
                case "Puma 180 White":
                    let white180 = quantidade * 699.99
                    valor = formatarValor(699.99)
                    total = formatarValor(white180)
                    break;
                case "Puma 180 Black":
                    let black180 = quantidade * 699.99
                    valor = formatarValor(699.99)
                    total = formatarValor(black180)
                    break;
                case "Adidas Campus 00s Black White":
                    let campusBlack = quantidade * 699.99
                    valor = formatarValor(699.99)
                    total = formatarValor(campusBlack)
                    break;
                case "Qix Hexagon Black":
                    let hexagonBlack = quantidade * 699.99
                    valor = formatarValor(699.99)
                    total = formatarValor(hexagonBlack)
                    break;
            }

            var tabela = document.getElementById("tabelaProdutos");
            var novaLinha = document.createElement("tr");


            novaLinha.innerHTML = `
                    <td>${nome}</td>
                    <td>${produto}</td>
                    <td>${quantidade}</td>
                    <td>${valor}</td>
                    <td>${total}</td>
                    `
            
            tabela.appendChild(novaLinha);
        }else{
            var mensagemErro = "<p class='erro'>Quantidade inválida</p>";
            document.querySelector('.novaEncomenda').insertAdjacentHTML('afterend', mensagemErro);
        }
    });
}