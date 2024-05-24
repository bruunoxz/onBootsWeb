async function calcularFrete(cepDestino) {
    const cepOrigem = 09572000; // Defina o CEP de origem
    const peso = 1; // Peso da encomenda em quilogramas
    const comprimento = 20; // Comprimento da encomenda em centímetros
    const altura = 10; // Altura da encomenda em centímetros
    const largura = 15; // Largura da encomenda em centímetros

    // URL da API do Melhor Envio
    const apiUrl = 'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate';

    // Corpo da requisição
    const requestData = {
        from: cepOrigem,
        to: cepDestino,
        products: [{
            weight: peso,
            width: largura,
            height: altura,
            length: comprimento
        }],
        services: ['CORREIOS-SEDEX', 'CORREIOS-PAC'] // Serviços de entrega desejados
    };

    try {
        // Faz a requisição à API do Melhor Envio
        const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                // Adicione aqui seus headers de autenticação, se necessário
            },
            body: JSON.stringify(requestData)
        });

        // Verifica se a resposta da API foi bem sucedida
        if (response.ok) {
            // Converte a resposta para JSON
            const data = await response.json();
            return data;
        } else {
            // Caso contrário, lança um erro com o status da resposta
            throw new Error(`Erro na requisição: ${response.status}`);
        }
    } catch (error) {
        // Captura e trata erros de requisição
        console.error('Erro ao calcular frete:', error);
        throw error;
    }
}

function exibirResultado(data) {
    // Crie elementos HTML para exibir os resultados
    const resultadoFrete = document.createElement('p');
    resultadoFrete.textContent = `Valor do frete: R$ ${data.valorFrete.toFixed(2)}`;

    const prazoEntrega = document.createElement('p');
    prazoEntrega.textContent = `Prazo de entrega: ${data.prazoEntrega} dias`;

    // Adicione os elementos criados ao DOM para exibição na tela
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ''; // Limpa o conteúdo anterior, se houver
    resultadoDiv.appendChild(resultadoFrete);
    resultadoDiv.appendChild(prazoEntrega);
}

function exibirErro(error) {
    // Crie um elemento HTML para exibir a mensagem de erro
    const erroDiv = document.getElementById('erro');
    if (erroDiv) {
        erroDiv.textContent = `Erro ao calcular frete: ${error.message}`;
    } else {
        console.error('Elemento de erro não encontrado no DOM');
    }
}

async function calcularFreteAPI(cepDestino) {
    // Simulação da requisição à API do Melhor Envio
    return new Promise((resolve, reject) => {
        // Aqui você faria a requisição real à API usando fetch ou outro método

        // Simulação de uma resposta bem sucedida
        setTimeout(() => {
            const data = {
                valorFrete: 10.50,
                prazoEntrega: 3
            };
            resolve(data);
        }, 1000); // Simula um atraso de 1 segundo para a requisição
    });
}


function calcularFrete() {
    const cepDestino = document.getElementById('cepInput').value; // Obtém o valor do CEP de destino do input
    // Chame a função assíncrona calcularFrete e não a própria função calcularFrete
    calcularFreteAPI(cepDestino)
        .then(data => {
            // Lógica para exibir os resultados do cálculo de frete
            exibirResultado(data);
        })
        .catch(error => {
            // Lógica para lidar com erros
            exibirErro(error);
        });
}