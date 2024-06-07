function buscarEndereco() {
    const cep = document.getElementById('cepInput').value;

    // Verifica se o CEP possui 8 dígitos numéricos
    if (/^\d{8}$/.test(cep)) {
      fetch(`https://viacep.com.br/ws/${cep}/json/`)
        .then(response => {
          if (!response.ok) {
            throw new Error('CEP não encontrado');
          }
          return response.json();
        })
        .then(data => {
          const enderecoDiv = document.getElementById('endereco');
          enderecoDiv.innerHTML = `
            <p><strong>CEP:</strong> ${data.cep}</p>
            <p><strong>Logradouro:</strong> ${data.logradouro}</p>
            <p><strong>Bairro:</strong> ${data.bairro}</p>
            <p><strong>Cidade:</strong> ${data.localidade}</p>
            <p><strong>Estado:</strong> ${data.uf}</p>
          `;
        })
        .catch(error => {
          const enderecoDiv = document.getElementById('endereco');
          enderecoDiv.innerHTML = `<p>${error.message}</p>`;
        });
    } else {
      const enderecoDiv = document.getElementById('endereco');
      enderecoDiv.innerHTML = `<p>CEP inválido. Por favor, insira um CEP com 8 dígitos numéricos.</p>`;
    }
  }