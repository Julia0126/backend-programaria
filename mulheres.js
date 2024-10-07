const express = require("express") // iniciando o express
const router = express.Router() // configurando a primeira parte da rota
const { v4: uuidv4 } = require('uuid');

const app = express() // iniciando o app
app.use(express.json())
const porta = 3333 // criando a porta

// criando lista inicial de mulheres
const mulheres = [
    {
        id: '1',
        nome:'Simaria Limão',
        imagem:'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        id: '2',
        nome: 'Joana Consta',
        imagem:'https://github.com/joana.png',
        minibio: 'QA e instrutora'
    },
    {
        id: '3',
        nome:'Iana Chan',
        imagem:'',
        minibio:'Fundadora da PrograMaria'
    }

]

//GET
function mostraMulheres(request, response) {
    response.json(mulheres)
}

//POST
function criaMulher(request, response){
    const novaMulher = {
        id: uuidv4(),
        nome: request.body.nome,
        imagem: request.body.imagem,
        minibio: request.body.minibio
    }

    mulheres.push(novaMulher)

    response.json(mulheres)
}

//PATCH
function corrigeMulher(request, response){
    function encontraMulher(mulher){
        if (mulher.id === request.params.id) {
            return mulher
        }
    }

    const mulherEncontrada = mulheres.find(encontraMulher)

    if (request.body.nome) {
        mulherEncontrada.nome = request.body.nome
    }

    if (request.body.minibio) {
        mulherEncontrada.minibio = request.body.minibio
    }

    if (request.body.imagem) {
        mulherEncontrada.imagem = request.body.imagem
    }

    response.json(mulheres)
}

// Função PORTA
function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.patch('/mulheres/:id', corrigeMulher)) // config. rota PATCH /mulheres/:id
app.use(router.get('/mulheres', mostraMulheres)) // config. rota GET /mulheres
app.use(router.post('/mulheres', criaMulher)) // config. rota POST /mulheres
app.listen(porta, mostraPorta) // Servidor 'ouvindo' a porta