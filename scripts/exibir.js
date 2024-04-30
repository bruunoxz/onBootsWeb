    var linhas = document.querySelectorAll('table tr:not(:first-child)');

    linhas.forEach(function (linha) {
        var celulaQuantidade = linha.cells[2];
        var celulaValorUnitario = linha.cells[3];
        var celulaTotal = linha.cells[4];

        var quantidade = parseFloat(celulaQuantidade.textContent);
        var valorUnitario = parseFloat(celulaValorUnitario.textContent);
        celulaValorUnitario.textContent = formatarValor(valorUnitario);

        if(validarQuantidade(quantidade) & validarUnidade(valorUnitario)){
            let valorTotal = calcularTotal(quantidade, valorUnitario)
            celulaTotal.textContent = formatarValor(valorTotal)
        }else if(!validarQuantidade(quantidade)){
            celulaQuantidade.textContent = "QUANTIDADE INVÁLIDA"
            celulaQuantidade.style.color = "red";
        }else if(!validarUnidade(valorUnitario)){
            celulaValorUnitario.textContent = "VALOR INVÁLIDO"
            linha.cells[0].style.backgroundColor = "red";
            linha.cells[1].style.backgroundColor = "red";
            linha.cells[2].style.backgroundColor = "red";
            linha.cells[3].style.backgroundColor = "red";
            linha.cells[4].style.backgroundColor = "red";
        }
    });


function validarQuantidade(quantidade){
    if(quantidade<1 || isNaN(quantidade)){
        return false;
    }else{
        return true;
    }
}

function validarUnidade(valorUnitario){
    if(valorUnitario<1 || isNaN(valorUnitario)){
        return false;
    }else{
        return true;
    }
}

function formatarValor(valor){
    return valor.toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL',
        minimumFractionDigits: 2
    });
}

function calcularTotal(quantidade, valorUnitario){
    return quantidade * valorUnitario
}

function apagarLinha(elemento) {
    elemento.parentNode.removeChild(elemento);
}
