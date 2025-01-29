# Backend do Projeto Mulheres em Tech Brasil

<p align="center">
  <img src="https://i.imgur.com/037ZsLG.png" alt="Logo Mulheres na Tech" width="200">
</p>

![Versão](https://img.shields.io/badge/Versão-1.0.0-brightgreen)  
![GitHub Stars](https://img.shields.io/github/stars/Julia0126/backend-programaria?style=social)  
![Último commit](https://img.shields.io/github/last-commit/Julia0126/backend-programaria) 

Este repositório contém o backend desenvolvido durante o curso **Minha Primeira API**. O projeto foi criado com o objetivo de fornecer uma API robusta e escalável para integração com o frontend e outros serviços.

## 📋 Descrição do Projeto

O backend do Projeto Programaria foi desenvolvido como parte do curso **Minha Primeira API**, onde aprendemos a criar APIs RESTful e gerenciar banco de dados. Este projeto é responsável por gerenciar a lógica de negócio, interagir com o banco de dados e expor endpoints para comunicação com o frontend.

## 🛠️ Tecnologias Utilizadas

- **JavaScript**: Linguagem principal utilizada para o desenvolvimento do backend, com foco na criação de rotas e lógica de negócio.
- **Node.js**: Ambiente de execução para JavaScript no servidor, permitindo alta performance e escalabilidade.
- **Express**: Framework utilizado para gerenciar rotas, middlewares e facilitar a criação de APIs RESTful.
- **MongoDB**: Banco de dados NoSQL utilizado para armazenar as informações de forma flexível e escalável.
- **Mongoose**: Biblioteca para modelagem de dados em MongoDB, proporcionando uma interface simples e intuitiva.
- **Render**: Plataforma de hospedagem onde o backend foi implementado, permitindo acesso ao serviço de forma prática e gratuita.

## 🛣️ Rotas da API

- GET /mulheres: Retorna uma lista de mulheres.
- POST /mulheres: Adiciona uma nova mulher.
- PUT /mulheres/:id: Atualiza as informações de uma mulher específica.
- DELETE /mulheres/:id: Remove uma mulher específica.

## 🚀 Como Executar o Projeto

### Pré-requisitos

- Node.js instalado (versão 16 ou superior)
- npm ou yarn instalado
- Banco de dados configurado (MongoDB, PostgreSQL, etc.)

### Passos para Execução

1. Clone o repositório:
```
   git clone https://github.com/Julia0126/backend-programaria.git
   cd backend-programaria
```

2. Instale as dependências:
```
npm install
# ou
yarn install
```

3. Configure as variáveis de ambiente:
Crie um arquivo .env na raiz do projeto e adicione as seguintes variáveis:
```
PORT=3000
DATABASE_URL=sua_url_de_conexao_com_o_banco
JWT_SECRET=seu_segredo_jwt
```

4. Execute o projeto:
```
npm start
# ou
yarn start
```

5. Acesse a API:
```
- Local: http://localhost:3000
- Documentação da API (se usar Swagger): http://localhost:3000/api-docs
```

📂 Estrutura do Projeto
```
backend-programaria/
├── src/
│   ├── controllers/       # Controladores das rotas
│   ├── models/            # Modelos do banco de dados
│   ├── routes/            # Definição das rotas
│   ├── services/          # Lógica de negócio
│   ├── utils/             # Utilitários (helpers, middlewares, etc.)
│   └── app.js             # Configuração do Express
├── tests/                 # Testes automatizados
├── .env.example           # Exemplo de arquivo de variáveis de ambiente
├── .gitignore             # Arquivos e pastas ignorados pelo Git
├── package.json           # Dependências e scripts do projeto
└── README.md              # Este arquivo
```

## 🤝 Como Contribuir
Faça um fork do projeto.

- Crie uma branch para sua feature (git checkout -b feature/nome-da-feature).
- Commit suas alterações (git commit -m 'Adiciona nova feature').
- Push para a branch (git push origin feature/nome-da-feature).
- Abra um Pull Request.


Feito com ❤️ por Júlia Almeida durante o curso Minha Primeira API.
