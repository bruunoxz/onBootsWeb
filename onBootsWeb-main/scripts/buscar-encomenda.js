var botaoBuscar = document.querySelector("#buscar-encomendas")

botaoBuscar.addEventListener("click", function(){
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "http://localhost:3000/encomendas")
    xhr.addEventListener("load", function(){
        var resposta = xhr.responseText;
        var encomendas = JSON.parse(resposta);

        encomendas.forEach(function(cada_encomenda){
            var tabela = document.getElementById("tabelaProdutos");
            var novaLinha = document.createElement("tr");
            novaLinha.classList.add("cliente");

            novaLinha.innerHTML = `
                <td class="info-nome">${cada_encomenda["info-nome"]}</td>
                <td>${cada_encomenda["info-produto"]}</td>
                <td>${cada_encomenda["info-qtd"]}</td>
                <td>${formatarValor(cada_encomenda["info-unitario"])}</td>
                <td>${formatarValor(cada_encomenda["info-total"])}</td>
            `;
            
            tabela.appendChild(novaLinha);
        })
    })
    xhr.send();
})