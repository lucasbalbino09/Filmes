// Importação dos módulos necessários
const express = require('express');
const cors = require('cors'); // Pacote CORS para lidar com solicitações de diferentes origens
const filmes = require('./filmes.json'); // Importação dos dados dos filmes
const path = require('path');

// Criação da instância do Express
const app = express();

// Definição da porta em que o servidor irá ouvir
const PORT = 8080;

// Configuração do middleware CORS para permitir solicitações de diferentes origens
app.use(cors()); // Essa linha adiciona o middleware CORS ao aplicativo Express

// Definição do middleware para servir arquivos estáticos
app.use(express.static(path.join(__dirname, 'public')));

// Definição da rota para os filmes
app.get('/filmes', (req, res) => {
    res.json(filmes); // Retorna os dados dos filmes como uma resposta JSON
});

// Inicialização do servidor Express
app.listen(PORT, () => {
    console.log(`Servidor em execução em http://localhost:${PORT}`);
});