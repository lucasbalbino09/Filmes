fetch('http://localhost:8080/filmes') // função que vai receber os dados. 
    .then(response => response.json()) // Convertendo a resposta para Json.
    .then(data => {
        const filmesList = document.getElementById('filmes-list'); // variavel que recebe a div.
        data.forEach(filme => {
            const filmeDiv = document.createElement('div'); // criando um novo elemento de interação. 
            filmeDiv.innerHTML = `
                <h2>${filme.nome}</h2>
                <img src="${filme.foto}" alt="${filme.nome}">
                <p><strong>Descrição:</strong> ${filme.descricao}</p>
                <p><strong>Elenco:</strong> ${filme.elenco}</p>
            `;
            filmesList.appendChild(filmeDiv); // Recebendo as alteraçãoes da div. 
        });
    })
    .catch(error => console.error('Erro ao carregar os filmes:', error));