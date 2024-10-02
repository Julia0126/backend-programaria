const express = require("express")
const router = express.Router()


const app = express()
const porta = 3333

const mulheres = [
    {
        nome:'Simaria Limão',
        imagem:'https://github.com/simaraconceicao.png',
        minibio: 'Desenvolvedora e instrutora'
    },
    {
        nome: 'Joana Consta',
        imagem:'https://github.com/joana.png',
        minibio: 'QA e instrutora'
    },
    {
        nome:'Iana Chan',
        imagem:'',
        minibio:'Fundadora da PrograMaria'
    }

]

function mostraMulheres(request, response) {
    response.json(mulheres)
}

function mostraPorta(){
    console.log("Servidor criado e rodando na porta ", porta);
}

app.use(router.get('/mulheres', mostraMulheres))
app.listen(porta, mostraPorta)